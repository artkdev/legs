import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import twitter from "../../Assets/twitter.png";
import discord from "../../Assets/discord.png";
import opensea from "../../Assets/opensea.png";
import logo from "../../Assets/footer logo.jpg";

const StyledFooter = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 30px 5vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: black;
  .bot-text {
    position: absolute;
    font-family: Montserrat Alternates;
    font-style: normal;
    font-size: 15px;
    color: #ffffff;
  }

  .wraper {
    width: 100%;
    max-width: 1230px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;

    gap: 50px;
    flex-wrap: wrap;
    .links {
      width: 250px;
      height: 179.6px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      .top {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;

        color: #ffffff;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .contract {
          text-decoration: none;
          color: #ffffff;
        }
      }

      .bot {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        max-width: 200px;

        gap: 1vw;
        .link {
          color: black;
          border-radius: 50%;
          background: transparent;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          img {
            width: 63.86px;
            height: 63.86px;
          }
        }

        .link:hover {
          background: white;
        }
      }
    }
    .logoBlock {
      border-left: 4px solid #f0d52d;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-basis: 788px;
      padding-left: 70px;

      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        max-width: 788px;
        height: 179.6px;

        gap: 1vw;
        img {
          width: 179.6px;
          height: 179.6px;

          background: #f0d52d;
          border-radius: 45px;
        }
        h1 {
          height: 178.59px;
          font-family: Montserrat Alternates;
          font-style: normal;
          font-weight: bold;
          font-size: 75px;
          line-height: 91px;

          color: #ffffff;
        }
      }
    }
  }
  @media (max-width: 986px) {
    .wraper {
      .logoBlock {
        border-top: 4px solid #f0d52d;
        border-left: 0px;
        padding-top: 60px;
        width: 100%;
        flex-basis: 100%;
        padding-left: 0px;

        .logo {
          gap: 1vw;
          img {
            width: 181px;
            height: 181px;

            background: #777777;
            border-radius: 45px;
          }
          h1 {
            height: 111px;
            font-size: 55px;
            line-height: 54px;
          }
        }
      }
    }
  }
  @media (max-width: 534px) {
    .wraper {
      .logoBlock {
        border-top: 4px solid #1b5e2e;
        border-left: 0px;
        padding-top: 60px;
        width: 100%;
        padding-left: 0px;
        justify-content: center;

        .logo {
          max-width: 360px;
          height: 259.6px;

          gap: 1vw;
          img {
            width: 251px;
            height: 253px;

            background: #777777;
            border-radius: 45px;
          }
          h1 {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 360px) {
    .wraper {
      .logoBlock {
        border-top: 4px solid #1b5e2e;
        border-left: 0px;
        padding-top: 60px;
        width: 100%;
        flex-basis: 360px;
        padding-left: 0px;

        .logo {
          max-width: 360px;
          height: 159.6px;

          gap: 1vw;
          img {
            width: 151px;
            height: 153px;

            background: #777777;
            border-radius: 45px;
          }
          h1 {
            height: 111px;
            font-size: 34px;
            line-height: 54px;
          }
        }
      }
    }
  }
`;

const FooterText = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  .bot-text {
    font-family: Montserrat Alternates;
    font-style: normal;
    font-size: 15px;
    color: #ffffff;
  }
`;

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <div className="wraper">
          <div className="links">
            <div className="top">
              <Link
                className="home"
                activeClass="active"
                to="Section1"
                spy={false}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
              <a
                className="contract"
                href="https://etherscan.io/address/0x3AA36397519Ac7874b17C1DE91d84df8E11f1C87"
                target="_blank"
                rel="noreferrer noopener"
              >
                Smart Contract
              </a>
            </div>
            <div className="bot">
              <a
                className="link"
                href="https://twitter.com/balc2022"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={twitter} alt="" />
              </a>
              <a
                className="link"
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={discord} alt="" />
              </a>
              <a
                className="link"
                href="https://opensea.io/collection/boredapelegsclub"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={opensea} alt="" />
              </a>
            </div>
          </div>
          <div className="logoBlock">
            <Link
              className="logo"
              activeClass="active"
              to="Section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <img src={logo} alt="" />
              <h1>Bored Ape Legs Club</h1>
            </Link>
          </div>
        </div>
      </StyledFooter>
      <FooterText>
        <div className="bot-text">
          &copy; 2022 Bored Apes Legs Club. All rights reserved.
        </div>
      </FooterText>
    </>
  );
}
