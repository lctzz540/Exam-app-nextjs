import { React, useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import useTimer from "./useTimer.js";

const useExam = () => {
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
  const [timeLeft, resetTimeLeft] = useTimer(
    useSelector((state) => state.main)?.time * 60,
    setShowScore
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
  const restart = () => {
    setShowScore(false);
    setScore(0);
    setWrongAnswer([]);
    setCurrentQuestion(0);
    resetTimeLeft(time);
  };
  return [
    numOfQuestion,
    showScore,
    wrongAnswer,
    restart,
    timeLeft,
    currentQuestion,
    questions,
    handleAnswerOptionClick,
    score,
  ];
};
export default useExam;
