import React from "react";

const Card = ({ onClick, question, answer }) => {
  return (
    <div
      className=" p-4 w-64 h-48 overflow-hidden flex flex-col"
      onClick={onClick}
    >
      <div className="bg-gray-800 rounded-t-lg text-white-700 font-medium flex-1 p-2 overflow-hidden">
        {question}
      </div>
      <div className="bg-gray-300 rounded-b-lg text-gray-500 flex-1 p-2 overflow-hidden">
        {answer}
      </div>
    </div>
  );
};

export default Card;
