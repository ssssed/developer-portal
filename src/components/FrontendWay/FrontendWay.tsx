import React, { useState } from "react";
import "./FrontendWay.scss";
import { cards } from "../../utils/theme-cards.static";
import ThemeCard from "../ThemeCard/ThemeCard";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import SliderNavigation from "../SliderNavigation/SliderNavigation";

SwiperCore.use([Navigation]);

const FrontendWay = () => {
  const [swiper, setSwiper] = useState<SwiperCore>(null);

  return (
    <section className="frontend-way">
      <div className="frontend-way__info-bar">
        <h2 className="frontend-way__title">путь front end developer</h2>
        <button className="frontend-way__button">Скрыть пройденые</button>
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
        {cards.map((card) => (
          <SwiperSlide key={card.title}>
            <ThemeCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FrontendWay;
