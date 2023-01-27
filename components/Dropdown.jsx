import React, { useState } from "react";

function Dropdown({ buttonText, options }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div
        className="form-select px-4 py-2 mr-4 font-bold text-blue-500 hover:text-blue-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonText}
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
          <div className="py-1 rounded-md bg-white shadow-xs">
            {options.map((option) => (
              <a
                key={option.id}
                href={option.url}
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                {option.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
