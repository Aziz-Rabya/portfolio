import { useEffect, useState, useRef } from 'react';

// Scroll direction hook
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

// Visibility observer hook
export function useIntersectionObserver(ref, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref, threshold]);

  return isVisible;
}
