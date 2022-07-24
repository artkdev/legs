import styled from "styled-components";

export const StyledCheck = styled.div`
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
    .topInputMobileBlock {
      margin-right: 35px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 10px;

      input {
        min-width: 147px;
        height: 44px;
        background: #ffffff;
        border: 2px solid #ff6b00;
        border-radius: 10px;
        text-align: center;

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
      .inc,
      .decr {
        width: 100%;
        display: none;
        justify-content: center;
        align-items: center;
      }
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
  .botInput {
    margin-bottom: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    .botInputMobileBlock {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
      margin-right: 35px;
      .inc,
      .decr {
        display: none;
      }
      input {
        min-width: 147px;
        height: 44px;
        background: #ffffff;
        border: 2px solid #1900ff;
        border-radius: 10px;
        text-align: center;

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
        animation: flash2 5s infinite ease;
      }
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
  .botInputMobile {
    margin-bottom: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    .botInputMobileBlock {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
      .inc,
      .decr {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      input {
        min-width: 147px;
        height: 44px;
        background: #ffffff;
        border: 2px solid #1900ff;
        border-radius: 10px;
        text-align: center;

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
        animation: flash2 5s infinite ease;
      }
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
  .botInputMobile {
    display: none;
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
  @keyframes flash2 {
    50% {
      box-shadow: 0 0 10px #1900ff, inset 0 0 5px #1900ff;
    }
  }
  @media (max-width: 1359px) {
    .top,
    .botInput,
    .botInputMobile {
      margin-top: 40px;
      margin-bottom: 30px;
      input {
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
    .top,
    .botInput,
    .botInputMobile {
      margin-top: 30px;
      margin-bottom: 14px;
      input {
        font-size: 20px;
        line-height: 24px;
      }
      p {
        font-size: 16px;
        line-height: 22px;
      }
    }
    .top {
      .topInputMobileBlock {
        .inc,
        .decr {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .botInput {
      .botInputMobileBlock {
        .inc,
        .decr {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
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
    .top,
    .botInput,
    .botInputMobile {
      margin-top: 25px;
      margin-bottom: 30px;
      flex-direction: column;
      gap: 15px;
      input {
        width: 115px;
        height: 36px;
        font-size: 18px;
        line-height: 24px;

        margin-right: 0;
      }
      p {
        order: 1;
        font-size: 14px;
        line-height: 22px;
      }
    }
    .top {
      .topInputMobileBlock {
        margin: 0;
      }
    }
    .botInput {
      .botInputMobileBlock {
        margin-right: 0;
      }
    }
    .botInputMobile {
      input {
        order: unset;
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
    .top,
    .botInput,
    .botInputMobile {
      margin-top: 20px;
      margin-bottom: 20px;
      input {
      }
      p {
        font-size: 12px;
        line-height: 22px;
      }
    }

    .botInput {
      display: none;
    }
    .botInputMobile {
      display: flex;
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

export const StyledHeader = styled.div`
  margin-top: 30px;
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

        color: #202020;

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
