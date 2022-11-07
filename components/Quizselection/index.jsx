import { React, useState, useEffect } from "react";
import Link from "next/link";
import { Processbar } from "./processbar";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile, deleteFile } from "../../store/actions/main";
import * as t from "../../store/types";

const Index = () => {
  const [fileName, setFilename] = useState("No file selected");
  const [showFileinput, setShowfileinput] = useState(false);
  const fileStatus = useSelector((state) => state.main)?.uploadStatus;
  const lengthOfquestions = useSelector((state) => state.main)?.fileContent
    .length;
  const fileContent = useSelector((state) => state.main)?.fileContent;
  const dispatch = useDispatch();

  useEffect(() => setShowfileinput(!showFileinput), [fileStatus]);
  const handleUploadFile = async (e) => {
    dispatch(deleteFile());
    setFilename(null);
    var formdata = new FormData();
    formdata.append("files", e.target.files[0]);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    await fetch(
      "https://lctquizzapp.herokuapp.com/upload-file?n=3",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch(uploadFile(JSON.parse(result))))
      .catch((error) => console.log("error", error));
    await setFilename(e.target.files[0].name);
    e.target.value = null;
  };
  return (
    <div className=" pt-6">
      <h1 className=" text-blue-700 text-center text-3xl font-medium my-6 ">
        Welcome to my Quiz App
      </h1>
      <p className=" text-center mt-12 mb-8 ">
        Looking to test your knowledge..? Then you are at the right place. Try
        out your own quiz with my app!
      </p>
      <div className=" flex justify-center items-center">
        <div className="container bg-white text-black w-2/3 shadow-2xl rounded-2xl p-5">
          <h1 className=" font-extrabold text-xl ">Hi there, I am lctzz540</h1>
          <p>
            This app was created by me to help you review your knowledge by your
            exam questions you have created and sharing your own.
          </p>

          <div className="mb-6 pt-4">
            {showFileinput ? (
              <>
                <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                  Upload File
                </label>
                <div className="mb-8">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="sr-only"
                    onChange={(e) => handleUploadFile(e)}
                    accept=".docx, .doc"
                  />
                  <label
                    for="file"
                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                        Drop files here
                      </span>
                      <span className="mb-2 block text-base font-medium text-[#6B7280]">
                        Or
                      </span>
                      <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <Processbar filename={fileName} status={fileStatus} />
          <div className="w-full flex justify-end pr-3">
            <button className=" bg-black px-5 py-2 rounded-sm text-white hover:cursor-pointer ">
              <Link href="/test">Begin Test</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
