import Link from "next/link";
import ExamResultReview from "../../components/ExamResultReview.jsx";
import Timer from "../../components/Timer";
import useExam from "../../hooks/useExam.js";

const Index = (props) => {
  const [
    numOfQuestion,
    showScore,
    wrongAnswer,
    restart,
    timeLeft,
    currentQuestion,
    questions,
    handleAnswerOptionClick,
    score,
  ] = useExam();

  if (!numOfQuestion)
    return (
      <div className="grid place-items-center justify-center h-screen">
        <Link
          href="/"
          className=" px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md"
        >
          Go back homepage
        </Link>
      </div>
    );
  return (
    <>
      <div>
        {showScore ? (
          <ExamResultReview
            results={wrongAnswer}
            score={score}
            numOfQuestion={numOfQuestion}
            restart={restart}
          />
        ) : (
          <>
            <div className="w-4/5 h-3/4 shadow-2xl justify-center font-medium gap-16 m-5 mt-20 ">
              {timeLeft ? <Timer timeleft={timeLeft} /> : <></>}
              <div className="text-2xl m-5">
                <span className="pr-5">
                  Question {currentQuestion + 1}/{questions.length}:{" "}
                </span>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-12 m-20 items-center">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <div
                  className="rounded-md flex justify-center items-center py-4 text-white bg-blue-400 hover:cursor-pointer hover:bg-blue-600 p-3"
                  onClick={() =>
                    handleAnswerOptionClick(
                      answerOption.isCorrect,
                      answerOption.answerText
                    )
                  }
                  key={answerOption.answerText}
                >
                  {answerOption.answerText}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Index;
