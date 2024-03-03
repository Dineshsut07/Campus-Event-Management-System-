import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="max-w-sm mx-auto overflow-hidden text-white transition-transform duration-300 ease-out transform rounded shadow-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105">
            {imageUrl && (
                <img
                    className="object-cover object-center w-full h-48"
                    src={imageUrl}
                    alt="Card Image"
                />
            )}
            <div className="px-4 py-2 md:px-6 md:py-4">
                <div className="mb-2 text-xl font-bold">{title}</div>
                <p className="text-base text-gray-300">{description}</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-4">
                <button className="px-4 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-700 focus:outline-none">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Card;
