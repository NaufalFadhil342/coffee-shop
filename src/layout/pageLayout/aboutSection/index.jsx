import React from 'react';
import AboutMe from '../../pageLayout/aboutSection/section/aboutMe';
import TheStory from '../../pageLayout/aboutSection/section/theStory';
import Mission from '../../pageLayout/aboutSection/section/mission';

const AboutSection = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-20">
      <AboutMe />
      <TheStory />
      <Mission />
    </div>
  );
};

export default AboutSection;
