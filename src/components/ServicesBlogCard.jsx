import Image from "next/image";
import LinkWithArrow from "./LinkWithArrow";

export default function ServicesBlogCard({ blog, listView=false }) {
  return (
    <div
      key={blog.id}
      className={`bg-skylight shadow-md rounded-xl group flex  ${listView ? "flex-row-reverse" : "flex-col"}`}
    >
      <div className=" overflow-hidden rounded-xl">
        <Image
          src={blog.image}
          alt={blog.title}
          width={474}
          height={316}
          className={`object-cover w-full group-hover:scale-110 transition-all duration-300  h-full ${listView ? "max-h-full " : "max-h-65.75"}`}
        />
      </div>
      <div className="flex items-start justify-between px-7 py-9 ">
        <div className="space-y-4">
          <p className="font-semibold">{blog.title}</p>
          <h5 className="heading-5">{blog.heading}</h5>
          <p>{blog.desc}</p>
          <LinkWithArrow href={`/blogs/${blog.id}`}>learn more</LinkWithArrow>
        </div>
       
      </div>
      
    </div>
  );
}
