import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useGetQuestion from "../../hooks/useGetQuestion";
import useUpload from "../../hooks/useUpload";
import { uploadFile } from "../../store/actions/main";
import Card from "../Card";
import ModalDashboard from "./ModalDashboard";

const Index = () => {
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const [isModalCardOpen, setIsModalCardOpen] = useState(false);
  const [isModalChoiceOpen, setIsModalChoiceOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [subject, setSubject] = useState();
  const dispatch = useDispatch();

  const questions = useGetQuestion();

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const handleCardClick = (card) => {
    setSelectedCard({
      ...card,
      image: card.image || false,
    });
    setIsModalCardOpen(true);
  };
  const handleSaveOnCloud = () => setIsModalChoiceOpen(true);

  const handleImageChange = (e) => {
    const questionsCopy = [...questions];
    const newImage = e.target.files[0];
    const index = questions.findIndex(
      (q) => q.questionText === selectedCard.question
    );
    questionsCopy[index].image = newImage;
    setSelectedCard({
      ...selectedCard,
      image: newImage,
    });
    dispatch(uploadFile(questionsCopy));
  };

  const handleUploadImageClick = () => {
    imageInputRef.current.click();
  };

  const handleChangeSubject = (e) => setSubject(e.target.value);

  const handleSendtoServer = () => {
    if (questions.length !== 0) {
      questions.map((question) => (question.subject = subject));
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `${sessionStorage.getItem("jwt")}`);
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(questions),
        redirect: "follow",
        withCredentials: true,
      };

      return fetch(
        "https://exam-web-service.onrender.com/question/addmanyownquestion",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleDoExam = () => { };

  const handleFileChange = useUpload()[6];
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute top-0 right-0 flex">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg m-2"
          onClick={handleUploadClick}
        >
          + Add more questions
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept=".docx, .doc"
          onChange={(e) =>
            handleFileChange(e).then(console.log(questions.length))
          }
        />
        {questions.length !== 0 ? (
          <>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg m-2"
              onClick={handleSaveOnCloud}
            >
              Save on Cloud
            </button>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg m-2"
              onClick={handleDoExam}
            >
              Do this exam
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className=" bg-white rounded-lg w-4/5 h-2/3 p-4 overflow-auto flex flex-wrap ">
        {questions.map((question, index) => (
          <Card
            key={index}
            className="w-24 h-24 m-2"
            question={question.questionText}
            answer={question.answerOptions
              .filter((answerOption) => answerOption.isCorrect === true)
              .map((answerOption) => answerOption.answerText)}
            onClick={() =>
              handleCardClick({
                question: question.questionText,
                answer: question.answerOptions,
                image: question.image || false,
                questionID: question.QuestionID,
              })
            }
          />
        ))}
      </div>
      <ModalDashboard
        selectedCard={selectedCard}
        handleUploadImageClick={handleUploadImageClick}
        imageInputRef={imageInputRef}
        handleImageChange={handleImageChange}
        isModalCardOpen={isModalCardOpen}
        setIsModalCardOpen={setIsModalCardOpen}
        isModalChoiceOpen={isModalChoiceOpen}
        setIsModalChoiceOpen={setIsModalChoiceOpen}
        handleChangeSubject={handleChangeSubject}
        handleSendtoServer={handleSendtoServer}
      />
    </div>
  );
};

export default Index;
