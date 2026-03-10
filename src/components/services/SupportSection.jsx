import { supports } from "@/constant/services/support";
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
      <div className="mt-21 grid grid-cols-[1fr_1fr] gap-8">
        {supports.slice(0, 2).map((item) => (
          <ServicesBlogCard listView={true} key={item.id} blog={item} />
        ))}
      </div>
    </section>
  );
}
