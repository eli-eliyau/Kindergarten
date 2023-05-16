import React, { useRef, useEffect, useState } from "react";
import "./counter.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let counter = 0;
          const interval = setInterval(() => {
            if (counter < 24) {
              // set your desired maximum value
              counter++;
              setCount(counter);
            }
            // else {
            //   clearInterval(interval);
            // }
          }, 90); // set your desired animation speed
        }
      },
      { threshold: [0] }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [counterRef]);

  return (
    <>
      <h4 className="h4">הורים מרוצים</h4>
      <div className="counter-background" ref={counterRef}>
        <p className="counter-text">{count}</p>
      </div>
    </>
  );
};

export default Counter;
