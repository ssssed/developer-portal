import React, { FC } from "react";
import reload from "../../assets/reload.svg";
import "./ThemeButton.scss";

interface IThemeButton {
  type?: "reload" | "default";
  children: React.ReactNode;
  handler?: () => void;
}

const ThemeButton: FC<IThemeButton> = ({ children, type = "default" }) => {
  if (type === "reload") {
    return (
      <button className="theme-button-again">
        <img src={reload} alt="reload" width={16} height={16} />
        <span>{children}</span>
      </button>
    );
  }
  return <button className="theme-button">{children}</button>;
};

export default ThemeButton;
