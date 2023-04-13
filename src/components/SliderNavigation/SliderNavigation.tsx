import { FC } from "react";
import Swiper from "swiper";
import { useSwiper } from "swiper/react";
import "./SliderNavigation.scss";

interface ISliderNavigation {
  swiper: Swiper;
}

const SliderNavigation: FC<ISliderNavigation> = ({ swiper }) => {
  const handleSwiperSlideNext = () => swiper.slideNext();
  const handleSwiperSlidePrev = () => swiper.slidePrev();
  return (
    <div className="navigation">
      <button
        onClick={handleSwiperSlidePrev}
        className="navigation__button navigation__button-left"
      ></button>
      <button
        onClick={handleSwiperSlideNext}
        className="navigation__button navigation__button-right"
      ></button>
    </div>
  );
};

export default SliderNavigation;
