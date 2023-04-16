import { FC } from "react";
import { ISliderNavigation } from "../../types";
import "./SliderNavigation.scss";

const SliderNavigation: FC<ISliderNavigation> = ({ swiper }) => {
  const handleSwiperSlideNext = () => swiper?.slideNext();
  const handleSwiperSlidePrev = () => swiper?.slidePrev();
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
