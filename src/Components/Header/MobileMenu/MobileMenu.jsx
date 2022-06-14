import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import twitter from "../../../Assets/twitter.png";
import discord from "../../../Assets/discord.png";
import opensea from "../../../Assets/opensea.png";

const StyledMobileMenu = styled.div`
  padding: 75px;
  top: 0px;
  left: 0px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000000a7;
  backdrop-filter: blur(15px);
  z-index: 5;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.5s ease;
  .block {
    height: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    .link {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;

      color: #ffffff;
    }
    .active {
      color: #60c77c;
      pointer-events: none;
    }
  }
  .bot {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 50px;
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
        width: 55px;
        height: 55px;
      }
    }

    .link:hover {
      background: white;
    }
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export default function MobileMenu({ isOpened, delateSetOpen }) {
  return (
    <StyledMobileMenu className={!isOpened ? "closed" : ""}>
      <div className="block">
        <Link
          onClick={() => delateSetOpen()}
          className="link"
          activeClass="active"
          to="Section1"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
        <Link
          onClick={() => delateSetOpen()}
          className="link"
          activeClass="active"
          to="Section2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Collection
        </Link>
        <Link
          onClick={() => delateSetOpen()}
          className="link"
          activeClass="active"
          to="Section3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About Us
        </Link>
        <Link
          onClick={() => delateSetOpen()}
          className="link"
          activeClass="active"
          to="Section4"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Roadmap
        </Link>

        <Link
          onClick={() => delateSetOpen()}
          className="link"
          activeClass="active"
          to="Section6"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Team
        </Link>
      </div>
      <div className="bot">
        <div className="link">
          <img src={twitter} alt="" />
        </div>
        <a className="link" href="/" target="_blank" rel="noreferrer noopener">
          <img src={discord} alt="" />
        </a>
        <a
          className="link"
          href="https://opensea.io/collection/boredapeslegsclub"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={opensea} alt="" />
        </a>
      </div>
    </StyledMobileMenu>
  );
}
