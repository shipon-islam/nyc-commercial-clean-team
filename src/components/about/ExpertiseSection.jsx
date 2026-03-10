import janitorial from "@/assets/services/support/janitorial.webp";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ArrowButton from "../ArrowButton";
import CommonHeading from "../CommonHeading";
export default function ExpertiseSection() {
  return (
    <section className="container mt-16">
      <div className="grid grid-cols-2">
        <div>
          <CommonHeading
            title="Expertise"
            heading="Redefining Clean for Homes and Businesses"
            subHeading="We handle every facility type across NYC with precision and accountability."
          />
          <div className="mt-6">
            <Image
              src={janitorial}
              alt="floor"
              width={500}
              height={334}
              className="rounded-xl"
            />
            <div className="flex items-center gap-4 mt-6">
              <ArrowButton>Discover More</ArrowButton>
              <div className="flex items-center gap-4">
                <h5 className="heading-1">4.8</h5>
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
                  <span>base on user reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[263px] shadow-sm rounded-xl">
            <div className="h-[191px] rounded-xl flex flex-col items-center justify-center bg-[linear-gradient(114.32deg,#F5FCFF_4.47%,#DBF3FA_25.06%,#B7E9F7_51.47%,#92DFF3_98.36%,#7AD7F0_121.91%)]">
              <h1 className="heading-1 font-bold">98%</h1>
              <hr />
              <p className="font-medium">Client retention rate</p>
            </div>
            <div className="h-[191px] flex flex-col items-center justify-center">
              <p className="font-medium">Years of Work Experience</p>
              <h1 className="heading-1 font-bold text-red">15</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
