import React from 'react';
import '../styles/components/FloatingBackground.css';

const FloatingBackground = () => {
  return (
    <div className="bg-animation">
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
    </div>
  );
};

export default FloatingBackground;
