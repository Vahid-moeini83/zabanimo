"use client";

import classes from "./Intro.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useMediaQuery } from "@mui/material";

function Intro() {
  const isInMobileSize = useMediaQuery("(max-width: 768px)");

  return (
    <section>
      <div className={classes.intro}>
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".preview-button",
            nextEl: ".next-button",
          }}
          pagination={{
            clickable: false,
          }}
          slidesPerView={1}
          className={classes.slider}
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide key={index} className={classes.slide}>
              <Image
                src={`/intro/${index + 1}.webp`}
                alt={`Slide ${index + 1}`}
                fill
              />
              {(index === 0 || index === 1) && (
                <Button color="green">
                  <Image
                    src="/icons/play.svg"
                    width={24}
                    height={24}
                    alt="play"
                  />
                  تماشا کنید
                </Button>
              )}
            </SwiperSlide>
          ))}
          <button className="navigation-button preview-button">
            <Image src="icons/arrow.svg" width={24} height={16} alt="arrow" />
          </button>
          <button className="navigation-button next-button">
            <Image src="icons/arrow.svg" width={24} height={16} alt="arrow" />
          </button>
        </Swiper>
      </div>
    </section>
  );
}

export default Intro;
