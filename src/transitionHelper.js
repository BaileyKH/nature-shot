import { useEffect, useRef } from 'react';

const transitionHelper = (callback, options) => {
  const parentRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => callback(entry, textRef));
    };

    const observer = new IntersectionObserver(observerCallback, options);
    const currentParent = parentRef.current;
    if (currentParent) {
      observer.observe(currentParent);
    }

    return () => {
      if (currentParent) {
        observer.unobserve(currentParent);
      }
    };
  }, [callback, options]);

  return { parentRef, textRef };
};

export default transitionHelper;