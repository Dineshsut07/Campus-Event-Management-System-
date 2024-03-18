import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const CreateEvent = () => {
  const [page, setPage] = useState(1);
  const {currentUser} = useContext(AuthContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const [data, setData] = useState({
    title: "",
    uid: currentUser.id,
    date: "",
    location: "",
    time: "",
    category:"",
    description: ""
  });
  

  const [file, setFile] = useState();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (page === 1) {
      setPage(2);
    } else {
    const formData = new FormData();
    formData.append('image', file);
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      console.log(data);
      const res = await axios.post('http://localhost:8080/api/createevent', formData);
      console.log("sdgpjrg1 : :: " +res); // Log the response
      setShowSuccess(true);
      // navigate("/events");
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      // navigate("/events");
    } catch (error) {
      console.error(error);
    }
  }
  };
  
  const categories = ['game', 'technical', 'mega'];
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="w-full max-w-md p-8 mx-auto bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-6 text-3xl font-medium text-center">Create An Event</h1>
        {page === 1 && (
          <>
            <div className="mb-4">
              <label htmlFor="eventName" className="block mb-2 text-gray-800">Event Name:</label>
              <input type="text" name="title" className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:bg-white" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block mb-2 text-gray-800">Location:</label>
              <input type="text" name="location" className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:bg-white" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block mb-2 text-gray-800">Date:</label>
              <input type="date" name="date" className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:bg-white" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block mb-2 text-gray-800">Time:</label>
              <input type="time" name="time" className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:bg-white" onChange={handleChange} />
            </div>
          </>
        )}
        {page === 2 && (
          <>
            <div className="mb-4">
            <label htmlFor="category" className="block mb-2 text-gray-800">Category:</label>
                <select name="category" className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:bg-white" onChange={handleChange}>
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block mb-2 text-gray-800">Description:</label>
              <textarea name="description" className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:bg-white" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block mb-2 text-gray-800">Upload Image</label>
              <input type="file" name="image" className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:bg-white" onChange={handleFileChange} />
            </div>
          </>
        )}
        <div className="flex justify-between">
          {page > 1 && (
            <button type="button" onClick={() => setPage(page - 1)} className="px-4 py-2 text-white bg-gray-600 rounded">Previous</button>
          )}
          <button type='submit' className="px-4 py-2 text-white bg-pink-400 rounded">{page === 1 ? 'Next' : 'Submit'}</button>
        </div>
      </form>
      {showSuccess && (
        <div className="p-3 mt-4 font-bold text-white bg-green-500 rounded">
          Event created successfully!
        </div>
      )}
    </div>
  </div>
  );
};

export default CreateEvent;
