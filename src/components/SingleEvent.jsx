import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import moment from 'moment';
import ParticipationModel from './ParticipationModel';
import { useParticipation } from '../context/ParticipationContext';

const SingleEvent = () => {
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true); // Add loading state
  const location = useLocation();
  const eventid = location.pathname.split('/')[2];
  const { currentUser } = useContext(AuthContext);
  const { participateInEvent, hasParticipated } = useParticipation(); // Use the participation context
  const [showModal, setShowModal] = useState(false);

  const handleParticipateClick = () => {
    setShowModal(true);
    participateInEvent(eventid); // Update participation status
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/events/${eventid}`);
        setEvent(res.data[0]);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false); // Also handle loading state in case of an error
      }
    };
    fetchData();
  }, [eventid]);

  if (loading) {
    return <div>Loading...</div>; // Render a loading message or spinner
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-black lg:flex-row">
        <div className="relative w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="  object-cover object-center w-full h-[400px]"
            src={`http://localhost:8080/images/${event.img}`}
            alt={event.title}
          />
        </div>
        <div className="flex flex-col justify-center w-full p-6 text-pink-600 lg:w-1/2">
          <h2 className="mb-4 text-3xl font-bold ">{event.title}</h2>
          <p className="mb-4 text-lg ">Description: <br></br>{event.desc}</p>
          <p className="mb-4 text-lg">DATE : {moment(event.date).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
          <p className="mb-4 text-2xl">Category: {event.cat}</p>
          <p className="mb-4 text-xl text-slate-400">{event.location}</p>
          <button className={`px-4 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-700 focus:outline-none ${hasParticipated(eventid) ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleParticipateClick} disabled={hasParticipated(eventid)}>
            {hasParticipated(eventid) ? 'Participated' : 'Participate'}
          </button>

          {currentUser.id === event.uid && (
            <>
              {/* Update button */}
              <div className="grid grid-cols-2 gap-5 mt-5">
                <button className="px-4 py-2 mr-4 text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none">Update</button>
                {/* Delete button */}
                <button className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none">Delete</button>
              </div>
            </>
          )}
        </div>
      </div>
      {showModal && <ParticipationModel closeModal={handleModalClose} event={event} />}
    </>
  );
};

export default SingleEvent;
