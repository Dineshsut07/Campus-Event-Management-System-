import React from 'react';

const AboutUs = () => {
  return (
    <section className="text-white bg-gray-900">
      <div className="container px-6 py-20 mx-auto">
        <h1 className="mb-12 text-5xl font-bold text-center">About Us</h1>
        <div className="flex flex-wrap">
          <div className="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden text-pink-300 bg-gray-800 rounded-t rounded-b-none shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">Our Mission</div>
              <ul className="w-full text-sm text-center">
                <li className="py-4 border-b">To provide high-quality products and services to our customers</li>
                <li className="py-4 border-b">To create a positive and lasting impact in the community</li>
                <li className="py-4 border-b">To empower our employees to reach their full potential</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden text-pink-300 bg-gray-800 rounded-t rounded-b-none shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">Our Vision</div>
              <ul className="w-full text-sm text-center">
                <li className="py-4 border-b">To be the leading provider of innovative solutions in our industry</li>
                <li className="py-4 border-b">To build long-lasting relationships with our customers and partners</li>
                <li className="py-4 border-b">To promote sustainability and social responsibility in all our operations</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden text-pink-300 bg-gray-800 rounded-t rounded-b-none shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">Our Values</div>
              <ul className="w-full text-sm text-center">
                <li className="py-4 border-b">Integrity: We act with honesty and integrity in all our dealings</li>
                <li className="py-4 border-b">Innovation: We embrace creativity and innovation to drive our success</li>
                <li className="py-4 border-b">Collaboration: We work together to achieve our goals and support each other</li>
                <li className="py-4 border-b">Excellence: We strive for excellence in everything we do</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;