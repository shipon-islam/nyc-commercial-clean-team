
export default function CommonHeading({title,heading,subHeading,className}) {
  return (
    <div className={className}>
      <p className="font-semibold text-red border px-4.5 py-1 w-fit rounded-full">
        {title}
      </p>
      <h2 className="heading-2 py-4 pb-6">{heading}</h2>
      <p className="md:text-lg">
        {subHeading}
      </p>
    </div>
  );
}
