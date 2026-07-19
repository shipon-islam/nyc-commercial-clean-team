"use client"
import { Icon } from "@iconify/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const reviews = [
  {
    id: 1,
    image: "MT",
    name: "Maria T.",
    position: "Operations Manager",
    rating: 5,
    review: `"The most reliable crew we've ever had.
They never miss a night and the floors
look brand new every morning."`,
  },
  {
    id: 2,
    image: "DR",
    name: "David R.",
    position: "Facility Director",
    rating: 5,
    review: `"Professional, insured, and they actually
follow the custom checklist we provided.
Highly recommend for medical offices."`,
  },
  {
    id: 3,
    image: "SK",
    name: "Sarah K.",
    position: "HR Administrator",
    rating: 5,
    review: `"Their eco-friendly products make a huge
difference for our staff. Great
communication with our account
manager."`,
  },
  {
    id: 4,
    image: "MT",
    name: "Maria T.",
    position: "Operations Manager",
    rating: 5,
    review: `"The most reliable crew we've ever had.
They never miss a night and the floors
look brand new every morning."`,
  },
  {
    id: 5,
    image: "DR",
    name: "David R.",
    position: "Facility Director",
    rating: 5,
    review: `"Professional, insured, and they actually
follow the custom checklist we provided.
Highly recommend for medical offices."`,
  },
  {
    id: 6,
    image: "SK",
    name: "Sarah K.",
    position: "HR Administrator",
    rating: 5,
    review: `"Their eco-friendly products make a huge
difference for our staff. Great
communication with our account
manager."`,
  },
];
export default function ManagerReview() {
  return (
    <section className="container mt-10 md:mt-14 lg:mt-20">
      <div className="text-center">
        <h2 className="text-slate text-2xl md:text-3xl lg:text-4xl font-bold">
          What NYC Facility Managers Say
        </h2>
        <div className="mt-4">
          {Array(5)
            .fill()
            .map((_, index) => (
              <Icon
                key={index}
                icon="ic:round-star"
                width={20}
                height={20}
                className="inline-block red"
              />
            ))}
        </div>
        <p className="mt-0.5">4.9 out of 5 — based on 200+ reviews</p>
      </div>

      <div className="mt-12 ">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1280: {
              spaceBetween: 12,
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoHeight={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay]}
        >
          {reviews.map((review) => (
            <SwiperSlide style={{ height: "100%" }} key={review.id} className="p-5 h-100">
              <div className="relative rounded-[20px] shadow-lg p-6 h-full">
                {Array(review.rating)
                  .fill()
                  .map((_, index) => (
                    <Icon
                      key={index}
                      icon="ic:round-star"
                      width={14}
                      height={14}
                      className="inline-block text-red"
                    />
                  ))}
                <p className="italic my-4">{review.review}</p>
                <div className="flex items-center gap-3 pt-4 pb-10">
                  <div className="w-fit p-2 font-bold text-sm bg-slate rounded-full text-white">
                    {review.image}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{review.name}</h5>
                    <p className="text-xs text-slate font-medium font-jetbrains">
                      {review.position}
                    </p>
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
