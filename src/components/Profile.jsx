import React, { useContext, useState, useRef, useEffect, forwardRef } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ForwardedAiOutlineUser = forwardRef((props, ref) => {
    return <AiOutlineUser ref={ref} {...props} />;
});

const Profile = () => {
    const { logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const profileImageRef = useRef(null);

    const toggleDropdown = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && profileImageRef.current && !profileImageRef.current.contains(event.target)) {
                setOpen(!open);
            }
        };

        const handleMouseDown = (event) => {
            handleClickOutside(event);
        };

        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    const menu = [
        { name: 'Account Settings', link: '/events' },
        { name: 'Help', link: '/events' },
        { name: 'Logout', action: logout },
    ];

    return (
        <div className="relative ml-7">
            <ForwardedAiOutlineUser
                ref={profileImageRef}
                size={30}
                className="text-white bg-black rounded-full cursor-pointer "
                onClick={toggleDropdown}
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

export default Profile;
