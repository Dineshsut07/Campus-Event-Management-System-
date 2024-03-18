import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card.jsx';
import { Link, useLocation } from 'react-router-dom';

const Event = () => {
  const [events, setEvents] = useState([]);
  const cat= useLocation().search;
  const [cart, setCart] = useState([]);
  const [show ,setshow] = useState(true);
  const [ warning , setWarning] = useState();
  const [image,setImage] = useState([]);

  // const searchParams = new URLSearchParams(location.search);
  // console.log(location.search);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/events/${cat}`);
        setEvents(res.data);
        setImage(res.data);
        console.log(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDate();
  }, [cat]);

  // const filteredEvents = events.filter((event) => !cat || event.cat === cat);

  return (
    <div className='bg-black'>
      <section className='flex flex-col items-center snap-center'>
        <h2 className='text-2xl text-center text-white lg:text-6xl md:text-4xl p-7'>All<span className='font-extrabold text-pink-700'>Events</span></h2>
      <div className="flex p-6 my-6 bg-gray-600 rounded-full">
        <div className="flex items-center">
         <button className='p-3 mr-20 rounded-3xl hover:bg-black hover:text-pink-600'><Link to={"/events/"} >ALL </Link></button> 
         <button className='p-3 mr-20 rounded-3xl hover:bg-black hover:text-pink-600'><Link to={"/events/?cat=technical"} >Technical </Link></button> 
         <button className='p-3 mr-20 rounded-3xl hover:bg-black hover:text-pink-600' ><Link to={"/events/?cat=mangement"} >Mangement </Link></button> 
         <button className='p-3 mr-20 rounded-3xl hover:bg-black hover:text-pink-600'><Link to={"/events/?cat=mega"} > MEGA </Link></button> 
         <button className='p-3 mr-20 rounded-3xl hover:bg-black hover:text-pink-600'><Link to={"/events/?cat=game"} > Gaming </Link></button> 
    
        </div></div>  
        <div className="grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card key={index} event={event} />
          ))}
        </div>
      </section>
      {/* {
        show &&  <Cart cart = {cart} setCart={
      } */}
    </div>
  );
};

export default Event;