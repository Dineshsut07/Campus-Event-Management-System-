import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ParticipationModel from './ParticipationModel';
import { useParticipation } from '../context/ParticipationContext';

const Card = ({ event }) => {
  const { hasParticipated, participateInEvent } = useParticipation();
  const [showModal, setShowModal] = useState(false);
  const [participated, setParticipated] = useState(false);
  const handleParticipateClick = () => {
    setShowModal(true);
    participateInEvent(event.eventid);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  if (!event) {
    return <div>not found</div>;
  }
    // Function to update participation status upon successful form submission
    const handleParticipationSuccess = () => {
      setParticipated(true);
    };

  const { title, desc, img, eventid } = event;

  return (
    <>
      <div className="w-full max-w-sm mx-auto overflow-hidden text-white transition-transform duration-300 ease-out transform rounded shadow-lg h-78 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105">
        {img && (
          <Link to={`/events/${eventid}`}>
            <img
              className="object-cover object-center w-full h-48 overflow-hidden"
              src={`http://localhost:8080/images/${img}`}
              alt="Card Image"
            />
          </Link>
        )}

        <div className="px-4 py-2 md:px-6 md:py-4">
          <div className="mb-2 text-xl font-bold">
            <Link to={`/events/${eventid}`} className='cursor-pointer'>{title}</Link>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-4">
          <button
            className={`px-4 py-2 text-black rounded-full focus:outline-none ${participated ? 'bg-green-500 hover:bg-green-700' : 'bg-pink-500 hover:bg-pink-700'}`}
            onClick={handleParticipateClick}
            disabled={participated} // Disable button if participated
          > 
            {participated ? 'Participated' : 'Participate'}
          </button>
        </div>
      </div>
      {showModal && <ParticipationModel closeModal={handleModalClose} event={event} onParticipationSuccess={handleParticipationSuccess} />}
          </>
  );
};

export default Card;
