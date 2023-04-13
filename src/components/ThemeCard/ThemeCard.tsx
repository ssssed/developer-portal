import { FC, useMemo, useState } from "react";
import { IThemeCard } from "../../types";
import ProgressBar from "../ProgressBar/ProgressBar";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./ThemeCard.scss";

const ThemeCard: FC<IThemeCard> = ({
  title,
  categoryes,
  countTask,
  countCompletedTask,
  text,
}) => {
  const [buttonClass, setButtonClass] = useState<"reload" | "default">(
    "default"
  );
  const buttonText = useMemo(() => {
    if (countCompletedTask === countTask) {
      setButtonClass("reload");
      return "Пройти заново";
    }
    setButtonClass("default");
    if (countCompletedTask >= 1) return "Продолжить тему";
    return "Начать";
  }, [countTask, countCompletedTask]);

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
          <ThemeButton type={buttonClass}>{buttonText}</ThemeButton>
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
