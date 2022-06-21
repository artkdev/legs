import React from "react";
import { Link } from "react-router-dom";
import { StyledHome } from "./styles";

import prev from "../../Assets/Home/Frame 38.png";
import sec from "../../Assets/Home/Frame 39.png";
import wow from "../../Assets/Home/Anime WOW - Sound Effect (HD).mp3";
import { useState } from "react";

export default function Home() {
  const [clicked, setclicked] = useState(false);

  function handleClick() {
    var myMusic = document.getElementById("music");
    setclicked(true);
    setTimeout(() => {
      myMusic.play();
    }, 1500);
  }

  return (
    <StyledHome id="Section1">
      <audio controls id="music">
        <source src={wow} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="container">
        <div className={clicked ? "firstBlock firstAfter" : "firstBlock"}>
          <h1 className={clicked ? " hidden " : ""}>
            Do you ever wonder where the f*$%{" "}
            <a
              href="https://opensea.io/collection/boredapeyachtclub"
              target="_blank"
              rel="noreferrer noopener"
            >
              "Bored Ape Yacht Club"
            </a>{" "}
            legs are?
          </h1>
          <img src={prev} alt="" />
          <img className={clicked ? "" : "hiddenImg"} src={sec} alt="" />
          <h1 className={clicked ? "hidden" : ""}>
            Now you can try to mint them!
          </h1>
          <button
            className={clicked ? "hidden" : ""}
            onClick={() => handleClick()}
          >
            {" "}
            <p>click here!</p>{" "}
          </button>
        </div>
        <div className={clicked ? " rightBlock shown" : "rightBlock"}>
          <div className="textBlock">
            <h2>Bored Ape Legs Club</h2>
            <p>
              Bayc’s upper torso is already out there, but how the f*$% will
              they walk on the otherside? We found the solution, we hand crafted
              a pair of legs for every ape! Our goal is to have each ape owner
              have it’s matching pair of legs.
            </p>
          </div>
          <Link
            className="mint"
            to="Mint"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mint the other half
          </Link>
        </div>
      </div>
    </StyledHome>
  );
}
