import React, { useState } from 'react';
import workshopImage1 from '../images/workshop-image1.jpg';
import workshopImage2 from '../images/workshop-image2.jpg';
import workshopImage3 from '../images/workshop-image3.jpg';

const Workshop = () => {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Past Workshops</h2>
        <p className="text-lg mb-4">Join us for empowering workshops and seminars focused on mental wellbeing, social equity, and girl child education:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mental Wellbeing Workshop */}
          <div className="border border-gray-300 rounded-md p-4">
            <img src={workshopImage1} alt="Mental Wellbeing" className="mb-4 w-full h-auto rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Mental Wellbeing Workshop</h3>
            <p className="text-lg mb-2">Date: October 15, 2017</p>
            <p className="text-lg mb-4">Time: 10:00 AM - 12:00 PM</p>
            {/* Toggle details button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" onClick={toggleDetails1}>
              {showDetails1 ? 'Hide Details' : 'View Details'}
            </button>
            {/* Additional details */}
            {showDetails1 && (
              <div className="mt-4">
                <p className="text-lg mb-2">Description:</p>
                <p className="text-lg">Join us for an interactive workshop focused on strategies for maintaining mental wellbeing in challenging times. Learn coping mechanisms, mindfulness techniques, and connect with mental health professionals.</p>
                {/* Add more detailed content here */}
              </div>
            )}
          </div>
          {/* Social Equity Seminar */}
          <div className="border border-gray-300 rounded-md p-4">
            <img src={workshopImage2} alt="Social Equity" className="mb-4 w-full h-auto rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Social Equity Seminar</h3>
            <p className="text-lg mb-2">Date: November 5, 2017</p>
            <p className="text-lg mb-4">Time: 2:00 PM - 4:00 PM</p>
            {/* Toggle details button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" onClick={toggleDetails2}>
              {showDetails2 ? 'Hide Details' : 'View Details'}
            </button>
            {/* Additional details */}
            {showDetails2 && (
              <div className="mt-4">
                <p className="text-lg mb-2">Description:</p>
                <p className="text-lg">Join us for a thought-provoking seminar on promoting social equity and inclusivity in our communities. Explore issues of diversity, privilege, and allyship, and learn actionable steps to create positive change.</p>
                {/* Add more detailed content here */}
              </div>
            )}
          </div>
          {/* Girl Child Education Workshop */}
          <div className="border border-gray-300 rounded-md p-4">
            <img src={workshopImage3} alt="Girl Child Education" className="mb-4 w-full h-auto rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Girl Child Education Workshop</h3>
            <p className="text-lg mb-2">Date: December 10, 2019</p>
            <p className="text-lg mb-4">Time: 3:00 PM - 5:00 PM</p>
            {/* Toggle details button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" onClick={toggleDetails3}>
              {showDetails3 ? 'Hide Details' : 'View Details'}
            </button>
            {/* Additional details */}
            {showDetails3 && (
              <div className="mt-4">
                <p className="text-lg mb-2">Description:</p>
                <p className="text-lg">Join us for an interactive workshop on promoting girl child education. Learn about the challenges faced by girls in accessing education, the importance of education for girls' empowerment, and how you can contribute to ensuring every girl has access to quality education.</p>
                {/* Add more detailed content here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;