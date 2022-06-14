import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import logo from "../../../Assets/footer logo.jpg";
import menuIco from "../../../Assets/Icon-menu.png";
import closedIco from "../../../Assets/close.png";

const StyledMobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  z-index: 1000;

  .menuIco {
    display: flex;
    width: 46px;
    height: 46px;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    border-radius: 15px;
    border: none;
    background-color: transparent;
    img {
      width: 26px;
      height: 26px;
    }
  }
  .nav,
  .logo {
    img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export default function MobileHeader({ setOpened, isOpened, delateSetOpen }) {
  return (
    <StyledMobileHeader>
      <Link
        className="nav logo"
        activeClass="active"
        to="Section1"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => delateSetOpen()}
      >
        <img src={logo} alt="" />
      </Link>
      <button className="menuIco" onClick={() => setOpened(!isOpened)}>
        <img src={isOpened ? closedIco : menuIco} />
      </button>
    </StyledMobileHeader>
  );
}
