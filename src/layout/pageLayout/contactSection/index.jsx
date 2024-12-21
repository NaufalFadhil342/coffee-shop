import React from 'react';
import ContactForm from './section/contactForm';
import Map from './section/map';

const ContactSection = () => {
  return (
    <div className="w-full h-auto">
      <ContactForm />
      <Map />
    </div>
  );
};

export default ContactSection;
