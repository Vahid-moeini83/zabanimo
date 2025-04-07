"use client";

import classes from "./FooterSlider.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

function FooterSlider() {
  const isInTabletSize = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const isInMobileSize = useMediaQuery("(max-width: 768px)");
  const isInMobileSmSize = useMediaQuery("(max-width: 480px)");

  return (
    <div className={classes.logos}>
      <Swiper
        className={`custom-slider ${classes.swiper}`}
        modules={[Autoplay]}
        slidesPerView={
          isInMobileSmSize ? 2 : isInMobileSize ? 3 : isInTabletSize ? 4 : 5
        }
        loop
        centeredSlides
        speed={8000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
      >
        <SwiperSlide className={classes.slide}>
          <Image src="/logo.svg" width={120} height={40} alt="logo" />
          <span></span>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <Image
            src="/footer/logo-1.svg"
            width={120}
            height={40}
            alt="logo-1"
          />
          <span></span>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <Image
            src="/footer/logo-2.svg"
            width={120}
            height={40}
            alt="logo-2"
          />
          <span></span>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <Image src="/logo.svg" width={120} height={40} alt="logo" />
          <span></span>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <Image
            src="/footer/logo-3.svg"
            width={120}
            height={40}
            alt="logo-3"
          />
          <span></span>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <Image
            src="/footer/logo-4.svg"
            width={120}
            height={40}
            alt="logo-4"
          />
          <span></span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FooterSlider;
