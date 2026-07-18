import quote from "@/assets/quotes/quote.jpg";
import ButtonSolid from "@/components/ButtonSolid";
import Counter from "@/components/Counter";
import QuoteForm from "@/components/quote/QuoteForm";
import { Icon } from "@iconify/react";
import Image from "next/image";
const steps = [
  {
    id: 1,
    score: 200,
    sign: "+",
    title: "PROJECTS COMPLETED",
  },
  {
    id: 2,
    score: 24,
    sign: "-48 Hrs",
    title: "FAST QUOTING",
  },
  {
    id: 3,
    score: 100,
    sign: "%",
    title: "LICENSED & INSURED",
  },
  {
    id: 4,
    score: 98,
    sign: "%",
    title: "Happy\nCustomers",
  },
];
const services = [
  {
    id: 1,
    title: "Break Room Deep Clean",
    image: "/images/quotes/break-room.jpg",
  },
  {
    id: 2,
    title: "Lobby Entrance Floor",
    image: "/images/quotes/lobby-entrance.jpg",
  },
  {
    id: 3,
    title: "Restroom Deep Clean",
    image: "/images/quotes/restroom-deep.jpg",
  },
];
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
];
const handles = [
  {
    id: 1,
    icon: "hugeicons:office",
    name: "Office Cleaning",
  },
  {
    id: 2,
    icon: "ci:layer",
    name: "Floor Care & Waxing",
  },
  {
    id: 3,
    icon: "material-symbols:construction",
    name: "Post-Construction",
  },
  {
    id: 4,
    icon: "icon-park-outline:medical-box",
    name: "Medical Facility",
  },
  {
    id: 5,
    icon: "material-symbols:storefront-outline",
    name: "Retail & Storefront",
  },
];
export default function Quotes() {
  return (
    <main>
      <section className="relative mt-6">
        <Image
          src={quote}
          alt="Quotes"
          width={2000}
          height={759}
          className="w-full h-auto object-cover"
        />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-[#1D2F64E5] to-[#1D2F6466] text-white px-4 py-2 rounded-md w-full h-full" />
        <div className="absolute top-0 left-0 w-full h-full text-white">
          <div className="container grid grid-cols-2 gap-x-25 justify-center items-center h-full">
            <div>
              <p className="text-xs border border-white font-medium w-fit px-5 py-1.5 rounded-full">
                Janitorial Services
              </p>
              <h1 className="text-[22px] lg:text-5xl leading-[120%] font-medium my-8">
                Reliable Commercial Janitorial Service for NYC Facilities
              </h1>
              <p className="text-sm sm:text-base md:text-lg max-w-3xl py-4 pb-6">
                NYC's most trusted commercial cleaning crews — tailored to your
                schedule.
              </p>
              <div className="mt-6">
                <div className="flex gap-x-15 gap-y-4">
                  <div className="flex items-center gap-2">
                    <Icon icon="ix:success" width={17} height={17} />{" "}
                    <span>Fully Insured & Bonded</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="ix:success" width={17} height={17} />{" "}
                    <span>Custom Schedules</span>
                  </div>
                </div>
                <div className="flex gap-x-15 gap-y-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Icon icon="ix:success" width={17} height={17} />{" "}
                    <span>Eco-Friendly Products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="ix:success" width={17} height={17} />{" "}
                    <span>Dedicated Account Manager</span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <ButtonSolid>Call Now (631) 381-7252</ButtonSolid>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 p-10">
          {steps.map((item, id) => (
            <div
              key={item.id}
              className={` flex-col items-center justify-center text-center border-white/20  ${steps.length - 1 === id ? "" : " border-r border-b md:border-b-0"}`}
            >
              <Counter
                value={item.score}
                sign={item.sign}
                className="text-3xl sm:text-4xl  whitespace-pre-wrap"
              />
              <p className="text-xs  font-medium  mt-2 text-white/40">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="container mt-20">
        <div className="text-center">
          <h2 className="text-slate text-4xl font-bold">
            See the Difference We Make
          </h2>
          <p className="mt-4">
            Real results from real NYC facilities we service.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[20px] shadow-lg overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="flex justify-between items-start absolute top-5 left-0 w-full h-full px-4">
                <span className="text-xs font-bold bg-black rounded-full text-white px-4 py-1.5 uppercase">
                  before
                </span>
                <span className="text-xs font-bold bg-red rounded-full text-white px-4 py-1.5 uppercase">
                  after
                </span>
              </div>
              <p className="text-sm  font-bold  py-6 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="container mt-20">
        <div className="text-center">
          <h2 className="text-slate text-4xl font-bold">
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

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative rounded-[20px] shadow-lg p-6"
            >
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
              <p className="italic my-4">
                {review.review}
              </p>
              <div className="flex items-center gap-3 pt-4 pb-10">
                <div className="w-fit p-2 font-bold text-sm bg-slate rounded-full text-white">
                  {review.image}
                </div>
                <div >
                  <h5 className="font-bold text-sm">{review.name}</h5>
                  <p className="text-xs text-slate font-medium font-jetbrains">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container my-20">
        <h2 className="text-slate text-4xl font-bold text-center">
            We Also Handle
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
            {handles.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl bg-[#EDEEF0] p-4 text-slate flex flex-col items-center justify-center gap-2 text-center"
              >
                <Icon icon={item.icon} width={24} height={24}  />
                <h5 className="text-xs font-bold text-slate/80">{item.name}</h5>
              </div>
            ))}
          </div>
      </section>
    </main>
  );
}
