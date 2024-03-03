import { useState ,useEffect, useContext} from "react";

import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { AuthContext } from "../../context/AuthContext";
import Profile from "../Profile";
const Navbar = () => {
  const {currentUser} = useContext(AuthContext);


  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 300,
    });
  }, [])
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sticky z-50 flex items-center justify-between w-full py-6">
      <img src={logo} alt="DAAN" className="w-[124px] h-[32px]" />

      <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-extrabold cursor-pointer text-[17px] ${
              active === nav.title ? "text-pink-400" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-8"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`} data-aos='fade-in' className="px-2 py-2 bg-black rounded-2xl hover:bg-pink-950">{nav.title}</Link>
           
          </li>
        ))}
          {currentUser ? <Profile/>  : <li className="font-extrabold cursor-pointer text-[17px] text-white ml-8"><Link to={"/login"} className="px-2 py-2 bg-black rounded-2xl hover:bg-pink-950 "> Login</Link></li> }
          
         
      </ul>

      <div className="flex items-center justify-end flex-1 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col items-start justify-end flex-1 list-none">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-pink-400 " : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
