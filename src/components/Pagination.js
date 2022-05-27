import React from 'react'
import {
 
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
export default function pagination() {
  return (
    <div className="flex items-center justify-between py-8 mt-6">
      <div></div>
      <div className="flex items-center min-w-24">
        <span className="text-sm text-gray-500">Previous</span>
        <div className="h-8 w-8 rounded-full border border-primary mr-4 flex items-center justify-center ml-3">
          <ChevronLeftIcon className="h-4 w-4 text-primary" />
        </div>
        <div className="h-8 w-8 rounded-full border-primary bg-primary flex items-center justify-center mr-3">
          <ChevronRightIcon className="h-4 w-4 text-white " />
        </div>
        <span className="text-primary text-sm">Next</span>
      </div>
      <div>
        <p className="text-sm text-gray-500">Showing 1 - 10 of 121</p>
      </div>
    </div>
  );
}
