import { createContext, useEffect, useState } from "react";

import axios from "axios";
// import { logout } from '../../../backend/controllers/auth';

export const EventContext = createContext();


export const EventContextProvider = ({children}) =>{
const [events ,setEvents] = useState([] );
      const getevents = async(inputs) =>{
        const res = await axios.get("http://localhost:8080/api/events");
        setCurrentUser(res.data);
      }
      const logout = async(inputs) =>{
        const res = await axios.post("http://localhost:8080/api/auth/logout");
        setCurrentUser(null);
      };
      useEffect(()=>{
        localStorage.setItem("users", JSON.stringify(currentUser));
      },[currentUser]);

      return <AuthContext.Provider value={{currentUser, login,logout}}> {children}</AuthContext.Provider>


      }
