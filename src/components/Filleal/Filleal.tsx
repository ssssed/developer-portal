import React, { FC } from "react";
import { useDateFormat } from "../../hook/useDateFormat";
import { IFilleal } from "../../types";
import "./Filleal.scss";

const Filleal: FC<IFilleal> = ({
  title,
  inn,
  city,
  status,
  registratonDate,
  onClick,
}) => {
  return (
    <div className="filleal" onClick={onClick}>
      <p className="filleal__text">Название: {title}</p>
      <p className="filleal__text">ИНН: {inn}</p>
      <p className="filleal__text">Город: {city}</p>
      <p className="filleal__text">Статус: {status}</p>
      <p className="filleal__text">
        Дата регистрации: {useDateFormat(registratonDate)}
      </p>
    </div>
  );
};

export default Filleal;
