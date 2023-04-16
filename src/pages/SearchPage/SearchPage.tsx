import React, { useCallback, useState } from "react";
import "./SearchPage.scss";
import "react-dadata/dist/react-dadata.css";
import api from "../../api";
import { FetchCompanyInfo } from "../../types";
import { DaDataParty, DaDataSuggestion, PartySuggestions } from "react-dadata";
import { useDateFormat } from "../../hook/useDateFormat";
import Filleal from "../../components/Filleal/Filleal";

const SearchPage = () => {
  const [filleals, setFilleals] = useState<DaDataSuggestion<DaDataParty>[]>([]);
  const [selected, setSelected] = useState<
    DaDataSuggestion<DaDataParty> | undefined
  >();

  const handleSelectedChange = (
    data: DaDataSuggestion<DaDataParty> | undefined
  ) => {
    if (data) {
      setSelected(data);
      setFilleals([]);
    }
  };

  const getMoreInfo = useCallback(async () => {
    const data = await api.post<FetchCompanyInfo>("4_1/rs/findById/party", {
      query: selected?.data.inn,
      count: 100,
      branch_type: "BRANCH",
    });
    if (data.suggestions.length) setFilleals(data.suggestions);
  }, [selected]);

  return (
    <main className="search-page">
      <PartySuggestions
        token={import.meta.env.VITE_API_TOKEN}
        value={selected}
        onChange={handleSelectedChange}
      />
      {selected && (
        <div className="search-page__content">
          <h3 className="search-page__title">Информация</h3>
          <p className="search-page__text">ИНН: {selected?.data.inn}</p>
          <p className="search-page__text">
            Наименование: {selected?.data.name.full_with_opf}
          </p>
          <p className="search-page__text">
            Адрес: {selected?.data.address.value}
          </p>
          <p className="search-page__text">
            Статус: {selected?.data.state.status}
          </p>
          <p className="search-page__text">
            Дата основания:{" "}
            {useDateFormat(selected?.data.state.registration_date)}
          </p>
          <p className="search-page__text">
            Дата ликвидации:{" "}
            {useDateFormat(selected?.data.state.liquidation_date)}
          </p>
          {selected.data.management && (
            <p className="search-page__text">
              Основатели компании:{" "}
              {selected?.data.management?.post +
                " " +
                selected?.data.management?.name}
            </p>
          )}
          <button onClick={getMoreInfo}>Показать филиаллы</button>
          {filleals && (
            <div className="search-page__filleals">
              {filleals.map((filleal) => (
                <Filleal
                  onClick={() => {
                    setSelected(filleal);
                    setFilleals([]);
                  }}
                  title={filleal.value}
                  key={filleal.value + " " + filleal.data.inn}
                  inn={filleal.data.inn}
                  city={filleal.data.address.value}
                  status={filleal.data.state.status}
                  registratonDate={filleal.data.state.registration_date}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default SearchPage;
