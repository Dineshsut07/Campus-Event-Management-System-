import React from 'react';
import { Link } from 'react-router-dom';

const LatestCard = ({ title, desc, img }) => {
   
    return (
        <div className="grid gap-3 mx-auto overflow-hidden text-white transition-transform duration-300 ease-out transform rounded shadow-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105">
            {img && (
                <img
                    className="object-center  h-48 object-cover w-[400px]"
                    src={img}
                    
                    alt="Card Image"
                />
            )}
            <div className="px-4 py-2 md:px-6 md:py-4">
                <div className="mb-2 text-xl font-bold">{title}</div>
                <p className="text-base text-gray-300">{desc}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-4">
                <button className="px-4 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-700 focus:outline-none">
                  <Link to={"/events"} >Read More</Link>
                </button>
            </div>
        </div>
    );
};

export default LatestCard;
