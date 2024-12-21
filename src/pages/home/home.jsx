import React from 'react';
import Hero from '../../components/hero';
import MainHome from '../../layout/homeLayout/mainHome'

const Home = () => {
  return (
    <div>
      <Hero heading="Start Your Day with Coffee" text="Bring home the coffee" showButtons={true} showParagraph={true} homepage={true} />
      <MainHome />
    </div>
  );
};

export default Home;
