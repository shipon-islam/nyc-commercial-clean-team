import ArrowButton from "../ArrowButton";
import CommonHeading from "../CommonHeading";
const staticstics = [
  {
    id: 1,
    value: "98%",
    title: "Client retention rate",
  },
  {
    id: 2,
    value: "25+",
    title: "Years of combined experience",
  },
  {
    id: 3,
    value: "100%",
    title: "Insured and background-checked",
  },
  {
    id: 4,
    value: "24/7",
    title: "Responsive supportate",
  },
];
export default function WhySection() {
  return (
    <section className="container mt-16">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <CommonHeading
            title="Why"
            heading="Trusted by NYC's leading businesses"
            subHeading=""
          />
          <p className="body-text mb-8">
            We’ve built our reputation on consistency, compliance, and
            measurable results. Every project is handled with precision and
            professionalism, ensuring the highest standards are met from start
            to finish. Our clients stay with us because we deliver reliable
            performance, transparent communication, and long-term value.
          </p>
          <ArrowButton>Discover More</ArrowButton>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {staticstics.map((item) => (
            <div key={item.id} className="text-center bg-skyblue-light px-9 py-5 rounded-2xl flex flex-col items-center justify-center">
                <h1 className="text-[64px] font-bold">{item.value}</h1>
                <hr className="text-black h-1"/>
                <p className="lg:text-lg font-medium pt-4 border-black border-t">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
