import React, { useContext, useState } from 'react';
import 'tailwindcss/tailwind.css'; 
import './Login.css'; 
import { Facebook, Google, Instagram, Twitter } from "@mui/icons-material";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
const LoginForm = () => {
  const [inputs, setInputs] = useState({

    email: '',
    password: '',
    
  });
  const [err,setErr] =useState(null);
  const navigate = useNavigate();

  const {login} = useContext(AuthContext);
  // console.log(currentUser);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await  login(inputs);
      
      navigate("/");
      console.log(res);
    } catch (error) {
      setErr(error.response.data);
      console.log(error);
    }
  }; 
  return (
    <div className="flex items-center justify-center h-[100vh] bg-black ">
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form" onSubmit={handleSubmit} >
        <div className="input-group">
          <label htmlFor="email">Username</label>
          <input type="text" name="email" id="email" placeholder="" onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="" onChange={handleChange} />
          <div className="forgot">
            <Link rel="noopener noreferrer" to="/">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button  className='w-full p-4 mt-1 bg-pink-500 rounded-xl '  type="submit">Sign in</button>
        {err && <p className='text-center text-red-500'>Invalid email or password</p>}
      </form>
      <div className="social-message">
        <div className="line"></div>
        <p className="message">Login with social accounts</p>
        <div className="line"></div>
      </div>
      <div className="social-icons">
        <button aria-label="Log in with Google" className="gap-9 icon">
           <Google/> 
          
        </button>
        <button aria-label="Log in with Google" className="gap-9 icon">
           <Facebook/> 
          
        </button>
        <button aria-label="Log in with Google" className="gap-9 icon">
           <Instagram/> 
          
        </button>
       
      </div>
      <p className="signup">
        Don't have an account?
        <Link rel="noopener noreferrer" to="/register" className="">
          Sign up
        </Link>
      </p>
    </div>
    </div>
  );
};

export default LoginForm;
