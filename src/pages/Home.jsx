
import { bg } from "../assets";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import LatestEvent from "../components/LatestEvent";
import Card from "../components/SingleCard";



const Home = () => {
  return (
    <div className="bg-black snap-y snap-mandatory scroll-smooth snap-center scrollbar-hide"  >
     <Hero/>
    <LatestEvent/>
    <Card/>
    <Highlights/>
    <Contact/>
    </div>
    
  );
};



export default Home;