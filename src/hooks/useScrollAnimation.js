import { useEffect, useState, useRef } from 'react';

export default function useScrollAnimation() {
  const [scrollDir, setScrollDir] = useState('down');
  const lastY = useRef(0);

  useEffect(() => {
    const updateScrollDir = () => {
      const currentY = window.pageYOffset;
      setScrollDir(currentY > lastY.current ? 'down' : 'up');
      lastY.current = currentY > 0 ? currentY : 0;
    };

    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, []);

  return scrollDir;
}
