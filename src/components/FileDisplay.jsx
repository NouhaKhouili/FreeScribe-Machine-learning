import React from "react";

export default function FileDisplay(props) {
  const { file, audioStream, handelAudioReset } = props;
  return (
    <main className=" flex-1 p-4 flex-col justify-center text-center  sm:gap-4 gap-3 md:gap-5 pb-20 w-fit max-w-full mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800">
        Your<span className=" text-blue-400">File</span>
      </h1>
      <div className="mx-auto flex flex-col my-4 ">
        <h3 className=" font-semibold">Name</h3>
        <p className="">{file.name}</p>
      </div>
      <div className=" flex items-center justify-between gap-4">
        <button
          onClick={handelAudioReset}
          className=" text-slate-400 hover:text-blue-600 duration-200"
        >
          Reset
        </button>
        <button className=" specialBtn p-2 px-3 flex items-center  gap-2 rounded-lg text-blue-400">
          <p className="">Transcribe</p>
          <i className="fa-solid fa-pen-clip"></i>
        </button>
      </div>
    </main>
  );
}
