import Image from "next/image";
import React from "react";

const ModalCard = ({ image, children, onClose }) => {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="relative flex">
            {image && (
              <Image
                className="w-48 rounded-lg object-cover h-full my-auto "
                src={URL.createObjectURL(image)}
                alt="Modal Image"
                width="300"
                height="400"
              />
            )}
            <div className="relative px-6 py-8">{children}</div>
          </div>
          <button
            className="text-black absolute top-0 right-0 p-2"
            onClick={() => {
              onClose();
            }}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalCard;
