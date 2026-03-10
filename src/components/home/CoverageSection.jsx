"use client";
import { coverage } from "@/constant/home/coverage";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../app/swiper-custom.css";
import CommonHeading from "../CommonHeading";
export default function CoverageSection() {
  return (
    <section className="container mt-16">
      <div>
        <CommonHeading
          title="Coverage"
          heading="We serve all five boroughs"
          subHeading="From Manhattan to Long Island, we're your local cleaning partner."
        />
      </div>
      <div className="mt-8">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="custom-swiper"
        >
          {coverage.map((item, id) => (
            <SwiperSlide key={id} className="">
              <Image
                width={500}
                height={200}
                className="h-100 object-cover rounded-2xl"
                src={item}
                alt="slider"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
