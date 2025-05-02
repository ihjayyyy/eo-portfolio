import React, { useEffect, useRef } from 'react';

function RevealOnScroll({ children }) {
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            ref.current.classList.add('visible');
          } else {
            ref.current.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px 150px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

export default RevealOnScroll;