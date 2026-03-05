import { industries } from "@/constant/home/industries";
import Image from "next/image";
import CommonHeading from "../CommonHeading";
import LinkWithArrow from "../LinkWithArrow";

export default function IndusriesSection() {
  return (
    <section className="container mt-16">
        <div>
            <CommonHeading title="Industries" heading="Who we serve" subHeading="Specialized cleaning for every sector across the city."/>
        </div>
        <div className="grid grid-cols-[1fr_2fr]">
            <div>

            </div>
            <div>
                      {industries.map((item) => (
                        <div key={item.id}>
                          
                            <div>
                              <p>{item.title}</p>
                              <h4>{item.heading}</h4>
                              <p>{item.desc}</p>
                              <LinkWithArrow>learn more</LinkWithArrow>
                            </div>
                            
                          
                          <div>
                            <Image src={item.image} alt={item.title}/>
                          </div>
                        </div>
                      ))}
                    </div>
        </div>
    </section>
  )
}
