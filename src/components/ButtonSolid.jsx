export default function ButtonSolid({ children,className,size,color, ...rest }) {
  const buttonSize=size==="small"?" h-8 font-light":"h-[47px] font-medium"
  const colorVarient=color==="white"?"bg-white text-black border-skyblue-light before:bg-skyblue-light shadow-md shadow-black/30":"bg-white text-white border-red before:bg-red"
  return (
    <button className={`px-8 border rounded-full before:h-full before:w-full before:absolute relative before:top-1/2 before:left-1/2 before:-translate-1/2 before:rounded-full hover:before:scale-y-85 hover:before:scale-x-95  before:transitions-all  before:duration-300 ${colorVarient}  ${buttonSize} ${className}`}>
      <span className="relative z-10" {...rest}>
        {children}
      </span>
    </button>
  );
}
