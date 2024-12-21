import React from 'react';
import { teamData } from '../../../data/dummyCoffee';
import OurTeam from './section/ourTeam';
import OurQualified from './section/ourQualified';

const TeamSection = () => {
  return (
    <div className="w-full h-auto px-[8%] my-28 flex flex-col gap-12">
      <div className="w-full h-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamData.map((team) => (
          <OurTeam key={team.id} team={team} />
        ))}
      </div>
      <div className="w-full h-auto flex flex-col items-center gap-8 overflow-hidden">
        <div className="w-full h-auto flex flex-col gap-6">
          <div className="w-full h-full flex flex-col gap-2">
            <div className="text-accent font-medium">Qualified</div>
            <h1 className="text-5xl font-bold text-stone-800 uppercase">Our Skills</h1>
            <div className="w-10 h-[2px] bg-accent" />
          </div>
          <div className="w-full h-auto">
            <p className="text-stone-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima illum beatae modi iste provident quis nihil blanditiis eius, rem molestias dignissimos dolorem cupiditate autem odio at veniam a unde.
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-8">
          <OurQualified progress={90} label="Services" postLeft={87} />
          <OurQualified progress={78} label="Coffee & Pastry" postLeft={75} />
          <OurQualified progress={85} label="Cozy Place" postLeft={82} />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
