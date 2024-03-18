import React, { useContext, useState, useRef, useEffect, forwardRef } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const profileImageRef = useRef(null);

  const toggleDropdown = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        profileImageRef.current &&
        !profileImageRef.current.contains(event.target) &&
        !event.target.closest('.dropdown-menu')
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const menu = [
    { name: 'Account Settings', link: '/account' },
    { name: 'Help', link: '/account' },
    { name: 'Create Event',link: "/createevent" },
    { name: 'Logout', action: logout },
    
  ];

  return (
    <div className="relative ml-7">
      <img
        src='./3.png'
        alt=''
        width={30}
        height={30}
        className="text-white bg-black rounded-full cursor-pointer "
        onClick={toggleDropdown}
        ref={profileImageRef}
      />
      {open && (
        <div ref={menuRef} className="absolute p-4 transition duration-200 ease-in-out bg-black border-2 border-pink-700 shadow-xl w-52 -right-5 top-12">
          <ul>
            {menu.map((menuItem, i) => (
              <li key={i} className='p-2 text-lg text-white rounded cursor-pointer hover:bg-pink-400'>
                {menuItem.action ? (
                  <span onClick={menuItem.action}>{menuItem.name}</span>
                ) : (
                  <Link to={menuItem.link}>{menuItem.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export  default Profile;