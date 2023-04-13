import React from "react";
import "./ProgressBar.scss";
import done from "../../assets/done.svg";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

interface ProgressBarProps {
  progress: number;
  size?: number;
  totalTasks: number;
  type?: "small" | "normal";
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  size = 160,
  totalTasks,
  type = "normal",
}) => {
  if (totalTasks === progress)
    return <img src={done} width={size} height={size} alt="done" />;

  if (type === "small") {
    return (
      <div className="progress-bar">
        <span className="progress-bar__text_small">
          {progress !== 0 && progress + "/"}
          {totalTasks}
        </span>
        <span className="progress-bar__secondary-text">заданий</span>
        <div style={{ width: size, height: size }}>
          <CircularProgressbar value={progress * 10} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: size, height: size }}>
      <CircularProgressbarWithChildren value={progress * 10}>
        {type === "normal" && (
          <React.Fragment>
            <span className="progress-bar__text">
              {progress}/{totalTasks}
            </span>
            <span className="progress-bar__secondary-text">заданий</span>
          </React.Fragment>
        )}
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default ProgressBar;
