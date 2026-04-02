"use client";

import { useRef, useState } from "react";
export default function SelectBox({ label,required,options,placeholder, error, ...rest }) {
  const dropdownRef = useRef(null);
  const [selected, setSelected] = useState("");
  return (
    <div>
      <p>
        {label}
        {required && <span className="text-red-500 pl-0.5">*</span>}
      </p>
      <div className="mt-4 flex flex-col h-14 border border-light-blue rounded-[20px] pl-4 pr-2 placeholder:text-light-blue font-inter focus:outline-none focus:border hover:border-red-500 relative">
        <div
          onClick={() => dropdownRef.current.classList.toggle("hidden")}
          className="flex justify-between items-center h-full pr-2 cursor-pointer"
        >
          <p className="text-light-blue">{selected || (placeholder?placeholder:"Select an option")}</p>
          <svg
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.19531 9L10.3915 0H-0.00083971L5.19531 9Z"
              fill="#060606"
            />
          </svg>
        </div>
        <ul
          ref={dropdownRef}
          className="absolute top-14 left-0 bg-white border border-light-blue rounded-[20px] shadow-lg w-full mt-1 overflow-hidden z-10 hidden"
        >
          {options.map((option, index) => (
            <li
              onClick={() => {
                dropdownRef.current.classList.add("hidden");
                setSelected(option);
              }}
              key={index}
              className="px-4 py-2 hover:bg-red-300 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
 
}
