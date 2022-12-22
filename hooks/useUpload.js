import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile, deleteFile } from "../store/actions/main.js";

const useUpload = () => {
  const [fileName, setFilename] = useState("No file selected");
  const [isLoading, setIsloading] = useState(false);
  const [showFileinput, setShowfileinput] = useState(false);
  const [ready, setReady] = useState(false);
  const fileStatus = useSelector((state) => state.main)?.uploadStatus;
  const lengthOfquestions = useSelector((state) => state.main)?.fileContent
    .length;
  const dispatch = useDispatch();
  const time = useSelector((state) => state.main)?.time;
  const numOfQuestion = useSelector((state) => state.main)?.numOfQuestion;

  useEffect(() => {
    if (numOfQuestion && time) setReady(true);
  }, [numOfQuestion, time]);

  useEffect(() => setShowfileinput(!showFileinput), [fileStatus]);
  const handleUploadFile = async (e) => {
    dispatch(deleteFile());
    setFilename(null);
    setIsloading(true);
    var formdata = new FormData();
    formdata.append("files", e.target.files[0]);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    await fetch("https://lctquizzapp.fly.dev/upload-file", requestOptions)
      .then((response) => response.json())
      .then((result) => dispatch(uploadFile(JSON.parse(result))))
      .catch((error) => console.log("error", error));
    await setFilename(e.target.files[0].name);
    setIsloading(false);
    e.target.value = null;
  };
  return [
    fileName,
    isLoading,
    showFileinput,
    ready,
    fileStatus,
    lengthOfquestions,
    handleUploadFile,
  ];
};
export default useUpload;
