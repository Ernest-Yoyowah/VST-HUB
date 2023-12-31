import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Featured from "./Components/Featured/Featured";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Components/Homepage/Homepage";

const App = () => {
  const heroData = [
    { text1: "Latest free plugins", text2: "" },
    { text1: "The definitive hub ", text2: "" },
    { text1: "Full piano libraries", text2: "" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 6000);
  }, []);

  return (
    <>
      <Background heroCount={heroCount} />
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      {/* <Homepage /> */}
      <Featured />
      <Footer />
    </>
  );
};

export default App;
