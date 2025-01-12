import React from "react";


import Navbar from "../components/Navbar";
import { Result } from "postcss";
import Results from "../components/Result";
import Compare from "../components/Compare";
import Improvements from "../components/Improvements";
import ResponseTime from "../components/ResponseTime";
import Approach from "../components/Approach";
import Suggestions from "../components/Suggestions";
import CompareAccuracy from "../components/CompareAccuracy";
import Time from "../components/Time";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="flex ml-5 mt-2 gap-2">
        {/* Left Panel */}
        <Results />
        <div>
          <div className="flex flex-cols-3 gap-6 mt-3 ">
            <Compare />
            <Compare />
            <Compare />
          </div>
          <div className="flex flex-cols-3 gap-6 mt-3 ">
            <Improvements />
            <ResponseTime />
            <Approach />
            <Suggestions />

          </div>
          <div className="flex flex-cols-2 gap-6 mt-3 ">
            <CompareAccuracy />
            <Time />

          </div>

        </div>

        {/* Right Panel */}

      </main >

    </div >
  );
};

export default HomePage;
