import React from "react";
import { Background } from "./Components/Background/Background";

const App = () => {
  const heroData = [
    { text1: "Immerse yourself in", text2: "musical creativity" },
    { text1: "Explore", text2: "your sonic passion" },
    { text1: "Surrender to", text2: "the art of sound" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return;
  <>
    <Background playStatus={playStatus} heroCount={heroCount} />
  </>;
};

export default App;
