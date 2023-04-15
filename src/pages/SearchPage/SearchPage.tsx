import React from "react";
import "./SearchPage.scss";
import DadataSuggestions from "react-dadata-suggestions";
import "react-dadata-suggestions/dist/styles.css";

const SearchPage = () => {
  return (
    <div className="search-page">
      <DadataSuggestions
        placeholder="Поиск"
        service="party"
        token={import.meta.env.VITE_API_TOKEN}
        onSelect={(sug) => setSelected(sug)}
      />
    </div>
  );
};

export default SearchPage;
