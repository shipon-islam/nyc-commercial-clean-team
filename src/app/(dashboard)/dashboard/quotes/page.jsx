"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import toast from "react-hot-toast";
const statusList = [
  { color: "bg-gray-400", name: "All" },
  { color: "bg-orange-500", name: "Pending" },
  { color: "bg-green-500", name: "Confirmed" },
  { color: "bg-red-500", name: "Cencelled" },
];
export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [statusVal, setStatusVal] = useState("all");
  const [totalPages, setTotalPages] = useState(1);
  const [isRefresh, setIsRefresh] = useState(false);
  const limit = 10;

  const fetchQuotes = async (currentPage, currentStatusVal) => {
    const res = await fetch(
      `/api/quote?page=${currentPage}&limit=${limit}&status=${currentStatusVal}`,
    );
    const result = await res.json();
    if (result.success) {
      setQuotes(result.data);
      setTotalPages(result.pagination.totalPages);
    }
  };

   const handleDelete = async (id) => {
    const userConfirmed = confirm("Are you sure you want to delete this item?");
    if (!userConfirmed) return;

    try {
      const response = await fetch(`/api/quote/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setIsRefresh(!isRefresh);
      toast.success("Quote deleted successfully!");
    } catch (error) {
      toast.error(error.message);
      console.error("There was a problem with the delete operation:", error);
    }
  };
  useEffect(() => {
    startTransition(() => {
      fetchQuotes(page, statusVal);
    });
  }, [page, statusVal, isRefresh]);

  return (
    <div className="mt-8">
      {quotes.length <= 0 ? (
        <div className="w-fit mx-auto text-center">
          <Image
            src="/images/dashboard/empty.png"
            width={400}
            height={400}
            alt="empty"
          />
          <p className="text-gray-500 text-xl mt-8 font-inter">
            There is no Quote yet!
          </p>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="border border-gray-500 rounded-xl overflow-hidden">
            <table className="table-auto w-full">
              <thead className="">
                <tr className="bg-slate text-slate-300 text-left">
                  <th className="px-4 py-5">ID</th>
                  <th className="px-2 py-5">NAME</th>
                  <th className="px-2 py-5">EMAIL</th>
                  <th className="px-2 py-5 ">PHONE</th>
                  <th className="px-2 py-5">FACILITY</th>
                  <th className="px-2 py-5">CATEGORY</th>
                  <th className="px-2 py-5">ACTION</th>
                </tr>
              </thead>

              <tbody>
                {quotes?.map((quote, index) => (
                  <tr
                    key={quote._id}
                    className="bg-slate text-slate-400 border-t text-sm"
                  >
                    <td className="px-4 py-2.5 lg:min-w-40">
                      NYC-{quote._id.slice(-6).toUpperCase()}
                    </td>
                    <td className="px-2 py-2.5 lg:min-w-40 flex flex-col">
                      <span className="text-slate-200 capitalize">
                        {quote.fullName}
                      </span>
                     
                    </td>
                    <td className="px-2 py-2.5 lg:min-w-40 max-w-70">
                      <span className="text-slate-200">
                        {quote.email}
                      </span>
                    </td>
                    <td className="px-2 py-2.5 lg:min-w-40 ">
                    {quote.phone}
                   
                    </td>
                    <td className="px-2 py-2.5 lg:min-w-40 ">
                      {quote.facilityType}
                    </td>
                    <td className="px-2 py-2.5 lg:min-w-40">
                      {quote.category}
                    </td>
                    
                    <td className="px-2 py-2">
                      <div className="flex items-center gap-x-2">
                        <button onClick={() => handleDelete(quote._id)} className="cursor-pointer hover:text-red-500 hover:border-red-500">
                          <Icon
                            icon="mingcute:delete-2-line"
                            width="20"
                            height="20"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;

              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`px-4 py-2 rounded ${
                    page === pageNumber ? "bg-slate text-white" : "bg-gray-200"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
