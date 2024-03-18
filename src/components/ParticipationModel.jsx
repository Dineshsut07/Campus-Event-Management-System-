import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const ParticipationModel = ({ closeModal, event, onParticipationSuccess }) => {
  const { currentUser } = useContext(AuthContext);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    eventid: event.eventid,
    uid: currentUser.id,
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/participate", data);
      // Trigger callback function to update participation status
      onParticipationSuccess();
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 mx-auto mt-40 transition-opacity bg-gray-500 bg-opacity-75 pl-96">
      <div className="z-50">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" aria-hidden="true"></div>
        <span className="inline-block w-full align-middle" aria-hidden="true">&#8203;</span>
        <div className="inline-block w-full overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
          <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                  Participation Form
                </h3>
                <div className="mt-2">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block mb-1">Name</label>
                      <input className="w-full p-2 border-2 border-gray-300 rounded-md" type="text" name='name' required onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block mb-1">Email</label>
                      <input className="w-full p-2 border-2 border-gray-300 rounded-md" type="email" name='email' required onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block mb-1">Phone Number</label>
                      <input className="w-full p-2 border-2 border-gray-300 rounded-md" type="tel" name='phone' required onChange={handleChange} />
                    </div>
                    {submitted ? null : (
                      <button
                        className="w-full px-4 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-700 focus:outline-none"
                        type="submit"
                      >
                        Submit
                      </button>
                    )}
                    <button
                      className="w-full px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipationModel;
