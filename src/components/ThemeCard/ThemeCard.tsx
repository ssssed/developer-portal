import { FC } from "react";
import { IThemeCard } from "../../types";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./ThemeCard.scss";

const ThemeCard: FC<IThemeCard> = ({
  title,
  categoryes,
  countTask,
  countCompletedTask,
  text,
}) => {
  return (
    <div className="theme-card">
      <div className="theme-card__content">
        <h4 className="theme-card__title">{title}</h4>
        <ul className="theme-card__categoryes">
          {categoryes?.map((category) => (
            <li key={category} className="theme-card__category">
              {category}
            </li>
          ))}
        </ul>
        <p className="theme-card__text">{text}</p>
        <div className="theme-card__status-bar">
          <button className="theme-card__button">Начать</button>
          <ProgressBar
            type="small"
            totalTasks={countTask}
            progress={countCompletedTask}
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
