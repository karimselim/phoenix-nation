import Image from 'next/image';
import React from 'react';
import one from '../../public/assets/imgs/one.jpg';
import two from '../../public/assets/imgs/eighteen.jpg';
import three from '../../public/assets/imgs/ninteen.jpg';
import four from '../../public/assets/imgs/four.jpg';
import five from '../../public/assets/imgs/eight.jpg';
import six from '../../public/assets/imgs/sixsteen.jpg';
import seven from '../../public/assets/imgs/twenty.jpg';

const PhoenixImgs = () => {
  return (
    <div className="phoenixImgs">
      <Image
        src={two}
        alt="first image"
        className="h-screen w-full object-cover"
      />
      <Image
        src={seven}
        alt="second image"
        className="h-screen w-full object-cover"
      />
      <Image
        src={three}
        alt="third image"
        className="h-screen w-full object-cover"
      />
      <Image
        src={four}
        alt="fourth image"
        className="h-screen w-full object-cover"
      />
      <Image
        src={six}
        alt="fifth image"
        className="h-screen w-full object-cover"
      />
      <Image
        src={one}
        alt="sixth image"
        className="h-screen w-full object-cover"
      />
      <Image
        src={five}
        alt="seventh image"
        className="h-screen w-full object-cover"
      />
    </div>
  );
};

export default PhoenixImgs;
