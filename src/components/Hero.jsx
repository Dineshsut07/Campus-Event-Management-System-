import Aos from "aos";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <section className="grid items-center w-full h-[100vh] max-w-6xl grid-cols-1 gap-10 px-8 py-7 mx-auto md:grid-cols-2 overflow-auto z-10 ">
      <div>
        <span data-aos='fade-down' className="block mb-4 text-xl font-bold text-slate-400 md:text-sm">
        Lovely events guaranteed
        </span>
        <h3 data-aos='fade-right' className="text-[75px] font-semibold text-pink-400 md:text-6xl min-[280px]:text-xl ">
        More than just events Organizing.
        </h3>
        <p data-aos='fade-up' className="my-4 text-2xl font-bold md:text-lg text-slate-400 md:my-6 min-[320px]:text-sm">
           Memories are always awesome even  if you <span className="text-pink-700"><TypeAnimation
      sequence={[
       
        'Win.',
        1000,
        'Loose.',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /></span>
        </p>
        <button className="px-4 py-2 font-medium text-white transition-all bg-pink-600 rounded hover:bg-pink-800 hover:shadow-pink-800 hover:shadow-2xl active:scale-105">
          <Link to={"/events"}>Participate Now!</Link>
        </button>
      </div>
      <ShuffleGrid />
    </section>
    
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/bb.png"
  },
  {
    id: 2,
    src: "/2.png",
  },
  {
    id: 3,
    src: "/3.png",
  },
  {
    id: 4,
    src:"/5.png",
  },
  {
    id: 5,
    src:"/6.png",
  },
  {
    id: 6,
    src:"/7.png",
  },
  {
    id: 7,
    src:"/1.png",
  },
  {
    id: 8,
    src:"/3.png",
  },
  {
    id: 9,
    src:"/9.png",
  },
  {
    id: 10,
    src:"/dance.jpg",
  },
  {
    id: 11,
    src:"/coding.jpg",
  },
  {
    id: 12,
    src:"/t3.jpg",
  },
  {
    id: 13,
    src:"/crypto1.png",
  },
  {
    id: 14,
    src:"/11.png",
  },
  {
    id: 15,
    src:"/2.png",
  },
  {
    id: 16,
    src:"/10.png",
  },
  {
    id: 17,
    src:"/8.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full bg-center bg-contain"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className=" z-2 grid min-[280px]:grid-cols-3 min-[280px]:grid-rows-3 md:grid-rows-4 md:grid-cols-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;