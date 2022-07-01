import styled from "styled-components";
import Check from "../../Components/Check/Check";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import backgr from "../../Assets/Check/back.svg";
import { NavLink } from "react-router-dom";

export default function Comics() {
  return (
    <StyledCompare>
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
    </StyledCompare>
  );
}
const StyledCompare = styled.div`
  padding-top: 30px;
  min-height: 100vh;
  background-image: url(${backgr});
  background-color: #1a1a1a;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledHeader = styled.div`
  padding: 0 24px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  .home {
    display: flex;
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    .homeButtn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 141px;
      height: 50px;

      background: #f0d52d;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15),
        inset 0px 2px 6px 1px rgba(255, 255, 255, 0.2);
      border-radius: 14px;
      .link {
        text-decoration: none;
        font-family: Montserrat Alternates;
        font-style: normal;
        font-weight: 800;
        font-size: 28px;
        line-height: 34px;
        text-transform: capitalize;

        color: #ffffff;

        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      }
    }
  }
  .header {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    flex: 2;
  }
  .spacer {
    width: 100%;
    flex: 1;
  }
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;
