import { recurrings } from "@/constant/services/recurring";
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
      <div className="mt-21 grid grid-cols-3 gap-8">
        {recurrings.slice(0, 3).map((item) => (
          <ServicesBlogCard  key={item.id} blog={item} />
        ))}
      </div>
    </section>
  );
}
