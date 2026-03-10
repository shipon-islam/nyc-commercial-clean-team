import { recurrings } from "@/constant/services/recurring";
import CommonHeading from "../CommonHeading";
import ServicesBlogCard from "../ServicesBlogCard";

export default function RecurringSection() {
  return (
    <section className="container mt-20">
      <CommonHeading
        center={true}
        title="Recurring"
        heading="Daily cleaning that works"
        subHeading="Consistent janitorial coverage keeps your space ready"
      />
      <div className="mt-21 grid grid-cols-3 gap-8">
        {recurrings.slice(0, 3).map((item) => (
          <ServicesBlogCard key={item.id} blog={item} />
        ))}
      </div>
    </section>
  );
}
