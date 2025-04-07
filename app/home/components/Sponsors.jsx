"use client";

import classes from "./Sponsors.module.css";
import Image from "next/image";
import { sponsors } from "@/utils/localData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

function Sponsors() {
  const [activeIndex, setActiveIndex] = useState();
  const [fade, setFade] = useState(false);
  const isInTabletSize = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const isInMobileSize = useMediaQuery("(max-width: 768px)");

  // Handle text animation and active index
  function handleHeadingChange(swiper) {
    setFade(true);
    setTimeout(() => {
      setActiveIndex(swiper.realIndex);
      setFade(false);
    }, 1500);
  }

  return (
    <section className={classes.wrapper}>
      <div className={classes.heading}>
        <h2>اسپانسرها</h2>
        <span className={fade ? classes.fadeOut : classes.fadeIn}>
          {sponsors[activeIndex]?.name}
        </span>
      </div>
      <Swiper
        className={`custom-slider ${classes.swiper}`}
        modules={[Autoplay]}
        slidesPerView={isInMobileSize ? 2 : isInTabletSize ? 4 : 5}
        spaceBetween={isInMobileSize ? 20 : 40}
        loop
        centeredSlides
        speed={4000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        onSlideChange={(swiper) => handleHeadingChange(swiper)}
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id} className={classes.slide}>
            <Image
              src={`/sponsors/${sponsor.id}.png`}
              width={140}
              height={80}
              alt={sponsor.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Sponsors;
