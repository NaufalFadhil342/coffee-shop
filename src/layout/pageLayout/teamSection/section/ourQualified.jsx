import React from 'react';

const OurQualified = ({ progress, label, postLeft }) => {
  return (
    <div className="w-full h-auto relative">
      <div className="w-full h-auto flex flex-col">
        {label && <p className="text-stone-800 font-semibold">{label}</p>}
        <div className="w-full h-1 bg-beige rounded-lg">
          <div className="w-full h-full bg-accent" style={{ width: `${progress}%` }} aria-valuenow={progress} />
          <p className="text-stone-800 font-semibold text-sm absolute z-[2] top-1" style={{ left: `${postLeft}%` }}>
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurQualified;
