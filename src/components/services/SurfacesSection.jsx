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
      <div className="grid lg:grid-cols-2 gap-8 mt-21">
        <div className="">
        {surfaces.slice(0, 1).map((item) => (
          <ServicesBlogCard view={item.view} key={item.id} blog={item} />
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {surfaces.slice(1, 3).map((item) => (
          <ServicesBlogCard view={item.view} key={item.id} blog={item} />
        ))}
      </div>
      </div>
      
    </section>
  );
}
