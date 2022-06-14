import React, { useState } from "react";
import buttn from "../../Assets/list buttn.png";
import { StyledFAQ } from "./styles";

export default function FAQ() {
  const [active, setActive] = useState("first");
  return (
    <StyledFAQ id="Section5">
      <div className="wrapper">
        <h1>FAQ</h1>
        <ul>
          <li
            className={active === "first" ? "opened first" : "first"}
            onClick={() => setActive("first")}
          >
            <div className="head">
              <h2>1. WHAT IS A CRYPTO-APES?</h2>
              <img
                className={active === "first" ? "upArrow" : "downArrow"}
                src={buttn}
                alt=""
              />
            </div>
            <p>
              Crypto-Apes will transfer half of the funds raised to the aid
              funds of Ukraine. Each ape is unique and no two are exactly alike.
              The combination of a Crypto-Apes aesthetics was randomly generated
              from over 200 hand drawn traits. There are 7 unique Crypto-Apes
              that were created by the artist and do not have randomly generated
              traits.
            </p>
          </li>
          <li
            className={active === "second" ? "opened second" : "second"}
            onClick={() => setActive("second")}
          >
            <div className="head">
              <h2>2. HOW DO I PURCHASE AN APE?</h2>
              <img
                className={active === "second" ? "upArrow" : "downArrow"}
                src={buttn}
                alt=""
              />
            </div>
            <p>
              You can purchase a Crypto-apes from our verified collection on the{" "}
              <a href="/#">OpenSea marketplace.</a>
            </p>
          </li>
          <li
            className={active === "third" ? "opened third" : "third"}
            onClick={() => setActive("third")}
          >
            <div className="head">
              <h2>3. HOW MANY CRYPTO-APES EXISTS?</h2>
              <img
                className={active === "third" ? "upArrow" : "downArrow"}
                src={buttn}
                alt=""
              />
            </div>
            <p>There are 10000 Crypto-apes.</p>
          </li>
          <li
            className={active === "fifth" ? "opened fifth" : "fifth"}
            onClick={() => setActive("fifth")}
          >
            <div className="head">
              <h2>4. ARE SOME CRYPTO-APES MORE RARE THAN OTHERS?</h2>
              <img
                className={active === "fifth" ? "upArrow" : "downArrow"}
                src={buttn}
                alt=""
              />
            </div>
            <p>
              Every Crypto-Apes has unique traits/attributes, but some traits
              are more rare than others. <br /> <br />
              Check-out traits rarity at our <a href="/#">Rarity Tool</a> .
            </p>
          </li>
          <li
            className={active === "sixth" ? "opened sixth" : "sixth"}
            onClick={() => setActive("sixth")}
          >
            <div className="head">
              <h2>5. WHAT IS THE CRYPTO-APES TWITTER AND DISCORD?</h2>
              <img
                className={active === "sixth" ? "upArrow" : "downArrow"}
                src={buttn}
                alt=""
              />
            </div>
            <p>
              You can follow our <a href="/#">Twitter</a> and{" "}
              <a href="/#">Discord</a>. We post updates, news, and a variety of
              content there.
            </p>
          </li>
        </ul>
      </div>
    </StyledFAQ>
  );
}
