import { services } from "@/constant/home/services";
import Image from "next/image";
import CommonHeading from "../CommonHeading";
import LinkWithArrow from "../LinkWithArrow";

export default function ServicesSection() {
  return (
    <section className="container mt-16">
      <div className="grid grid-cols-2">
        <div>
          <CommonHeading
            title="Services"
            heading="What we handle"
            subHeading="Complete cleaning solutions for every commercial need."
          />
        </div>
        <div>
          {services.map((item) => (
            <div key={item.id}>
              <div>
                <div>
                  <p>{item.title}</p>
                  <h4>{item.heading}</h4>
                  <p>{item.desc}</p>
                  <LinkWithArrow>learn more</LinkWithArrow>
                </div>
                {item.overlayImage && (
                  <Image src={item.overlayImage} alt="overlay" />
                )}
              </div>
              <div>
                <Image src={item.image} alt={item.title}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
