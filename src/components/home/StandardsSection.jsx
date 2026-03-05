import { ourStandards } from "@/constant/home/ourStandarts";
import CommonHeading from "../CommonHeading";

export default function StandardsSection() {
  return (
    <section className="bg-[linear-gradient(114.32deg,#F5FCFF_4.47%,#DBF3FA_25.06%,#B7E9F7_51.47%,#92DFF3_98.36%,#7AD7F0_121.91%)]">
      <div className="container pt-16">
        <div>
          <CommonHeading
            title="Standards"
            heading="How we work"
            subHeading="Every detail matters in commercial cleaning."
          />
        </div>
        <div>
          <div className="relative py-10">
            <div className="border-t-2 relative border-black">
              <span className="size-3.5 bg-black inline-block absolute top-/2 left-0 -translate-y-1/2 rounded-full"></span>
              <span className="size-3.5 bg-black inline-block absolute top-/2 right-0 -translate-y-1/2 rounded-full"></span>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-evenly">
              <button className="bg-white h-13 px-8 rounded-full">
                Step One
              </button>
              <button className="bg-white h-13 px-8 rounded-full">
                Step Two
              </button>
              <button className="bg-white h-13 px-8 rounded-full">
                Step Three
              </button>
            </div>
          </div>
          <hr className="my-16"/>
          <div className="border p-7">
            <div className="grid grid-cols-3">
              {ourStandards.map((item) => (
                <div key={item.id}>
                    <item.Icon/>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
