"use client";
import glassClean from "@/assets/home/services/glass-clean.webp";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonHeading from "../CommonHeading";

const steps = [
  {
    id: 1,
    score: "5000+",
    title: "location",
  },
  {
    id: 2,
    score: "1000+",
    title: "location",
  },
  {
    id: 3,
    score: "98%",
    title: "location",
  },
  {
    id: 4,
    score: "35+",
    title: "location",
  },
];
export default function BestCustomerReviews() {
  return (
    <section className="container my-16 bg-[linear-gradient(149.48deg,#212222_-21.76%,#92DFF3_29.38%,#7AD7F0_100.94%)] p-20 rounded-xl">
      <CommonHeading
        center={true}
        title="Client Reviews"
        heading="The Best Customers Says About Our Action
        "
        subHeading="Installations and repairs completed successfully."
      />
      <div className="grid grid-cols-2 border rounded-xl p-5 gap-10 my-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-xl">
            <Image
              src={glassClean}
              alt="d"
              className="h-full object-cover rounded-xl"
            />
          </div>
          <div className=" rounded-xl">
            {" "}
            <Image
              src={glassClean}
              alt="d"
              className="h-full object-cover rounded-xl"
            />
          </div>
          <div className="rounded-xl">
            {" "}
            <Image
              src={glassClean}
              alt="d"
              className="h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoHeight={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {Array.from({ length: 6 }).map((_, id) => (
            <SwiperSlide key={id} >
              <div className="max-w-150">
                <div>
                  <div className="flex text-red">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Icon
                        key={index}
                        icon="material-symbols-light:star"
                        width="24"
                        height="24"
                      />
                    ))}
                  </div>
                  <span>Rated 5.0</span>
                </div>
                <p className="my-4 text-wrap">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a moreIt is a
                  reader will be distracted by the readable
                </p>
                <hr className="my-3" />
                <div>
                  <h4>Name</h4>
                  <p>Location</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="border grid grid-cols-4">
        {steps.map((item) => (
          <div
            key={item.id}
            className="border-r flex-col items-center justify-center text-center p-10"
          >
            <h1 className="heading-1">{item.score}</h1>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
