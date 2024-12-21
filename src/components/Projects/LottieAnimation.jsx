import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../data/machine.json'; // Path to your Lottie JSON file

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation will play automatically
    animationData: animationData, // Lottie JSON animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="lottie-container">
      <Lottie options={defaultOptions} height={170} width={150} />
    </div>
  );
};

export default LottieAnimation;
