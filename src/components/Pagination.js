import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
export default function Pagination({ meta, next, prev }) {
  return (
    <div className="flex items-center flex-col md:flex-row justify-between gap-6 py-8 mt-6">
      <div className="hidden md:inline"></div>
      <div className="flex items-center min-w-24 gap-x-3">
        <button
          className={`flex items-center cursor-pointer group ${
            meta.current_page === 1 && "opacity-50"
          }`}
          disabled={meta.current_page === 1}
          onClick={() => prev()}
        >
          {" "}
          <span className="text-sm group-hover:text-primary text-gray-500 hidden md:inline">
            Previous
          </span>
          <span className="h-8 w-8 rounded-full border border-primary mr-4 flex items-center justify-center ml-3 group-hover:bg-primary group-hover:text-white">
            <ChevronLeftIcon className="h-4 w-4 text-primary group-hover:text-white" />
          </span>
        </button>
        <button
          onClick={() => next()}
          className={`flex items-center group ${
            meta.current_page === meta.last_page && "opacity-50"
          }`}
          disabled={meta.current_page === meta.last_page}
        >
          {" "}
          <span className="h-8 w-8 rounded-full border border-primary flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white">
            <ChevronRightIcon className="h-4 w-4 text-primary group-hover:text-white " />
          </span>
          <span className="group-hover:text-primary text-gray-500 text-sm hidden md:inline">
            Next
          </span>
        </button>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          Showing {meta.from} - {meta.to} of {meta.total}
        </p>
      </div>
    </div>
  );
}
