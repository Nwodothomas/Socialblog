// Hero.js
import React, { useState, useEffect } from 'react';
import heroImage1 from '../images/hero-image1';
import heroImage2 from '../images/hero-image2';
import heroImage3 from '../images/hero-image3';
import heroImage4 from '../images/hero-image4';
import heroImage5 from '../images/hero-image5';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Animate images to display one after the other every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-40 bg-gray-900 text-white relative overflow-hidden" id="hero"> {/* Increased py-24 */}
      <div className="container mx-auto text-center pt-10"> {/* Added pt-20 */}
        <h2 className="text-5xl font-bold mb-4">Embrace Your Journey</h2>
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={heroImage1}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover ${
              currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
          />
          <img
            src={heroImage2}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover ${
              currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
          />
          <img
            src={heroImage3}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover ${
              currentImageIndex === 2 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
          />
          <img
            src={heroImage4}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover ${
              currentImageIndex === 3 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
          />
          <img
            src={heroImage5}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover ${
              currentImageIndex === 4 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
