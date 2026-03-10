"use client"
export default function CommonHeading({title,heading,subHeading,center,className}) {
  return (
    <div className={`${center&&"text-center max-w-3xl mx-auto"} ${className}`}>
      <p className={`font-semibold text-red border px-4.5 py-1 w-fit rounded-full ${center&&"mx-auto w-fit"}`}>
        {title}
      </p>
      <h2 className="heading-2 py-4 pb-6">{heading}</h2>
      <p className="md:text-lg">
        {subHeading}
      </p>
    </div>
  );
}
