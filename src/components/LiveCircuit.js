import React, { useRef, useState } from "react";
import "./LiveCircuit.css";

const LiveCircuit = () => {
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseMove = () => {
    if (isAnimating) return; // prevent multiple triggers

    const path = pathRef.current;
    const dot = dotRef.current;

    const pathLength = path.getTotalLength();
    let start = 0;

    setIsAnimating(true); // prevent re-trigger while animating

    const interval = setInterval(() => {
      const point = path.getPointAtLength(start);
      dot.setAttribute("cx", point.x);
      dot.setAttribute("cy", point.y);
      start += 3;

      if (start > pathLength) {
        clearInterval(interval);
        setIsAnimating(false); // allow re-trigger
      }
    }, 10);
  };

  return (
    <div className="circuit-container" onMouseEnter={handleMouseMove}>
      <svg width="100%" height="300" viewBox="0 0 600 300">
        <path
          ref={pathRef}
          d="M100,150 L500,150"
          stroke="url(#gradientStroke)"
          strokeWidth="5"
          fill="none"
        />
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8e2de2" />
            <stop offset="100%" stopColor="#4a00e0" />
          </linearGradient>
        </defs>
        <circle ref={dotRef} r="8" className="glow-dot" />
      </svg>
    </div>
  );
};

export default LiveCircuit;
