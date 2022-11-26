import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Score from "../../components/Score";
import Timer from "../../components/Timer";

const Index = (props) => {
  const numOfQuestion = useSelector((state) => state.main)?.numOfQuestion;
  const questions = useSelector((state) => state.main)?.fileContent.slice(
    0,
    numOfQuestion
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [timeLeft, setTimeLeft] = useState(
    useSelector((state) => state.main)?.time
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
    }
  };

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => setTimeLeft((timeLeft) => timeLeft - 1), 1000);
    } else {
      if (props.clock) setShowScore(true);
    }
  }, [timeLeft]);

  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  if (!numOfQuestion) return <>Go back homepage</>;
  return (
    <>
      <div>
        {showScore ? (
          <Score
            score={score}
            numberOfQuestions={questions.length}
            wrongAnswer={wrongAnswer}
          />
        ) : (
          <>
            <div className="w-4/5 h-3/4 shadow-2xl flex flex-col justify-center items-center font-medium gap-16 mt-20 ">
              {props.clock ? <Timer timeleft={timeLeft} /> : <></>}
              <div className="text-2xl">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="text-2xl m-5">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-8 gap-x-12 m-20 items-center">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <div
                  className="rounded-md flex justify-center items-center py-4 text-white bg-blue-400 hover:cursor-pointer hover:bg-blue-600"
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
