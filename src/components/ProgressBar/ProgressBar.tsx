import React from "react";
import "./ProgressBar.scss";

type ProgressBarProps = {
  percent: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  const strokeWidth = 16;
  const radius = 85 - strokeWidth / 2;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 10) * circumference;

  return (
    <svg width="154" height="154">
      <circle
        className="progress-bar__background"
        stroke="rgba(0, 32, 51, 0.08)"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={normalizedRadius}
        cx="77"
        cy="77"
      />
      <circle
        className="progress-bar__foreground"
        stroke="#24C38E"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        fill="transparent"
        r={normalizedRadius}
        cx="77"
        cy="77"
      />
      <text
        className="progress-bar__label"
        x="50%"
        y="40%"
        textAnchor="middle"
        dy="0.3em"
      >
        {percent}/10
      </text>
      <text
        className="progress-bar__subtitle"
        x="50%"
        y="60%"
        textAnchor="middle"
        dy="0.3em"
      >
        заданий
      </text>
    </svg>
  );
};

export default ProgressBar;
