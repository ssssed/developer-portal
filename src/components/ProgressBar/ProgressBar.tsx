import React, { useEffect, useState } from "react";
import "./ProgressBar.scss";

interface ProgressBarProps {
  progress: number;
  size?: number;
  thickness?: number;
  totalTasks: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  size = 160,
  thickness = 16,
  totalTasks,
}) => {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const progressOffset = ((totalTasks - progress) / totalTasks) * 502;
    setOffset(progressOffset);
  }, [setOffset, progress, totalTasks]);

  const radius = (size - thickness) / 2;
  const circumference = radius * 2 * Math.PI;

  return (
    <svg
      className="progress-bar"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        className="progress-bar-bg"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${thickness}px`}
      />
      <circle
        className="progress-bar-fg"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${thickness}px`}
        strokeDasharray={`${circumference}px ${circumference}px`}
        strokeDashoffset={`${offset}px`}
        strokeLinecap="butt"
      />
      <text
        className="progress-bar-text font2XL"
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {progress}/{totalTasks}
        <tspan
          dy="1.2em"
          x="50%"
          dominantBaseline="middle"
          className="progress-bar-secondary-text fontS"
        >
          заданий
        </tspan>
      </text>
    </svg>
  );
};

export default ProgressBar;
