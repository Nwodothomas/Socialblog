import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Story from './components/Story';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 p-4 z-10" style={{ marginTop: '80px' }}>>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">My Blog</div>
          <ul className="flex space-x-4">
            <li><a href="#hero" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="#story" className="text-white hover:text-gray-300">Story</a></li>
            <li><a href="#workshop" className="text-white hover:text-gray-300">Workshops</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="overflow-hidden">
        <Hero />
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        {/* About Section */}
        <section id="about" className="mb-8">
          <About />
        </section>

        {/* Story Section */}
        <section id="story" className="mb-8">
          <Story />
        </section>

        {/* Workshop Section */}
        <section id="workshop" className="mb-8">
          <Workshop />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
