import styled from "styled-components";
import background from "../../Assets/Roadmap/Roadmap.svg";
export const StyledSection = styled.div`
  padding: 100px 5vw;
  width: 100%;
  display: flex;
  justify-content: center;
  background: no-repeat url(${background});
  background-color: #1a1a1a;
  background-position: center;
  background-size: cover;
  .wrapper {
    max-width: 1230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 70px;
      line-height: 85px;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      color: #ffffff;
      @media (max-width: 768px) {
        font-size: 55px;
        line-height: 55px;
      }
    }
    .content {
      margin-top: 50px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1vh;
      .block {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 1vw;
        position: relative;
        .check {
          width: 25px;
          height: 25px;
          position: absolute;
          right: 0px;
          top: 5px;
        }
        .left {
          width: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 7px;
          .top {
            background: #f0d52d;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;

            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 40px;
            line-height: 49px;
            /* identical to box height */

            color: #202020;

            width: 75px;
            height: 75px;

            border-radius: 50%;
          }
          .bot {
            width: 1px;
            height: 100%;
            background: #ffffff78;
          }
        }
        .right {
          max-width: 1124px;
          width: 100%;
          padding: 10px 0;

          display: flex;
          flex-direction: column;
          gap: 5px;
          .top {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 25px;
            line-height: 30px;
            text-transform: uppercase;

            color: #ffffff;
          }
          .bot {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;

            color: #ffffff;
            .text-tittle {
              font-weight: bold;
              font-size: 25px;
              line-height: 30px;
              text-transform: uppercase;
            }
            ul {
              li {
                line-height: 40px;
              }
            }
          }
        }
        .underline {
          border-bottom: 1px solid #ffffff78;
        }
      }
    }
  }
  @media (max-width: 534px) {
    padding: 100px 5vw;
    .wrapper {
      max-width: 300px;
      .title {
        font-size: 30px;
      }
      .content {
        margin-top: 30px;
        gap: 1vh;
        .block {
          gap: 1vw;
          .left {
            width: 60px;
            gap: 1vh;
            .top {
              font-size: 20px;
              line-height: 49px;
              width: 45px;
              height: 45px;
            }
            .bot {
              width: 1px;
              align-self: center;
            }
          }
          .right {
            max-width: 300px;
            padding: 10px 0;
            gap: 1vh;

            .top {
              font-size: 15px;
              line-height: 18px;
            }
            .bot {
              font-size: 10px;
              line-height: 15px;

              .text-tittle {
                font-size: 15px;
                line-height: 20px;
              }

              ul {
                li {
                  line-height: 20px;
                }
              }
            }
          }
          .underline {
            border-bottom: 1px solid #ffffff78;
          }
        }
      }
    }
  }
  @media (max-width: 360px) {
    padding: 100px 5vw;

    .wrapper {
      max-width: 300px;
      .title {
        font-size: 30px;
      }
      .content {
        margin-top: 30px;
        gap: 0px;
        .block {
          gap: 1vw;
          .left {
            width: 60px;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1px;
            .top {
              font-size: 20px;
              line-height: 49px;
              width: 45px;
              height: 45px;
            }
            .bot {
              width: 1px;
              align-self: center;
            }
          }
          .right {
            max-width: 300px;
            padding: 10px 0;
            gap: 5px;

            .top {
              font-size: 15px;
              line-height: 20px;
            }
            .bot {
              font-size: 10px;
              line-height: 15px;

              .text-tittle {
                padding-top: 15px;
                font-size: 15px;
                line-height: 30px;
              }

              ul {
                li {
                  line-height: 20px;
                }
              }
            }
          }
          .underline {
            border-bottom: 1px solid #ffffff78;
          }
        }
      }
    }
  }
`;
