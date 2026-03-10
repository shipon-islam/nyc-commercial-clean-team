"use client"
import { supports } from "@/constant/services/support";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonHeading from "../CommonHeading";
import ServicesBlogCard from "../ServicesBlogCard";

export default function SupportSection() {
  return (
    <section className="container mt-20">
      <CommonHeading
        center={true}
        title="Support"
        heading="Beyond cleaning alone"
        subHeading="Complete facility management solutions that keep operations running smooth"
      />
      <div className="mt-21 ">
         <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            
           
          }}
        >
        {supports.map((item) => (
          <SwiperSlide key={item.id}>
          <ServicesBlogCard view={"row"} key={item.id} blog={item} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  );
}
