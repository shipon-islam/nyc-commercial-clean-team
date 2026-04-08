import cleaningImg from "@/assets/serviceArea/floor-smoke-clean.webp";
import { foundations } from "@/constant/service-area";
import Image from "next/image";
import CommonHeading from "../CommonHeading";
import LinkWithArrow from "../LinkWithArrow";

export default function Foundation() {
  return (
    <>
      {foundations.map((foundation) => (
        <section
          key={foundation.id}
          className="container mt-8 sm:mt-16 grid md:grid-cols-2 items-center gap-8 sm:gap-16 lg:gap-20"
        >
          <div>
            <CommonHeading
              title={foundation.title}
              heading={foundation.heading}
              subHeading={foundation.desc}
            />{" "}
            <div className="mt-4 mx-auto md:mx-0 w-fit">
              <LinkWithArrow
                href={`/service-area/foundation/${foundation.slug}`}
              >
                learn more
              </LinkWithArrow>
            </div>
          </div>

          <div>
            <Image
              src={cleaningImg}
              alt="foundation"
              height={640}
              width={600}
              className="rounded-xl max-h-160 object-cover"
            />
          </div>
        </section>
      ))}
    </>
  );
}
