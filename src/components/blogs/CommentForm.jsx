"use client";

import { commentYupSchema } from "@/yup/commentYubSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function CommentForm({ blogId }) {
  const [loading, setLoading] = useState(false);
  const router=useRouter()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentYupSchema),
  });
  const onSubmit = async (data) => {
    if (!blogId) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("blogId", blogId);
    formData.append("message", data.message);
    console.log(data);
    try {
      const response = await fetch("/api/blog/comment", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        reset();
        setLoading(false);
        toast.success("Comment posted successfully!");
        reset();
        router.refresh()
      } else {
        setLoading(false);
        const errorText = await response.text();
        toast.error(`Failed to comment: ${errorText}`);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-154">
      <h2 className="heading-2 mb-8">Leave a Comment</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
        {/* Row 1: Name & Email */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              {...register("name")}
              className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-2xl text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all h-20"
            />
            {errors.name && (
              <p className="text-sm text-red-500 pl-1 mt-1">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              {...register("email")}
              className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-2xl text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all h-20"
            />
            {errors.email && (
              <p className="text-sm text-red-500 pl-1 mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Message */}
        <div>
          <textarea
            name="message"
            placeholder="Enter Message"
            rows={5}
            {...register("message")}
            className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-2xl text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all resize-none"
          />
          {errors.message && (
            <p className="text-sm text-red-500 pl-1 mt-1">
              {errors.message?.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-8 py-3 bg-red hover:bg-[#1D2F64] text-white rounded-xl text-lg font-light transition-colors cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit Comment"}
          </button>
        </div>
      </form>
    </div>
  );
}
