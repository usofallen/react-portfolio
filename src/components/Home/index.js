import LogoA from "../../assets/images/logo-aa.png";
import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray1 = [" ", "D", "y", "l", "a", "n"];
  const nameArray2 = ["l", "l", "e", "n", ","];
  const jobArray = [
    "p",
    "r",
    "o",
    "d",
    "u",
    "c",
    "t",
    " ",
    "m",
    "a",
    "n",
    "a",
    "g",
    "e",
    "r",
  ];

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _12`}>I'</span>
          <span className={`${letterClass} _12`}>m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray1}
            idx={15}
          />
          <img src={LogoA} alt="Allen" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray2}
            idx={17}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2> Frontend Developer / Business Strategist / Aspiring APM Intern</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
