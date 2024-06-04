import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

import CarouselCard from "./CarouselCard";

const Carousel = () => {
  return (
    <div className="container">
      <h1 className="heading">Nasza ekipa</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="swiper"
      >
        <SwiperSlide>
          <CarouselCard
            name="Gordon Ramsey"
            position="Kucharz"
            img="Gordon-Ramsay.webp"
            text="Lorem ipsum askjdhnashjkbda"
          />
          <CarouselCard
            name="Gordon Ramsey"
            position="Kucharz"
            img="Gordon-Ramsay.webp"
            text="Lorem ipsum askjdhnashjkbda"
          />
          <CarouselCard
            name="Gordon Ramsey"
            position="Kucharz"
            img="Gordon-Ramsay.webp"
            text="Lorem ipsum askjdhnashjkbda"
          />
          <CarouselCard
            name="Gordon Ramsey"
            position="Kucharz"
            img="Gordon-Ramsay.webp"
            text="Lorem ipsum askjdhnashjkbda"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
