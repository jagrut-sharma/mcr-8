import React, { useState } from "react";
import { useData } from "../context/dataContext";
import { Link } from "react-router-dom";
import { getFilteredData } from "../utils/helperFunctions";

export default function Home() {
  const {
    dataState: {
      meetupData: { meetups },
    },
    filterValue,
    setFilterValue,
  } = useData();

  const handleChangeSelect = (e) => {
    setFilterValue((prev) => ({ ...prev, select: e.target.value }));
  };

  const filteredMeetups = getFilteredData(filterValue, meetups);

  return (
    <main className="p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold font-Libre">Meetup Events</h1>
        <select
          name="event-type"
          id="event-type"
          className="outline-none border border-gray-400 rounded-lg"
          value={filterValue.select}
          onChange={handleChangeSelect}
        >
          <option value="both">Select event type..</option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
        </select>
      </div>

      <div className="p-4 flex flex-wrap gap-4">
        {filteredMeetups.map((meet) => (
          <Link key={meet.id} to={`/${meet.id}`}>
            <div className="relative">
              <img
                src={meet.eventThumbnail}
                alt={meet.title}
                className="w-[16rem] h-[10rem] rounded-md shadow-md"
              />
              <span className="absolute top-[4px] left-[4px] text-[small] bg-white rounded-lg p-[5px]">
                {`${meet.eventType} event`}
              </span>
            </div>
            <p>
              {new Date(meet.eventEndTime).toDateString() +
                " " +
                new Date(meet.eventEndTime).toLocaleTimeString()}
            </p>
            <h3 className="font-bold text-xl">{meet.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
