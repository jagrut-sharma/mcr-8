import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useData } from "../context/dataContext";
import { useImmer } from "use-immer";

export default function RsvpModal() {
  let [isOpen, setIsOpen] = useState(false);
  const { rsvp, setRsvp } = useData();
  const [inputTxt, setInputTxt] = useImmer({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");

  function closeModal() {
    setIsOpen(false);
    setInputTxt({
      name: "",
      email: "",
    });
    setError("");
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleClick = () => {
    if (inputTxt.name.trim() === "" || inputTxt.email.trim() === "") {
      setError("Please enter both details");
      return;
    }
    setRsvp(true);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setInputTxt((draft) => {
      draft[e.target.name] = e.target.value;
    });
    setError("");
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-red-500 w-max text-white px-4 py-2 text-lg font-bold rounded-lg opacity-95 hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        disabled={rsvp}
      >
        {rsvp ? "Already RSVPed" : "RSVP"}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Complete your RSVP
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-base text-gray-500">
                      Fill in your personal information
                    </p>

                    {error && (
                      <h2 className="text-2xl text-red-600 font-bold text-center">
                        {error}
                      </h2>
                    )}

                    <div className="flex flex-col mt-4 font-Libre">
                      <label htmlFor="name" className="font-bold">
                        Name:
                      </label>
                      <input
                        type="name"
                        id="name"
                        name="name"
                        required
                        className="border-2 p-1 rounded-md"
                        value={inputTxt.name}
                        onChange={handleChange}
                        placeholder="enter name"
                      />
                    </div>

                    <div className="flex flex-col mt-4 font-Libre">
                      <label htmlFor="email" className="font-bold">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="border-2 p-1 rounded-md"
                        value={inputTxt.email}
                        onChange={handleChange}
                        placeholder="enter email"
                      />
                    </div>

                    <p className="text-xl mt-4 text-gray-700">
                      You have to make the payment at the venue
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-300 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleClick}
                    >
                      RSVP
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
