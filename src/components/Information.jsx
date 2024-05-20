import React, { useState } from "react";
import Transcription from "./Transcription";
import Translation from "./Translation";

export default function Information() {
  const [tab, setTab] = useState("transcription");
  return (
    <main className="  flex flex-1 flex-col p-4 gap-3 sm:gap-4 text-center justify-center pb-20 max-w-prose w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your
        <span className="text-blue-400 bold"> Transcribing</span>
      </h1>
      <div className=" flex mx-auto bg-white border-2 border-solid border-blue-300 shadow rounded-full overflow-hidden items-center grid grid-cols-2">
        <button
          className={
            "px-4 py-1 font-medium duration-200 " +
            (tab === "transcription"
              ? "bg-blue-400 text-white"
              : "hover:text-blue-600 text-blue-400")
          }
          onClick={() => setTab("transcription")}
        >
          Transcription
        </button>

        <button
          className={
            "px-4 py-1 font-medium duration-200 " +
            (tab === "translation"
              ? "bg-blue-400 text-white"
              : "hover:text-blue-600 text-blue-400")
          }
          onClick={() => setTab("translation")}
        >
          Translation
        </button>
      </div>
      {tab === "transcription" ? <Transcription /> : <Translation />}
    </main>
  );
}
