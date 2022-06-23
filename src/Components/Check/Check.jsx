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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://opensea.io/collection/boredapeyachtclub"
          >
            BAYC*
          </a>{" "}
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
      {url ? (
        <div className="center2">
          <h1>You can buy legs for your nft to fully assemble it</h1>
          <p>
            Bayc’s upper torso is already out there, but how the f*$% will they
            walk on the otherside? We found the solution, we hand crafted a pair
            of legs for every ape! Our goal is to have each ape owner have it’s
            matching pair of legs.
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

const StyledCheck = styled.div`
  min-height: 100vh;

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
      animation: flash 5s infinite ease;
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
        width: 425.5px;
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
          line-height: 26px;
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

          margin-bottom: 80px;
        }
        .mint {
          text-decoration: none;

          h2 {
            border-radius: 10px;
            padding: 21px 44px;
            background: #ff6b00;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 30px;
            line-height: 37px;
            /* identical to box height */

            text-align: center;
            text-transform: uppercase;

            color: #ffffff;
          }
        }
      }

      .balc {
        width: 425.5px;
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
          line-height: 26px;
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
  .center2 {
    display: none;
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
  @keyframes flash {
    50% {
      box-shadow: 0 0 10px #ff6b00, inset 0 0 5px #ff6b00;
    }
  }
  @media (max-width: 1359px) {
    .top {
      margin-top: 40px;
      margin-bottom: 30px;
      input {
        margin-right: 38px;
      }
      p {
        font-size: 20px;
        line-height: 22px;
      }
    }
    .bot {
      margin-bottom: 30px;
      .left {
        margin-right: 39px;
        img {
          width: 223px;
          height: 224px;
          margin: 9px;
        }
      }
      .right {
        width: 405px;
        gap: 14px;
        .bayc {
          width: 356px;
          a {
            font-size: 20px;
            line-height: 21px;
          }
          img {
          }
        }
        .center {
          h1 {
            font-size: 25px;
            line-height: 30px;
            margin-bottom: 25px;
          }
          p {
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 60px;
          }
          .mint {
            h2 {
              font-size: 25px;
              line-height: 30px;
            }
          }
        }

        .balc {
          width: 356px;
          a {
            font-size: 20px;
            line-height: 21px;
          }
          img {
          }
        }
      }
    }
    .disclaimer {
      font-size: 16px;
      line-height: 22px;
    }
  }
  @media (max-width: 1023px) {
    .top {
      margin-top: 30px;
      margin-bottom: 14px;
      input {
        font-size: 20px;
        line-height: 24px;
        margin-right: 35px;
      }
      p {
        font-size: 16px;
        line-height: 22px;
      }
    }
    .bot {
      margin-bottom: 30px;
      .left {
        margin-right: 38px;
        img {
          width: 153px;
          height: 155px;
          margin: 4px;
        }
      }
      .right {
        width: 405px;
        gap: 14px;
        .bayc {
          width: 268px;
          a {
            font-size: 16px;
            line-height: 17px;
          }
          img {
          }
        }
        .center {
          h1 {
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 20px;
          }
          p {
            font-size: 14px;
            line-height: 17px;
            margin-bottom: 30px;
          }
          .mint {
            h2 {
              padding: 13px 10px;
              font-size: 20px;
              line-height: 24px;
            }
          }
        }

        .balc {
          width: 268px;
          a {
            font-size: 16px;
            line-height: 17px;
          }
        }
        img {
        }
      }
    }
    .disclaimer {
      font-size: 14px;
      line-height: 22px;
    }
  }
  @media (max-width: 767px) {
    .top {
      margin-top: 25px;
      margin-bottom: 30px;
      flex-direction: column;
      gap: 15px;
      input {
        width: 115px;
        height: 36px;
        font-size: 18px;
        line-height: 24px;
        order: 2;
        margin-right: 0;
      }
      p {
        order: 1;
        font-size: 14px;
        line-height: 22px;
      }
    }
    .bot {
      margin-bottom: 25px;
      .left {
        margin-right: 26px;
        img {
          width: 131px;
          height: 132px;
          margin: 5px;
        }
      }
      .right {
        width: 234.09px;
        gap: 7px;
        .bayc {
          width: 203.5px;
          a {
            font-size: 12px;
            line-height: 13px;
          }
          img {
          }
        }
        .center {
          h1 {
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 15px;
          }
          p {
            font-size: 12px;
            line-height: 15px;
            margin-bottom: 20px;
          }
          .mint {
            h2 {
              font-size: 16px;
              line-height: 20px;
              padding: 10px 20px;
            }
          }
        }

        .balc {
          width: 203.5px;
          a {
            font-size: 12px;
            line-height: 13px;
          }
          img {
          }
        }
      }
    }
    .disclaimer {
      font-size: 12px;
      line-height: 22px;
    }
  }
  @media (max-width: 533px) {
    .top {
      margin-top: 20px;
      margin-bottom: 20px;
      input {
      }
      p {
        font-size: 12px;
        line-height: 22px;
      }
    }
    .bot {
      margin-bottom: 30px;
      .left {
        margin-right: 16px;
        img {
          width: 147px;
          height: 148px;
          margin: 5px;
        }
      }
      .right {
        width: 122px;
        height: 300px;
        gap: 14px;
        justify-content: space-around;
        .bayc {
          width: 122px;
          align-items: flex-end;
          a {
            width: 92px;
            height: 27px;
            text-align: center;
            font-size: 12px;
            line-height: 13px;
          }
          img {
          }
        }
        .center {
          display: none;
          h1 {
            font-size: 25px;
            line-height: 30px;
            margin-bottom: 25px;
          }
          p {
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 60px;
          }
          .mint {
            h2 {
              font-size: 25px;
              line-height: 30px;
            }
          }
        }

        .balc {
          width: 122px;
          align-items: flex-end;
          a {
            width: 92px;
            height: 27px;
            text-align: center;
            font-size: 12px;
            line-height: 13px;
          }
          img {
          }
        }
      }
    }
    .center2 {
      display: flex;
      flex-direction: column;
      width: 286px;
      margin-bottom: 20px;
      h1 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;

        color: #ffffff;
        margin-bottom: 15px;
      }
      p {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.03em;

        color: #ffffff;

        margin-bottom: 20px;
      }
      .mint {
        text-decoration: none;

        h2 {
          border-radius: 10px;
          padding: 10px 44px;
          background: #ff6b00;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          /* identical to box height */

          text-align: center;
          text-transform: uppercase;

          color: #ffffff;
        }
      }
    }
    .disclaimer {
      width: 281px;
      font-size: 12px;
      line-height: 22px;
    }
  }
`;
