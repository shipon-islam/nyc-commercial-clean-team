import janitorial from "@/assets/services/support/janitorial.webp";
import Image from "next/image";
import CommonHeading from "../CommonHeading";
export default function WhyChooseUs() {
  return (
    <section className="container mt-16">
      <div>
        <CommonHeading
          title="Why Choose Us ?"
          heading="Redefining Clean for Homes and Businesses"
          subHeading="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a reader will be distracted by the readable"
        />
      </div>

      <div className=" mt-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
          <div>
            <Image
              src={janitorial}
              alt="floor"
              width={104}
              height={104}
              className="rounded-full size-25 object-cover"
            />
            <h1 className="text-red heading-1">5000+</h1>
            <p className="my-4">
              Installations and repairs completed successfully.{" "}
            </p>
          </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="h-66.5 bg-[#D9D9D9] rounded-xl "></div>
          ))}
        </div>
      </div>
    </section>
  );
}
