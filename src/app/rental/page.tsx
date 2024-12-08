
import React from "react";

const RentalForm: React.FC = () => {
 
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6 bg-gray-50 w-full">
      {/* Pick-Up Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Pick - Up</h3>
          <input
            type="radio"
            name="rental-type"
            className="form-radio text-blue-600"
            defaultChecked
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-gray-600 mb-2">Locations</label>
            <select className="w-full p-2 border rounded">
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Time</label>
            <input
              type="time"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      {/* Switch Button */}
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700"
          aria-label="Switch locations"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l-4-4m0 0l4-4m-4 4h16M16 8l4 4m0 0l-4 4m4-4H4"
            />
          </svg>
        </button>
      </div>

      {/* Drop-Off Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Drop - Off</h3>
          <input
            type="radio"
            name="rental-type"
            className="form-radio text-blue-600"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-gray-600 mb-2">Locations</label>
            <select className="w-full p-2 border rounded">
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Time</label>
            <input
              type="time"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default RentalForm;