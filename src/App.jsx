import { useState } from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import FileDisplay from "./components/FileDisplay";

function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudiStream] = useState(null);

  const isAudioAvailable = file || audioStream;

  function handelAudioReset() {
    setFile(null);
    setAudiStream(null);
  }

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        {isAudioAvailable ? (
          <FileDisplay
            handelAudioReset={handelAudioReset}
            file={file}
            audioStream={audioStream}
          />
        ) : (
          <HomePage setFile={setFile} setAudiStream={setAudiStream} />
        )}
      </section>
    </div>
  );
}

export default App;