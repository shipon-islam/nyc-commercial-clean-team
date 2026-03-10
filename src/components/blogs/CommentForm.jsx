"use client";

import { useState } from "react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-154">
      <h2 className="heading-2 mb-8">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-5 ">
        {/* Row 1: Name & Email */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-2xl text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all h-20"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-2xl text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all h-20"
          />
        </div>

      

        {/* Row 3: Message */}
        <textarea
          name="message"
          placeholder="Enter Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-2xl text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all resize-none"
        />

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-8 py-3 bg-red hover:bg-[#1D2F64] text-white rounded-xl text-lg font-light transition-colors cursor-pointer"
          >
            Submit Comment
          </button>
          
        </div>
      </form>
    </div>
  );
}