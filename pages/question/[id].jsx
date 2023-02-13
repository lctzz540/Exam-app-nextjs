import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ModalCard from "../../components/Modal/ModelCard";

function Question() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedCard, setSelectedCard] = useState(false);

  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
    if (!apiCalled && id) {
      setApiCalled(true);
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `${localStorage.getItem("jwt")}`);

      var raw = JSON.stringify({
        questionID: id,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://127.0.0.1:8080/question/getquestionbyid", requestOptions)
        .then((response) => response.text())
        .then((result) => JSON.parse(result))
        .then((question) => {
          setTimeout(() => {
            setSelectedCard(question);
          }, 0);
        })
        .catch((error) => console.log("error", error));
    }
  }, [id]);

  return (
    <div>
      {selectedCard && (
        <ModalCard onClose={() => router.back()} image={selectedCard.image}>
          <div className="text-black">
            ID:
            <span className="text-red-500">[{selectedCard.QuestionID}]</span>
          </div>
          <h2 className="text-black text-lg font-medium mb-2">
            {selectedCard.questionText}
          </h2>
          {selectedCard.answerOptions.map((answerOption) => {
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
        </ModalCard>
      )}
    </div>
  );
}

export default Question;
