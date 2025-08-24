import { useState, useEffect } from 'react';

const useScrolledNearBottom = (offset = 150) => {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const distanceFromBottom = scrollHeight - (innerHeight + scrollY);
      setIsNearBottom(distanceFromBottom < offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return isNearBottom;
};

export default useScrolledNearBottom;