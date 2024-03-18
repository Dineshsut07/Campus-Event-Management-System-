import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import moment from 'moment'; // Import Moment.js

const Myparticipants = () => {
  const [events, setEvents] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:8080/api/myparticipants/${currentUser.id}`);
      // Assuming the date in the API response is in ISO format (e.g., "2024-03-16T12:00:00Z")
      const formattedEvents = result.data.map(event => ({
        ...event,
        // Format the date using Moment.js
        date: moment(event.date).format('dddd, MMMM Do YYYY, h:mm:ss a')
      }));
      setEvents(formattedEvents);
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen p-4 bg-black rounded-lg shadow">
      <h2 className="mb-4 text-4xl font-bold text-center text-white ">My Participated Events</h2>
      <ul className="space-y-5">
        {events.map((event) => (
          <li key={event.id} className="flex justify-between p-5 bg-gray-600 rounded-md">
            <span>{event.title}</span>
            <span>{event.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Myparticipants;
