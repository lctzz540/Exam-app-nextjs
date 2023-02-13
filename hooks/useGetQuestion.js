import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../store/actions/main";

const useGetQuestion = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `${localStorage.getItem("jwt")}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://exam-web-service.onrender.com/question/getownquestion",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch(uploadFile(result)))
      .catch((error) => console.log("error", error));
  }, []);
  const questions = useSelector(
    (state) => state.main,
    shallowEqual
  )?.fileContent;
  return questions;
};
export default useGetQuestion;
