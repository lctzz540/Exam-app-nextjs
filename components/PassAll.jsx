import React from "react";

const PassAll = () => {
  return (
    <div className="container mx-auto px-4 grid place-items-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-4 m-10 md:w-[50%]">
        <div className="text-xl font-bold text-green-600">
          Congrats! You have passed all the questions.
        </div>
      </div>
    </div>
  );
};
export default PassAll;
