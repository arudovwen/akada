import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
export default function Pagination({ totalData, pageNumber, pageSize,pageCount, next, prev }) {

const [pages,setPages] = React.useState(0)
React.useEffect(()=>{
 setPages(Math.round(totalData / 15));
})

  return (
    <div className="flex items-center flex-col md:flex-row justify-between gap-6 py-8 mt-6">
      <div className="hidden md:inline"></div>
      <div className="flex items-center min-w-24 gap-x-4">
        <button className="flex items-center">
          {" "}
          <span className="text-sm text-gray-500 hidden md:inline">
            Previous
          </span>
          <span
            className="h-8 w-8 rounded-full border border-primary mr-4 flex items-center justify-center ml-3"
            onClick={() => prev()}
          >
            <ChevronLeftIcon className="h-4 w-4 text-primary" />
          </span>
        </button>
        <button
          onClick={() => next()}
          className="flex items-center"
          disabled={pageNumber === pages}
        >
          {" "}
          <span className="h-8 w-8 rounded-full border-primary bg-primary flex items-center justify-center mr-3">
            <ChevronRightIcon className="h-4 w-4 text-white " />
          </span>
          <span className="text-primary text-sm hidden md:inline">Next</span>
        </button>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          Showing {pageNumber} - {pages} of {totalData}
        </p>
      </div>
    </div>
  );
}
