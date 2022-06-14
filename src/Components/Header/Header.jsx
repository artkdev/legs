import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import logo from "../../Assets/footer logo.jpg";
import MobileHeader from "./MobileHeader/MobileHeader";
import MobileMenu from "./MobileMenu/MobileMenu";

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5vw;
  z-index: 2;

  header {
    width: 100%;
    max-width: 1230px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 1vw;
    .logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      flex-shrink: 0;

      width: 252px;
      height: 60px;

      img {
        width: 55px;
        height: 55px;

        background: #777777;
        border-radius: 15px;
      }
      h1 {
        width: 191px;
        height: 60px;

        font-family: Montserrat Alternates;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;
        color: #ffffff;
      }
    }
    nav {
      flex-wrap: wrap;
      padding: 0 1vw;
      max-width: 782px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: end;
      align-items: center;

      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;

      color: #ffffff;

      gap: 1vw;
      .nav {
        padding-left: 15px;
        padding-top: 5px;
        cursor: pointer;
      }
    }
  }
  .closed {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
  }

  @media (max-width: 768px) {
    height: 75px;
    header {
      display: none;
    }
  }
  @media (max-width: 960px) {
    header {
      nav {
        justify-content: end;
        max-width: 760px;
        .nav {
          font-size: 18px;
        }
      }
    }
  }
`;

export default function Header() {
  const [isOpened, setOpened] = useState(false);

  isOpened
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");

  function delateSetOpen() {
    setTimeout(() => {
      setOpened();
    }, 500);
  }
  return (
    <StyledHeader>
      <header>
        <Link
          className="nav logo"
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
        <nav>
          <Link
            className="nav"
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
            className="nav"
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
            className="nav"
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
            className="nav"
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
            className="nav"
            activeClass="active"
            to="Section6"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Team
          </Link>
        </nav>
      </header>
      <MobileHeader
        setOpened={setOpened}
        isOpened={isOpened}
        delateSetOpen={delateSetOpen}
      />
      <MobileMenu isOpened={isOpened} delateSetOpen={delateSetOpen} />
    </StyledHeader>
  );
}
