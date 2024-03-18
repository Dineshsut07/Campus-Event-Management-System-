import React, { createContext, useContext, useEffect, useState } from 'react';

const ParticipationContext = createContext();

export const useParticipation = () => useContext(ParticipationContext);

export const ParticipationProvider = ({ children }) => {
  const [participatedEvents, setParticipatedEvents] = useState(() => {
    const storedEvents = localStorage.getItem('participatedEvents');
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem('participatedEvents', JSON.stringify(participatedEvents));
  }, [participatedEvents]);

  const participateInEvent = (eventId) => {
    setParticipatedEvents((prevEvents) => [...prevEvents, eventId]);
  };

  const hasParticipated = (eventId) => {
    return participatedEvents.includes(eventId);
  };

  return (
    <ParticipationContext.Provider value={{ participateInEvent, hasParticipated }}>
      {children}
    </ParticipationContext.Provider>
  );
};
