import React, { useEffect, useState } from 'react';
import '../styles/components/ReadingProgress.css';

const ReadingProgress = () => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.pageYOffset;
      const scrollProgress = (scrolled / documentHeight) * 100;
      setWidth(scrollProgress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="reading-progress" id="progressBar" style={{ width: `${width}%` }}></div>;
};

export default ReadingProgress;
