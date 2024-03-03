import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Highlights = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        arrows: true,
    };

    const images = [
        '/1.png',
        '/6.png',
        '/8.png',
        '/9.png',
        '/2.png',
        '/5.png',
        // Add more image URLs as needed
    ];

    return (

      <div className="h-screen snap-center">
   <h2 className='text-2xl text-center text-white lg:text-6xl md:text-4xl p-7'>Enjoy<span className='font-extrabold text-pink-700'>Highlights</span></h2>
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="pt-10 slider-item">
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="object-cover w-full h-64 "
                    />
                    {/* Optional: Add a caption */}
                    <div className="slider-caption">Caption {index + 1}</div>
                </div>
            ))}
        </Slider>
        </div>
    );
};

export default Highlights;
