import React from 'react';

const cursor = () => {
  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-black p-[10px] mix-blend-difference"
      id="custom-cursor"
    >
      <span className="cursor-text">view</span>
    </div>
  );
};

export default cursor;
