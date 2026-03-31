import glassClean from "@/assets/home/services/glass-clean.webp";
import { services } from "@/constant/home/services";
import Image from "next/image";
import ButtonSolid from "../ButtonSolid";
import CommonHeading from "../CommonHeading";
import { GreenSignIcon, ServiceCardIcon } from "../Icon";
export default function ServicesSection() {
  return (
    <section className="bg-[linear-gradient(114.32deg,#F5FCFF_4.47%,#DBF3FA_25.06%,#B7E9F7_51.47%,#92DFF3_98.36%,#7AD7F0_121.91%)] ">
      <div className="container mt-16 py-16">
        <div className=" grid lg:grid-cols-2 gap-6 xl:gap-32">
          <div className="lg:sticky top-24 h-fit">
            <CommonHeading
              title="Services"
              heading="What We are Offering to Our Potential Client"
              subHeading="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a reader"
            />
            <div className="mt-6 bg-white p-2.5 rounded-xl">
              <div className="grid grid-cols-2 gap-6 mt-2">
                <div className="flex items-center gap-2">
                  <GreenSignIcon />
                  <h6 className="text-xl font-medium text-gray-800">
                    Eco Friendly
                  </h6>
                </div>
                <div className="flex items-center gap-2">
                  <GreenSignIcon />
                  <h6 className="text-xl font-medium text-gray-800">
                    Affordable
                  </h6>
                </div>
                <div className="flex items-center gap-2">
                  <GreenSignIcon />
                  <h6 className="text-xl font-medium text-gray-800">
                    Quick Service
                  </h6>
                </div>
                <div className="flex items-center gap-2">
                  <GreenSignIcon />
                  <h6 className="text-xl font-medium text-gray-800">
                    Certified Cleaners
                  </h6>
                </div>
              </div>
              <div className="mt-5">
                <Image
                  height={216}
                  width={553}
                  src={glassClean}
                  alt="glass-clean"
                  className="w-full max-h-54 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-5 ">
            {services.map((item) => (
              <div
                key={item.id}
                className="bg-white grid grid-cols-2 p-4 rounded-xl relative group"
              >
                <div>
                  <div className="bg-[#FCD9D9] w-fit p-2.5 rounded-xl group-hover:-scale-x-100">
                    <ServiceCardIcon />
                  </div>
                  <div>
                    <div className="min-h-48 mt-10">
                      <div className="py-2 rounded-r-xl absolute bg-white w-[85%] z-20">
                        <h5 className="heading-5 font-bold  my-3 before:w-0 hover:before:w-full before:h-px before:absolute before:bg-black before:-bottom-1 before:left-0 before:transition-all before:duration-300  relative w-fit cursor-pointer">Home Cleaning</h5>
                        <p className="mb-4 ">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a moreIt is a reader will be
                          distracted.
                        </p>
                      </div>
                    </div>

                    <ButtonSolid   color="white">Learn more</ButtonSolid>
                  </div>
                </div>
                <div className="h-93.75  rounded-xl overflow-hidden">
                  
                  <Image
                    height={216}
                    width={553}
                    src={glassClean}
                    alt="glass-clean"
                    className="w-full h-full rounded-lg object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
