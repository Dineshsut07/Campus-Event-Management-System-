import React from 'react';
import '../index.css';
const Sidebar = () => {
  return (
    <div className="w-64 h-full p-6 bg-gray-200">
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-medium">Events</h3>
        <ul className="list-unstyled">
          <li className="mb-1">Event 1</li>
          <li className="mb-1">Event 2</li>
          <li className="mb-1">Event 3</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-medium">Category</h3>
        <select className="w-full p-2 border border-gray-300 rounded">
          <option value="technical">Technical</option>
          <option value="management">Management</option>
          <option value="mega-event">Mega Event</option>
        </select>
      </div>
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-medium">Profile</h3>
        <p>John Doe</p>
      </div>
      <div>
        <h3 className="mb-2 text-xl font-medium">Create Event</h3>
        <button className="w-full p-2 text-white bg-blue-500 rounded">
          Create
        </button>
      </div>
    </div>
  );
};

export default Sidebar;