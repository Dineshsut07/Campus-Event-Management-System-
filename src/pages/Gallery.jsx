import react from 'react';
import AnimatedImage from '../components/AnimatedImage';

const images = [
    {
      url: './1.png',
      alt: 'Dummy Image 1',
    },
    {
      url: './2.png',
      alt: 'Dummy Image 1',
    },
    {
      url: './3.png',
      alt: 'Dummy Image 1',
    },
    {
      url: './9.png',
      alt: 'Dummy Image 1',
    },
    {
      url: './5.png',
      alt: 'Dummy Image 1',
    },
    {
      url: './6.png',
      alt: 'Dummy Image 1',
    },
    {
      url: './7.png',
      alt: 'Dummy Image 1',
    },
    // {
    //   url: 'https://picsum.photos/id/1016/800/600',
    //   alt: 'Dummy Image 2',
    // },
    // {
    //   url: 'https://picsum.photos/id/1018/800/600',
    //   alt: 'Dummy Image 3',
    // },
    // {
    //   url: 'https://picsum.photos/id/1019/800/600',
    //   alt: 'Dummy Image 4',
    // },
    // {
    //   url: 'https://picsum.photos/id/1020/800/600',
    //   alt: 'Dummy Image 5',
    // },
    // {
    //   url: 'https://picsum.photos/id/1021/800/600',
    //   alt: 'Dummy Image 6',
    // },
  ];
const Gallery = () => {
    return (
        <div className="w-full bg-black ">
      <div className="px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="mb-8 text-4xl font-bold text-center text-pink-600">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {images.map((image, index) => (
            <AnimatedImage key={index} image={image} />
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  export default Gallery;