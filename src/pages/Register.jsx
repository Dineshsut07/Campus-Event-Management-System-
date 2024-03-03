import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; 
import './Login.css'; 
import { Facebook, Google, Instagram, Twitter } from "@mui/icons-material";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword:'',
  });
  const [err,setErr] =useState(null);

  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/register', inputs);
      navigate("/login");
      console.log(res);
    } catch (error) {
      setErr(error.response.data);
      console.log(error);
    }
  };
  
  return (
    <div className="flex items-center justify-center h-[100vh] bg-black ">
    <div className="form-container w-[390px] ">
      <p className="title">Register</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username"  placeholder ="" onChange={handleChange}  />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder=""  onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="password">New Password</label>
          <input type="password" name="password" id="password" placeholder="" onChange={handleChange} />
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder=""  onChange={handleChange} />
        </div>
        <button  type="submit" className='w-full p-4 mt-6 bg-pink-500 rounded-xl '>Sign up</button>
      </form>
      <div className="social-message">
        <div className="line"></div>
        <p className="message">SignUp  with social accounts</p>
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
        Already Have an account ?
        <Link rel="noopener noreferrer" to="/login" className="">
          Sign in
        </Link>
      </p>
    </div>
    </div>
  );
};

export default Register;
