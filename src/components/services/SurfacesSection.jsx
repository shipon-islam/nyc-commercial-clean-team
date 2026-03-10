import { surfaces } from "@/constant/services/surfaces";
import CommonHeading from "../CommonHeading";
import ServicesBlogCard from "../ServicesBlogCard";

export default function SurfacesSection() {
  return (
    <section className="container mt-20">
      <CommonHeading
        center={true}
        title="Surfaces"
        heading="Floors and finishes maintained"
        subHeading="Protect your investment with professional floor care and restoration"
      />
      <div className="mt-21 grid grid-cols-[2fr_1fr_1fr] gap-8">
        {surfaces.slice(0, 3).map((item) => (
          <ServicesBlogCard listView={item.listView} key={item.id} blog={item} />
        ))}
      </div>
    </section>
  );
}
