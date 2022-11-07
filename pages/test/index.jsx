import { React, useState, useEffect } from "react";
import Link from "next/link";

const Index = () => {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="w-4/5 h-3/4 shadow-2xl flex flex-col justify-center items-center font-medium gap-16 ">
        <h1 className="text-2xl">What is the capital of England?</h1>
        <div className=" grid grid-cols-2 gap-8 gap-x-12 ">
          {/* options */}
          <div className=" w-[400px] rounded-md flex justify-center items-center py-4 text-white bg-blue-400 hover:cursor-pointer hover:bg-blue-600">
            Spain
          </div>
          <div className=" w-[400px] rounded-md flex justify-center items-center py-4 text-white bg-blue-400 hover:cursor-pointer hover:bg-blue-600">
            Spain
          </div>
          <div className=" w-[400px] rounded-md flex justify-center items-center py-4 text-white bg-blue-400 hover:cursor-pointer hover:bg-blue-600">
            Spain
          </div>
          <div className=" w-[400px] rounded-md flex justify-center items-center py-4 text-white bg-blue-400 hover:cursor-pointer hover:bg-blue-600">
            Spain
          </div>
        </div>
        {isQuestionAnswered ? (
          <div className=" w-full px-2 ">
            <p className=" max-h-[100px] overflow-y-scroll ">
              {/* correct answer explanation here */}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Index;
