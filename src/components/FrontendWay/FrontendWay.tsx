import React, { useState } from "react";
import "./FrontendWay.scss";
import ThemeCard from "../ThemeCard/ThemeCard";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import SliderNavigation from "../SliderNavigation/SliderNavigation";
import { useAppDispatch, useAppSelector } from "../../hook/redux-toolkit";
import { toggleHiddenStatus } from "../../store/courceSlice";

SwiperCore.use([Navigation]);

const FrontendWay = () => {
  const dispatch = useAppDispatch();

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const { courcesWay, isHidden } = useAppSelector((state) => state.cource);

  const handleHiddenCards = () => dispatch(toggleHiddenStatus(!isHidden));
  return (
    <section className="frontend-way">
      <div className="frontend-way__info-bar">
        <h2 className="frontend-way__title">путь front end developer</h2>
        <button className="frontend-way__button" onClick={handleHiddenCards}>
          {isHidden ? "Показать" : "Скрыть"} пройденые
        </button>
        <SliderNavigation swiper={swiper} />
      </div>
      <Swiper
        breakpoints={{
          1324: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: "auto",
            spaceBetween: 18,
          },
          0: {
            spaceBetween: 8,
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Navigation]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={24}
        wrapperClass="theme-cards"
      >
        {courcesWay.map((card, index) => (
          <SwiperSlide key={card.title + index}>
            <ThemeCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FrontendWay;
