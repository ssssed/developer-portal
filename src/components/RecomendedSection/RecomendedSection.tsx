import RecomendedTheme from "../RecomendedTheme/RecomendedTheme";
import "./RecomendedSection.scss";
import iconDown from "../../assets/icon-down.svg";

const RecomendedSection = () => {
  return (
    <section className="recomended">
      <h2 className="recomended__title">Рекомендуемые темы</h2>
      <RecomendedTheme />
      <div className="show-more">
        <div className="show-more__line"></div>
        <button className="show-more__button">
          Показать еще <img src={iconDown} alt="icon down" />
        </button>
        <div className="show-more__line"></div>
      </div>
    </section>
  );
};

export default RecomendedSection;
