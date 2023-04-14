import React from "react";
import { useAppSelector } from "../../hook/redux-toolkit";
import Filter from "../Filter/Filter";
import ThemeCard from "../ThemeCard/ThemeCard";
import "./Catalog.scss";

const Catalog = () => {
  const { catalogCources } = useAppSelector((state) => state.cource);
  return (
    <section className="catalog-theme">
      <h3 className="catalog-theme__title">Каталог тем</h3>
      <Filter />
      <div className="catalog-theme__container">
        {catalogCources.map((cource, index) => (
          <ThemeCard key={cource.title + index} {...cource} />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
