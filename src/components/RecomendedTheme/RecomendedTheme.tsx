import ProgressBar from "../ProgressBar/ProgressBar";
import "./RecomendedTheme.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RecomendedTheme = () => {
  return (
    <div className="recomended-theme">
      <ProgressBar progress={8} totalTasks={10} />
      <div className="recomended-theme__content">
        <h3 className="recomended-theme__title">Начало работы</h3>
        <ul className="recomended-theme__list">
          <li className="recomended-theme__list-item">Для новичка</li>
          <li className="recomended-theme__list-item">Основные работы</li>
        </ul>
        <p className="recomended-theme__text">
          Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете
        </p>
        <button className="recomended-theme__button">Продолжить тему</button>
      </div>
    </div>
  );
};

export default RecomendedTheme;
