// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">Have questions or want to collaborate? Reach out to me using the form below:</p>
        <form className="max-w-md mx-auto" action="https://formspree.io/f/mpzvdeyy" method="POST">
          <input type="text" name="name" className="block w-full border-gray-300 rounded-md py-2 px-4 mb-2" placeholder="Your Name" />
          <input type="email" name="_replyto" className="block w-full border-gray-300 rounded-md py-2 px-4 mb-2" placeholder="Your Email" />
          <textarea name="message" className="block w-full border-gray-300 rounded-md py-2 px-4 mb-2" rows="4" placeholder="Your Message"></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
