import styled from "styled-components";
import background from "../../Assets/Home/obj.svg";
import preview from "../../Assets/Home/preview.jpg";

export const StyledHome = styled.div`
  padding: 100px 5vw;
  min-height: 900px;
  width: 100%;
  background: no-repeat url(${background});
  background-color: #1a1a1a;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  audio {
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
  .container {
    width: 100%;
    max-width: 1230px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .firstBlock {
      width: 100%;
      max-width: 1360px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      animation: fadeIn 1s forwards ease;
      h1 {
        height: 110px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 800;
        font-size: 40px;
        line-height: 55px;
        /* or 138% */

        text-align: center;
        text-transform: uppercase;

        color: #ffffff;
        transition: height 1s 1s, opacity 1s;
      }
      img {
        opacity: 1;
        width: 300px;
        height: 300px;
        border-radius: 10px;
        transition: height 1s 1s, opacity 1s 2s;
      }

      button {
        cursor: pointer;
        width: 300px;
        height: 70px;
        background: #ff6b00;
        border-radius: 10px;

        border: none;

        p {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          font-size: 25px;
          line-height: 30px;
          text-align: center;
          text-transform: uppercase;

          color: #ffffff;
        }
      }
      .hiddenImg {
        opacity: 0;
        height: 0px;
        pointer-events: none;
      }
      .hidden {
        opacity: 0;
        height: 0px;
        pointer-events: none;
        transition: height 1s 1s, opacity 1s;
      }
    }
    .firstAfter {
      max-width: 500px;
      transition: max-width 1s 2.5s;
    }
    .rightBlock {
      overflow: hidden;
      min-height: 320px;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      flex-direction: column;
      flex-basis: 422px;

      opacity: 0;
      width: 100%;
      max-width: 0px;
      flex-basis: 0px;
      .textBlock {
        h2 {
          font-family: Montserrat Alternates;
          font-style: normal;
          font-weight: bold;
          font-size: 40px;
          line-height: 49px;
          /* identical to box height */

          color: #ffffff;
        }
        p {
          margin-top: 20px;
          max-width: 422px;
          height: 149px;

          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          text-align: justify;
          letter-spacing: -0.05em;

          text-align: justify;

          color: #ffffff;
        }
      }
      .mint {
        text-align: center;
        display: flex;
        flex-direction: row;
        border: none;
        min-width: 377px;
        height: 66px;
        background: #f0d52d;
        border: 2px solid white;
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 0.07em;
        text-transform: uppercase;

        color: #ffffff;
      }
    }
    .shown {
      opacity: 1;
      max-width: 500px;
      flex-basis: 422px;
      transition: opacity 1s 2s, max-width 1s 2.5s;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  @media (max-width: 1262px) {
    .container {
    }
  }
  @media (max-width: 960px) {
    .container {
      max-width: 800px;
    }
  }
  @media (max-width: 768px) {
    .container {
      max-width: 600px;

      .rightBlock {
        flex-basis: 500px;
        min-height: 300px;
        .textBlock {
          h2 {
            text-align: center;
            font-size: 40px;
            line-height: 37px;
          }
          p {
            font-size: 20px;
            line-height: 30px;
            max-width: 500px;
          }
        }
        .mint {
          margin: 0 auto;
          max-width: 400px;
          height: 60px;
          font-size: 30px;
          line-height: 29px;
        }
      }
    }
  }
  @media (max-width: 534px) {
    .container {
      max-width: 450px;
      gap: 50px;

      .rightBlock {
        align-items: center;
        min-height: 320px;
        .textBlock {
          max-width: 400px;
          h2 {
            font-size: 40px;
            line-height: 49px;
          }
          p {
            max-width: 400px;
            height: 250px;
            font-size: 20px;
            line-height: 26px;
          }
        }
        .mint {
          margin: 0;
          min-width: 330px;
          height: 66px;
          font-size: 24px;
          line-height: 29px;
        }
      }
    }
  }
  @media (max-width: 360px) {
    .container {
      max-width: 300px;
      .rightBlock {
        flex-basis: 320px;
        min-height: 300px;
        .textBlock {
          h2 {
            text-align: center;
            font-size: 30px;
            line-height: 37px;
          }
          p {
            font-size: 17px;
            line-height: 22px;
            text-align: justify;
            max-width: 320px;
            height: 149px;
          }
        }
        .mint {
          min-width: 320px;
          height: 50px;
          font-size: 24px;
          line-height: 29px;
        }
      }
    }
  }
`;
