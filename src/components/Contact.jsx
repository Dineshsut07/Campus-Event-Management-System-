import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission here
    console.log('Form submitted:', formData);
};

  return (
    <section className='h-[100vh] snap-center'>
    
    <h2 className='text-2xl text-white lg:text-6xl md:text-4xl p-7'>Contact<span className='font-extrabold text-pink-700'>Us</span></h2>
    

        <div className="max-w-md p-8 mx-auto mt-10 text-white bg-black rounded-md shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-pink-500">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 text-white bg-transparent border-b-2 border-pink-500 focus:outline-none focus:border-pink-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 text-white bg-transparent border-b-2 border-pink-500 focus:outline-none focus:border-pink-700"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-2 text-white bg-transparent border-2 border-pink-500 focus:outline-none focus:border-pink-700"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 text-black bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>




   </section>
  )
}

export default Contact