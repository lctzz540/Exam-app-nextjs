import React, { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import useUpload from "../hooks/useUpload";
import Card from "./Card";
import ModalCard from "./ModelCard";

const Panel = () => {
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const questions = useSelector(
    (state) => state.main,
    shallowEqual
  )?.fileContent;

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleImageChange = (e) => {
    setSelectedCard({
      ...selectedCard,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleUploadImageClick = () => {
    imageInputRef.current.click();
  };

  const handleFileChange = useUpload()[6];
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute top-0 right-0 ">
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
          onChange={(e) => handleFileChange(e)}
        />
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
                image: false,
              })
            }
          />
        ))}
      </div>
      {isModalOpen && (
        <ModalCard
          onClose={() => setIsModalOpen(false)}
          image={selectedCard.image}
        >
          <h2 className="text-black text-lg font-medium mb-2">
            {selectedCard.question}
          </h2>
          {selectedCard.answer.map((answerOption) => {
            if (!answerOption.isCorrect) {
              return (
                <p className="text-gray-500 text-sm" key="answerText">
                  {answerOption.answerText}
                </p>
              );
            } else {
              return (
                <p className="text-green-500 text-sm" key="answerTextCorrect">
                  {answerOption.answerText}
                </p>
              );
            }
          })}
          {!selectedCard.image ? (
            <button
              className="text-blue-500 text-sm mt-3"
              onClick={handleUploadImageClick}
            >
              + Add image
            </button>
          ) : (
            <button
              className="text-blue-500 text-sm mt-3"
              onClick={handleUploadImageClick}
            >
              Edit image
            </button>
          )}
          <input
            type="file"
            ref={imageInputRef}
            style={{ display: "none" }}
            onChange={(e) => handleImageChange(e)}
            accept=".png, .jpg, .jpeg"
          />
        </ModalCard>
      )}
    </div>
  );
};

export default Panel;
