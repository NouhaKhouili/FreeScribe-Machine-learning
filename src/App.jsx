import { useEffect, useRef, useState } from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import FileDisplay from "./components/FileDisplay";
import Information from "./components/Information";
import Transcribing from "./components/Transcribing";

function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudiStream] = useState(null);

  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const isAudioAvailable = file || audioStream;

  const worker = useRef(null);

  function handelAudioReset() {
    setFile(null);
    setAudiStream(null);
  }

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL("./utils/whisper.worker.js"));
    }
  }, []);

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        {output ? (
          <Information />
        ) : loading ? (
          <Transcribing />
        ) : isAudioAvailable ? (
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
