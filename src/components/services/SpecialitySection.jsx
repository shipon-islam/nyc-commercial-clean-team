"use client";

import { speciality } from "@/constant/services/specialty";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonHeading from "../CommonHeading";
import ServicesBlogCard from "../ServicesBlogCard";

export default function SpecialitySection() {
  return (
    <section className="container mt-20">
      <CommonHeading
        center={true}
        title="Specialty"
        heading="Specialized work when it matters"
        subHeading="Demanding projects handled with expertise and precision"
      />
      <div className="mt-21">
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
            1280: {
              spaceBetween: 50,
              slidesPerView: 3,
            },
          }}
        >
          {speciality.map((item, id) => (
            <SwiperSlide key={id}>
              <ServicesBlogCard key={item.id} blog={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </section>
  );
}
