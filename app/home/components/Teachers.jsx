"use client";

import classes from "./Teachers.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { teachers } from "@/utils/localData";
import { Autoplay } from "swiper/modules";

function Teachers() {
  return (
    <section className={classes.wrapper}>
      <h2>اساتید</h2>
      <div className={classes.slider}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.5}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
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
                    {teacher.languages.map((language) => (
                      <div className={classes.language} key={language}>
                        <Image
                          src="/icons/flag.svg"
                          width={24}
                          height={24}
                          alt="flag"
                        />
                        <span>
                          {teacher.languages.length === 1
                            ? `مدرس زبان ${language}`
                            : language}
                        </span>
                      </div>
                    ))}
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
