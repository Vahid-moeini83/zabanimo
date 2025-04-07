"use client";

import classes from "./Teachers.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { teachers } from "@/utils/localData";
import { Autoplay } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

function Teachers() {
  const isInLaptopSize = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1280px)"
  );
  const isInTabletSize = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const isInMobileSize = useMediaQuery("(max-width: 768px)");
  const isInMobileSmSize = useMediaQuery("(max-width: 480px)");

  return (
    <section className={classes.wrapper}>
      <h2>اساتید</h2>
      <div className={classes.slider}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={
            isInMobileSmSize
              ? 2
              : isInMobileSize
              ? 2
              : isInTabletSize
              ? 3
              : isInLaptopSize
              ? 4
              : 5
          }
          spaceBetween={28}
          loop
          centeredSlides
          speed={5000}
          className={`custom-slider`}
          autoplay={{ delay: 0, disableOnInteraction: false }}
        >
          {teachers.map((teacher) => (
            <SwiperSlide key={teacher.id} className={classes.slide}>
              <div className={classes.image}>
                <Image
                  src="/teacher.png"
                  width={210}
                  height={210}
                  layout="responsive"
                  alt="teacher"
                />
              </div>
              <div className={classes.bottom}>
                <h4>{teacher.name}</h4>
                <div className={classes.details}>
                  <span>{teacher.xpYear} سال تجربه آموزش</span>
                  <div className={classes.languages}>
                    {teacher.languages.length !== 1 ? (
                      teacher.languages.map((language) => (
                        <div className={classes.language} key={language}>
                          <Image
                            src="/icons/flag.svg"
                            width={isInMobileSmSize ? 20 : 24}
                            height={isInMobileSmSize ? 20 : 24}
                            alt="flag"
                          />
                          <span>{language}</span>
                        </div>
                      ))
                    ) : (
                      <div className={classes.language}>
                        <Image
                          src="/icons/flag.svg"
                          width={24}
                          height={24}
                          alt="flag"
                        />
                        <span>مدرس زبان {teacher.languages[0]}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Teachers;
