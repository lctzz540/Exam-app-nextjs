import React from "react";

const ExamResultReview = ({ results, score, numOfQuestion, restart }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const handleNext = (e) => {
    setCurrentIndex(currentIndex + 1);
  };
  const handlePrevious = (e) => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="container mx-auto px-4 grid place-items-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-4 m-10 md:w-[50%]">
        <h4 className="text-blue-600">
          You got {score}/{numOfQuestion}
        </h4>
        <h3 className="text-2xl font-bold mb-2 text-blue-600">
          {results[currentIndex][0]}
        </h3>
        <div className="flex mb-4">
          <div className="w-1/2">
            <p className="font-bold mb-1 text-black">Your answer:</p>
            <p className="font-bold text-red-600">{results[currentIndex][2]}</p>
          </div>
          <div className="w-1/2">
            <p className="font-bold mb-1 text-black">Correct answer:</p>
            <p className="font-bold text-green-600">
              {results[currentIndex][1]}
            </p>
          </div>
        </div>
        <div className="relative flex justify-between">
          {currentIndex > 0 ? (
            <button
              className=" px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
              onClick={handlePrevious}
            >
              Previous
            </button>
          ) : (
            <button
              className=" px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md"
              onClick={() => restart()}
            >
              Try again
            </button>
          )}
          {currentIndex < results.length - 1 && (
            <button
              className=" px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ExamResultReview;
