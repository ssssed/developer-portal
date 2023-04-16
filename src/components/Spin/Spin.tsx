import React from "react";
import "./Spin.scss";

const Spin = () => {
  return (
    <div className="spin">
      <div className="spin__container rotate">
        <svg
          aria-hidden="true"
          focusable="false"
          role="presentation"
          className="icon icon-spinner"
          viewBox="0 0 20 20"
        >
          <path
            d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"
            fill="#919EAB"
          />
        </svg>
      </div>
    </div>
  );
};

export default Spin;
