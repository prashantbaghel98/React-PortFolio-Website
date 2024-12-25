// src/CircularProgressBar.js

import React, { useEffect, useRef } from 'react';
import './Progressbar.css'; // Import CSS for styling

const ProgressBar = ({ percent, logoSrc, heading }) => {
  const circleRef = useRef(null);
  const percentageRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const percentageElement = percentageRef.current;

    if (circle) {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (percent / 100) * circumference;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;

      // Animation
      const duration = 500; // Animation duration in ms
      let start = null;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const currentOffset = Math.min((progress / duration) * offset, offset);
        const currentPercent = Math.min((progress / duration) * percent, percent);

        circle.style.strokeDashoffset = circumference - currentOffset;
        percentageElement.textContent = `${Math.round(currentPercent)}%`;

        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          circle.style.strokeDashoffset = offset;
          percentageElement.textContent = `${percent}%`;
        }
      };

      requestAnimationFrame(animate);
    }
  }, [percent]);

  return (
    <div className="progress-container">
      <div className="progress-circle">
        <svg className="progress-ring" width="100%" height="100%" viewBox="0 0 150 150">
          <circle
            className="progress-ring__circle"
            stroke="#27E98B"
            strokeWidth="10"
            fill="transparent"
            r="65"
            cx="75"
            cy="75"
            ref={circleRef}
          />
        </svg>
        <div className="logo-container">
          <img src={logoSrc} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="progress-percentage" ref={percentageRef}>0%</div>
      <div className="progress-heading">{heading}</div>
    </div>
  );
};

export default ProgressBar;
