import { React, useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import Link from "next/link";
import ExamResultReview from "../../components/ExamResultReview.jsx";
import Timer from "../../components/Timer";

const Index = (props) => {
  const numOfQuestion = useSelector(
    (state) => state.main,
    shallowEqual
  )?.numOfQuestion;
  const questions = useSelector(
    (state) => state.main,
    shallowEqual
  )?.fileContent.slice(0, numOfQuestion);
  const time = useSelector((state) => state.main)?.time * 60;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [timeLeft, setTimeLeft] = useState(
    useSelector((state) => state.main)?.time * 60
  );
  const handleAnswerOptionClick = (isCorrect, Text) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswer(
        wrongAnswer.concat([
          [
            questions[currentQuestion].questionText,
            questions[currentQuestion].answerOptions.find(
              (element) => element.isCorrect === true
            ).answerText,
            Text,
          ],
        ])
      );
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      clearTimeout(timer);
    }
  };
  const restart = () => {
    setShowScore(false);
    setScore(0);
    setWrongAnswer([]);
    setCurrentQuestion(0);
    setTimeLeft(time);
  };
  var timer;

  useEffect(() => {
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((timeLeft) => timeLeft - 1), 1000);
    } else {
      if (timeLeft == 0) setShowScore(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
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
                  key="questions"
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
