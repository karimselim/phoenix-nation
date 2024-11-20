import React from 'react';
import PhoenixImgs from './PhoenixImgs';
import PreLoader from './PreLoader';

const Loader = () => {
  return (
    <section className="hero h-screen p-12">
      <PreLoader />
      <PhoenixImgs />
    </section>
  );
};

export default Loader;
