import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import top from "../../Assets/Check/top.svg";
import bot from "../../Assets/Check/bot.svg";
import left from "../../Assets/Check/left.png";
import right from "../../Assets/Check/right.png";
import { StyledCheck, StyledHeader } from "./styles";

export default function Check() {
  const BAYCadress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");
  const [url, seturl] = useState();
  const [url2, seturl2] = useState();

  function getAsset(input) {
    setfirst(parseInt(input));
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        // Do not expose your API key in the browser
        "X-API-KEY": "31e0cc50c1284711abc9837ebf5a5ecd",
      },
    };

    if (!url2) {
      fetch(
        `https://api.opensea.io/api/v1/asset/${BAYCadress}/${input}/?include_orders=false`,
        options
      )
        .then((response) => response.json())
        .then((response) => seturl(response.image_url))
        .catch((err) => console.error(err));
      seturl2(
        `https://new.mypinata.cloud/ipfs/QmdK3C4XkeJCCKfF9Gt4WeK2MsBrDMmREint7GyU51RYPJ/${input}.png`
      );
      setsecond(parseInt(input));
    } else {
      fetch(
        `https://api.opensea.io/api/v1/asset/${BAYCadress}/${input}/?include_orders=false`,
        options
      )
        .then((response) => response.json())
        .then((response) => seturl(response.image_url))
        .catch((err) => console.error(err));
    }
  }

  function getAsset2(input) {
    setsecond(parseInt(input));
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        // Do not expose your API key in the browser
        "X-API-KEY": "31e0cc50c1284711abc9837ebf5a5ecd",
      },
    };

    if (input === url2) {
      return;
    } else if (input === "0") {
      return;
    } else if (!url) {
      fetch(
        `https://api.opensea.io/api/v1/asset/${BAYCadress}/${input}/?include_orders=false`,
        options
      )
        .then((response) => response.json())
        .then((response) => seturl(response.image_url))
        .catch((err) => console.error(err));
      seturl2(
        `https://new.mypinata.cloud/ipfs/QmdK3C4XkeJCCKfF9Gt4WeK2MsBrDMmREint7GyU51RYPJ/${input}.png`
      );
      setfirst(parseInt(input));
    } else if (!input) {
      return;
    } else {
      seturl2(
        `https://new.mypinata.cloud/ipfs/QmdK3C4XkeJCCKfF9Gt4WeK2MsBrDMmREint7GyU51RYPJ/${input}.png`
      );
    }
  }

  function handleChangeAsset(input) {
    if (input < 1) {
      setfirst(1);
      return;
    } else if (input > 9999) {
      setfirst(9999);
      return;
    }
    if (!first) {
      getAsset(1);
      return;
    }
    getAsset(input);
  }
  function handleChangeAsset2(input) {
    if (input < 1) {
      setsecond(1);
      return;
    } else if (input > 9999) {
      setsecond(9999);
      return;
    }
    if (!second) {
      getAsset2(1);
      return;
    }
    getAsset2(input);
  }

  return (
    <StyledCheck>
      <StyledHeader>
        <div className="home">
          <div className="homeButtn">
            <NavLink className="link" to="/">
              home
            </NavLink>
          </div>
        </div>
        <div className="header">
          <h1
            style={{
              fontFamily: "Montserrat Alternates",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "40px",
              lineHeight: "49px",
              /* identical to box height */ color: "#FFFFFF",
            }}
          >
            Bored Ape Legs Club
          </h1>
        </div>
        <div className="spacer"></div>
      </StyledHeader>
      <div>
        <div className="top">
          <div className="topInputMobileBlock">
            <div className="decr" onClick={() => handleChangeAsset(first - 1)}>
              <img src={left} alt="" />
            </div>
            <input
              type={"number"}
              onChange={(e) => getAsset(e.target.value)}
              placeholder={"ID"}
              value={first}
              min="1"
              max="9999"
            />
            <div className="inc" onClick={() => handleChangeAsset(first + 1)}>
              <img src={right} alt="" />
            </div>
          </div>
          <p>
            Enter{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://opensea.io/collection/boredapeyachtclub"
            >
              BAYC*
            </a>{" "}
            nft id
          </p>
        </div>
        <div className="bot">
          <div className="left">
            {url ? (
              <div>
                <img src={url} alt="" />
              </div>
            ) : (
              ""
            )}
            {url ? (
              <div>
                <img src={url2} alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
          {url ? (
            <div className="right">
              <div className="bayc">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opensea.io/collection/boredapeyachtclub"
                >
                  Bored Ape Yacht Club *
                </a>
                <img src={top} alt="" />
              </div>
              <div className="center">
                <h1>You can buy legs for your nft to fully assemble it</h1>
                <p>
                  Bayc’s upper torso is already out there, but how the f*$% will
                  they walk on the otherside? We found the solution, we hand
                  crafted a pair of legs for every ape! Our goal is to have each
                  ape owner have it’s matching pair of legs.
                </p>
                <NavLink
                  className="mint"
                  to="/Mint"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Mint the other half</h2>
                </NavLink>
              </div>

              <div className="balc">
                <img src={bot} alt="" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opensea.io/collection/boredapelegsclub"
                >
                  Bored Ape Legs Club
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="botInputMobile">
          <div className="botInputMobileBlock">
            <div
              className="decr"
              onClick={() => handleChangeAsset2(second - 1)}
            >
              <img src={left} alt="" />
            </div>
            <input
              type={"number"}
              onChange={(e) => getAsset2(e.target.value)}
              placeholder={"ID"}
              value={second}
              min="1"
              max="9999"
            />
            <div className="inc" onClick={() => handleChangeAsset2(second + 1)}>
              <img src={right} alt="" />
            </div>
          </div>

          <p>
            Enter{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://opensea.io/collection/boredapelegsclub"
            >
              BALC
            </a>{" "}
            nft id to fully assemble it
          </p>
        </div>

        {url ? (
          <div className="center2">
            <h1>You can buy legs for your nft to fully assemble it</h1>
            <p>
              Bayc’s upper torso is already out there, but how the f*$% will
              they walk on the otherside? We found the solution, we hand crafted
              a pair of legs for every ape! Our goal is to have each ape owner
              have it’s matching pair of legs.
            </p>
            <NavLink
              className="mint"
              to="/Mint"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Mint the other half</h2>
            </NavLink>
          </div>
        ) : (
          ""
        )}
        <div className="botInput">
          <div className="botInputMobileBlock">
            <div
              className="decr"
              onClick={() => handleChangeAsset2(second - 1)}
            >
              <img src={left} alt="" />
            </div>
            <input
              type={"number"}
              onChange={(e) => getAsset2(e.target.value)}
              placeholder={"ID"}
              value={second}
              min="1"
              max="9999"
            />
            <div className="inc" onClick={() => handleChangeAsset2(second + 1)}>
              <img src={right} alt="" />
            </div>
          </div>
          <p>
            Enter{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://opensea.io/collection/boredapelegsclub"
            >
              BALC
            </a>{" "}
            nft id to fully assemble it
          </p>
        </div>
      </div>
      <div className="disclaimer">
        *We use{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://opensea.io/collection/boredapeyachtclub"
        >
          Bored Ape Yacht Club
        </a>{" "}
        nft collection for preview only.
      </div>
    </StyledCheck>
  );
}
