import { useState } from "react";
import styles from "./style";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Event from "./pages/Event";
import CreateEvent from "./components/CreateEvent";
import Gallery from "./pages/Gallery";
import SingleEvent from "./components/SingleEvent";
import AboutUs from "./pages/Aboutus";
import Account from "./pages/Account";
import Myparticipants from "./components/MyParticipants";


// import Footer from "./components/footer/Footer";
const Layout = () => {
  return (
    <>
     <div className={`${styles.paddingX} ${styles.flexCenter}  bg-[#1e0629] sticky top-0 z-50`} >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
      <div className="">
        <Outlet />
      </div>
      
       <Footer/>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Event/>,
      },
      {
        path: "/createevent",
        element: <CreateEvent/>,
      },
      {
        path: "/gallery",
        element: <Gallery/>,
      },
      {
        path: "/events/:id",
        element: <SingleEvent/>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/account",
        element: <Account/>,
      },
      {
        path: "/myevents",
        element: <Myparticipants/>,
      },

      
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
