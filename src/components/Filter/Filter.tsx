import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux-toolkit";
import { changeFilterField } from "../../store/courceSlice";
import { FilteredCategory } from "../../types";
import "./Filter.scss";

const Filter = () => {
  const buttons: FilteredCategory[] = [
    "Все",
    "Рабочая среда",
    "Библиотеки",
    "Пройденные",
    "Не пройденные",
  ];
  const { filtered } = useAppSelector((state) => state.cource);
  const dispatch = useAppDispatch();
  return (
    <div className="filter">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => dispatch(changeFilterField(button))}
          className={`filter__button ${
            button === filtered && "filter__button_active"
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Filter;
