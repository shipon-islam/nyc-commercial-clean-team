"use client";
import Button from "@/components/Button";
import Link from "next/link";

import { useState } from "react";
import toast from "react-hot-toast";

export default function PageNameForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  //for submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      return setError("Name is Required");
    }

    const formData = new FormData();
    formData.append("name", name);
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/pages/page-name", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setName("");
        setLoading(false);
        toast.success("Page Name created successfully!");
      } else {
        setLoading(false);
        toast.error(data?.error || "Page Name creation failed");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="">
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-2xl font-bold">Create page name</h1>
          <form onSubmit={handleSubmit} className="flex items-end gap-x-8 mt-4" action="#">
          <div className="flex-1">
            <label htmlFor="" className="mb-1 block">
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-500 px-4 py-2.5 rounded-md w-full block"
              placeholder="Page Name"
            />
            {error && (
              <p className="text-red-500 ml-1 mt-1 block text-sm capitalize ">
                {error}
              </p>
            )}
          </div>

          <Button
            name={loading ? "Submitting..." : "Submit"}
            className="bg-blue-600! text-white rounded-lg  w-fit ml-auto"
          />
        </form>
          </div>
           <Link
            className="bg-slate text-white px-4 py-2 rounded-xl"
            href="/dashboard/pages"
          >
            {" "}
            See Pages
          </Link>
          
        </div>
        
      </div>
    </div>
  );
}
