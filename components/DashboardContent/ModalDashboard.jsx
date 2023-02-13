import { useRouter } from "next/router";
import ModalChoice from "../Modal/ModalChoice";
import ModalCard from "../Modal/ModelCard";

const ModalDashboard = ({
  selectedCard,
  handleUploadImageClick,
  imageInputRef,
  handleImageChange,
  isModalCardOpen,
  setIsModalCardOpen,
  isModalChoiceOpen,
  setIsModalChoiceOpen,
  handleChangeSubject,
  handleSendtoServer,
}) => {
  const router = useRouter();
  return (
    <div>
      {isModalCardOpen && (
        <ModalCard
          onClose={() => setIsModalCardOpen(false)}
          image={selectedCard.image}
        >
          <div className="text-black">
            ID:
            <span
              className="text-red-500"
              onClick={() =>
                router.push("/question/" + selectedCard.questionID)
              }
            >
              [{selectedCard.questionID}]
            </span>
          </div>
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
      {isModalChoiceOpen && (
        <ModalChoice
          title={"Select Subject"}
          onClose={() => setIsModalChoiceOpen(false)}
          options={[{ label: "gpb", value: "gpb" }]}
          handleChange={handleChangeSubject}
          handleUpload={handleSendtoServer}
        ></ModalChoice>
      )}
    </div>
  );
};

export default ModalDashboard;
