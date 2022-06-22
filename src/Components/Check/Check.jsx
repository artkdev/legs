import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import top from "../../Assets/Check/top.svg";
import bot from "../../Assets/Check/bot.svg";

export default function Check() {
  const BAYCadress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
  const [url, seturl] = useState();
  const [url2, seturl2] = useState();

  function getAsset(input) {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        // Do not expose your API key in the browser
        "X-API-KEY": "31e0cc50c1284711abc9837ebf5a5ecd",
      },
    };

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
  }

  return (
    <StyledCheck>
      <div className="top">
        <input
          type={"number"}
          onInput={(e) => getAsset(e.target.value)}
          placeholder={"ID"}
        />
        <p>
          Enter{" "}
          <a href="https://opensea.io/collection/boredapeyachtclub">BAYC*</a>{" "}
          nft id to fully assemble it
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
              <a href="https://opensea.io/collection/boredapeyachtclub">
                Bored Ape Yacht Club *
              </a>
              <img src={top} alt="" />
            </div>
            <div className="center">
              <h1>You can buy legs for your nft to fully assemble it</h1>
              <p>
                Bayc’s upper torso is already out there, but how the f*$% will they walk on the otherside? 
                  We found the solution, we hand crafted a pair of legs for every ape! 
                  Our goal is to have each ape owner have it’s matching pair of legs.
              </p>
              <NavLink
                className="mint"
                to="/Mint"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mint the other half
              </NavLink>
            </div>

            <div className="balc">
              <img src={bot} alt="" />
              <a href="https://opensea.io/collection/boredapelegsclub">
                Bored Apes Legs Club
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="disclaimer">
        *We use{" "}
        <a href="https://opensea.io/collection/boredapeyachtclub">
          Bored Ape Yacht Club
        </a>{" "}
        nft collection for preview only.
      </div>
    </StyledCheck>
  );
}

const StyledCheck = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  .top {
    margin-top: 71px;
    margin-bottom: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 147px;
      height: 44px;
      background: #ffffff;
      border: 2px solid #ff6b00;
      border-radius: 10px;
      text-align: center;
      margin-right: 88px;

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 24px;
      /* identical to box height, or 98% */

      text-align: center;
      letter-spacing: 0.15em;
      text-transform: uppercase;

      color: #151515;
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 800;
      font-size: 25px;
      line-height: 22px;
      /* or 86% */

      text-align: center;
      text-transform: uppercase;

      color: #ffffff;
    }
  }
  .bot {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    .left {
      margin-right: 55px;
      img {
        width: 300px;
        height: 300px;
        border-radius: 10px;
        margin: 11px;
      }
    }
    .right {
      width: 529px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      gap: 39px;
      .bayc {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        a {
          text-decoration: none;
          width: 100%;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 800;
          font-size: 25px;
          line-height: 55px;
          text-align: right;
          /* identical to box height, or 220% */

          text-transform: uppercase;

          color: #ffffff;
        }
        img {
          width: 100%;
        }
      }
      .center {
        margin-left: 50px;
        margin-bottom: 30px;
        h1 {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 37px;
          letter-spacing: -0.005em;
          text-transform: uppercase;

          color: #ffffff;
          margin-bottom: 30px;
        }
        p {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          text-align: justify;
          letter-spacing: -0.03em;

          color: #ffffff;
          margin-bottom: 61px;
        }
        .mint {
          padding: 21px 44px;
          width: 529px;
          height: 80px;

          background: #ff6b00;
          border-radius: 10px;

          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          font-size: 30px;
          line-height: 37px;
          /* identical to box height */

          text-align: center;
          text-transform: uppercase;

          color: #ffffff;

          text-decoration: none;
        }
      }

      .balc {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        a {
          text-decoration: none;
          width: 100%;
          text-align: right;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 800;
          font-size: 25px;
          line-height: 55px;
          /* identical to box height, or 220% */

          text-transform: uppercase;

          color: #ffffff;
        }
        img {
          width: 100%;
        }
      }
    }
  }
  .disclaimer {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* or 122% */

    text-align: center;
    text-transform: uppercase;

    color: #ffffff;

    margin-bottom: 100px;
  }
`;
