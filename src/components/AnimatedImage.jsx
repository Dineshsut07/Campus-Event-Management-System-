
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
const AnimatedImage = ({ image }) => {
    const imgRef = useRef();
  
    useEffect(() => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => {
        imgRef.current.style.opacity = 1;
      };
    }, [image.url]);
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
    };
  
    const imageVariants = {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
    };
  
    return (
      <motion.div
        className="relative w-full h-64 overflow-hidden transition duration-300 ease-in-out transform rounded-lg md:h-96 lg:h-full hover:scale-105"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          ref={imgRef}
          className="object-cover object-center w-full h-full"
          src={image.url}
          alt={image.alt}
          variants={imageVariants}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-sm text-white bg-black bg-opacity-75">
          {image.metadata}
        </div>
      </motion.div>
    );
  };
export default AnimatedImage;