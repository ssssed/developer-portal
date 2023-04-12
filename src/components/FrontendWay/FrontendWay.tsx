import React from "react";
import "./FrontendWay.scss";
import { cards } from "../../utils/theme-cards.static";
import ThemeCard from "../ThemeCard/ThemeCard";
const FrontendWay = () => {
  return (
    <section className="frontend-way">
      <div className="frontend-way__info-bar">
        <h2 className="frontend-way__title">путь front end developer</h2>
        <button className="frontend-way__button">Скрыть пройденые</button>
        <div className="navigation">
          <button className="navigation__button navigation__button-left"></button>
          <button className="navigation__button navigation__button-right"></button>
        </div>
      </div>
      <div className="theme-cards">
        {cards.map((card) => (
          <ThemeCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FrontendWay;
