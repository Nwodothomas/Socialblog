import React from 'react';
import storyImage from '../images/story-image.jpg';

const Story = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Turning Point</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center mb-8">
            <img src={storyImage} alt="Turning Point" className="w-full h-full md:max-w-md md:max-h-md rounded-md shadow-md" />
          </div>

          {/* Text Section */}
          <div className="space-y-4">
            {/* Empowering Others */}
            <div className="text-lg">
              <h3 className="text-2xl font-bold mb-2">Empowering Others</h3>
              <p>
                After my pageant success, I dedicated myself to empowering others, especially young women, to embrace their uniqueness and make a positive impact in their communities. Through mentorship programs and workshops, I strive to instill confidence and resilience in individuals facing challenges.
              </p>
            </div>

            {/* Creating Change */}
            <div className="text-lg">
              <h3 className="text-2xl font-bold mb-2">Creating Change</h3>
              <p>
                My journey is not just about personal achievements but about creating meaningful change in society. By advocating for mental wellbeing, social equity, and environmental sustainability, I aim to contribute to a more inclusive, compassionate, and environmentally-conscious world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
