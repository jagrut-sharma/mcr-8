import { useParams } from "react-router-dom";
import { useData } from "../context/dataContext";
import { BiTime, BiLocationPlus } from "react-icons/bi";
import { BsCurrencyRupee } from "react-icons/bs";
import RsvpModal from "../components/RsvpModal";

export default function SingleMeetLink() {
  const { meetID } = useParams();
  const {
    dataState: {
      meetupData: { meetups },
    },
  } = useData();

  const meet = meetups.find(({ id }) => id === meetID);

  return (
    <main className="p-8 grid grid-cols-colLayout font-Libre">
      <div>
        <h2 className="text-2xl font-bold">{meet.title}</h2>
        <div className="mt-2">
          <p>Hosted By:</p>
          <p className="font-bold">{meet.hostedBy}</p>
        </div>
        <div className="my-4">
          <img
            src={meet.eventThumbnail}
            alt={meet.title}
            className="w-[28rem] h-[18rem] rounded-md shadow-md"
          />
        </div>
        <h3 className="font-bold text-xl">Details:</h3>
        <p className="my-4 w-[28rem]">{meet.eventDescription}</p>

        <div>
          <h2 className="text-2xl font-bold">Additional Information:</h2>
          <p>
            <span className="font-bold mr-2 inline-block my-2">
              Dress Code:
            </span>
            {meet.additionalInformation.dressCode}
          </p>
          <p>
            <span className="font-bold mr-2">Age Restrictions:</span>
            {meet.additionalInformation.ageRestrictions}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold my-4">Event Tags:</h2>
          {meet.eventTags.map((tag) => (
            <span
              key={tag}
              className="bg-red-400 w-[4rem] text-white px-2 py-1 text-md font-bold rounded-lg mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="w-full bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <div>
              <BiTime />
            </div>
            <div>
              <p>
                {`${new Date(meet.eventStartTime).toDateString()} at 
              ${new Date(meet.eventStartTime).toLocaleTimeString()} to`}
              </p>
              <p>
                {`${new Date(meet.eventEndTime).toDateString()} at 
              ${new Date(meet.eventEndTime).toLocaleTimeString()}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 my-4">
            <div>
              <BiLocationPlus />
            </div>
            <div>
              <p>{meet.location}</p>
              <p>{meet.address}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 my-4">
            <div>
              <BsCurrencyRupee />
            </div>
            <div>
              <p>{meet.price}</p>
            </div>
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-xl font-bold">{`Speakers: (${meet.speakers.length})`}</h3>

          <div className="flex gap-4">
            {meet.speakers.map((speaker, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white my-2 p-2 rounded-lg shadow"
              >
                <div>
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-[3rem] h-[3rem] object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p>{speaker.name}</p>
                  <p>{speaker.designation}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center my-4">
            <RsvpModal />
          </div>
        </div>
      </div>
    </main>
  );
}
