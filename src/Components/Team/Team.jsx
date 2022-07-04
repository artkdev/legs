import React from "react";
import styled from "styled-components";
import JIKITA from "../../Assets/team/2.png";
import DARKARKI from "../../Assets/team/3.png";
import GINI from "../../Assets/team/4.png";
import ARTKDEV from "../../Assets/team/5.png";
import img1 from "../../Assets/team/1.png";
import img2 from "../../Assets/team/6.png";
import background from "../../Assets/team/obj.svg";
import link from "../../Assets/team/link.png";
import inst from "../../Assets/team/inst.png";
import site from "../../Assets/team/Group 5.png";

const StyledSection = styled.div`
  padding: 100px 5vw;
  width: 100%;
  min-height: 1000px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: no-repeat url(${background});
  background-color: #1a1a1a;
  background-position: center;
  background-size: cover;
  .wrapper {
    display: flex;
    width: 100%;
    max-width: 1230px;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    margin-bottom: 50px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 85px;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: #ffffff;
  }
  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 528px;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    .card {
      background: #f0d52d;
      width: 252px;
      height: fit-content;

      box-sizing: border-box;
      border-radius: 29px;

      padding: 29px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 1vw;
      img {
        width: 132px;
        height: 132px;
        border-radius: 20px;
      }
      .link {
        display: flex;
        gap: 0.5vw;
        text-decoration: none;
        img {
          width: 24px;
          height: 24px;
        }
      }
      .text {
        height: fit-content;
        h2 {
          font-family: Montserrat;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          text-transform: uppercase;

          color: #ffffff;
        }
        h3 {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;

          color: #ffffff;
        }
        p {
          font-family: Montserrat;
          font-style: normal;
          font-weight: 300;
          font-size: 20px;
          line-height: 24px;

          color: #ffffff;
        }
      }
    }
  }
  @media (max-width: 534px) {
    padding: 100px 5vw;
    .wrapper {
    }
    h1 {
      margin-bottom: 30px;
      font-size: 30px;
      line-height: 85px;
    }
    .container {
      .card {
        width: 340px;
        flex-wrap: wrap;
        padding: 20px;

        img {
          display: none;
        }
        .link {
          img {
            display: flex;
          }
        }
      }
    }
  }

  @media (max-width: 360px) {
    .wrapper {
      max-width: 300px;
    }
    h1 {
      font-size: 30px;
      line-height: 80px;
    }
    .container {
      .card {
        width: 300px;
      }
    }
  }
`;

export default function Team() {
  return (
    <StyledSection id="Section6">
      <div className="wrapper">
        <h1>Team</h1>
        <div className="container">
          <div className="card">
            <img src={JIKITA} alt="" />
            <div className="text">
              <h2>Jita</h2>
            </div>
          </div>
          <div className="card">
            <img src={DARKARKI} alt="" />
            <div className="text">
              <div className="link">
                <h2>ARTARTAS</h2>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img1} alt="" />
            <div className="text">
              <div className="link">
                <h2>Nicko</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={ARTKDEV} alt="" />
            <div className="text">
              <div className="link">
                <h2>Art Kdev</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} alt="" />
            <div className="text">
              <div className="link">
                <h2>Joseph K</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
