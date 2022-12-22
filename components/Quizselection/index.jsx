import { React } from "react";
import Link from "next/link";
import { Processbar } from "./processbar";
import Form from "./Form";
import Loading from "./loading";
import useUpload from "../../hooks/useUpload.js";

const Index = () => {
  const [
    fileName,
    isLoading,
    showFileinput,
    ready,
    fileStatus,
    lengthOfquestions,
    handleUploadFile,
  ] = useUpload();

  return (
    <div className=" pt-6">
      <h1 className=" text-blue-700 text-center text-3xl font-medium my-6 ">
        Welcome to my Quiz App
      </h1>
      <div className=" flex justify-center items-center">
        <div className="container bg-white text-black w-2/3 shadow-2xl rounded-2xl p-5">
          <h1 className=" font-extrabold text-xl ">Hi there, I am lctzz540</h1>
          <p>
            This app was created by me to help you review your knowledge by your
            exam questions you have created and sharing your own.
          </p>
          {fileStatus && !isLoading && lengthOfquestions != 0 ? (
            <Form length={lengthOfquestions} />
          ) : (
            <></>
          )}
          {lengthOfquestions === 0 && fileStatus ? (
            <>
              <p className="text-2xl font-bold text-center mt-10 mb-5">
                No questions avaiable, make sure your format matches with rules
                below!
              </p>
              <ul className="list-disc ml-5">
                <li>Every question or answer in the different paragraphs</li>
                <li>The paragraphs question contains &quot;Câu :&quot;</li>
                <li>The correct answer is underlined</li>
              </ul>
            </>
          ) : (
            <></>
          )}
          <div className="mb-6 pt-4">
            {showFileinput ? (
              <>
                <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                  Upload File
                </label>
                {isLoading ? (
                  <Loading />
                ) : (
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
                      htmlFor="file"
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
                )}
              </>
            ) : (
              <></>
            )}
          </div>
          <Processbar filename={fileName} status={fileStatus} />

          {ready ? (
            <div className="w-full flex justify-end pr-3">
              <button className=" bg-black px-5 py-2 rounded-sm text-white hover:cursor-pointer ">
                <Link href="/test">Begin Test</Link>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default Index;
