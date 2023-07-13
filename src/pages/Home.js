import React, { useState } from "react";
import { useData } from "../context/dataContext";
import { Link } from "react-router-dom";

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
          <option value="offline">Offline</option>
          <option value="online">Online</option>
        </select>
      </div>

      <div className="p-4 flex flex-wrap gap-4">
        {meetups.map((meet) => (
          <Link key={meet.id} to={`/${meet.id}`}>
            <div>
              <img
                src={meet.eventThumbnail}
                alt={meet.title}
                className="w-[16rem] h-[10rem] rounded-md shadow-md"
              />
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
