import React from 'react';

const missionImage = 'https://images.pexels.com/photos/1556665/pexels-photo-1556665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const Mission = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row mt-8">
      <div className="w-full h-auto flex-0 md:flex-50">
        <div className="w-full h-screen  md:h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${missionImage})` }} />
      </div>
      <div className="w-full h-full flex-0 md:flex-50 flex flex-col gap-8 p-14 my-12">
        <div className="w-full flex flex-col gap-4">
          <div className="text-accent font-medium">Our Mission</div>
          <h1 className="text-4xl text-stone-800 font-semibold uppercase">We produce a handmade coffee beans</h1>
          <div className="w-10 h-[2px] bg-accent" />
        </div>
        <div className="w-full text-stone-600 text-[15px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti et perferendis accusantium. Beatae dolorum eaque, voluptatibus delectus rerum at laboriosam. Accusamus tempore animi molestiae sed. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quibusdam nisi ex rerum laborum ratione beatae unde esse ducimus! Et, impedit.
        </div>
      </div>
    </div>
  );
};

export default Mission;
