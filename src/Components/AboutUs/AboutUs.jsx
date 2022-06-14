import React from "react";
import styled from "styled-components";
import Document from "../../Assets/About Us/Document.svg";
import Calendar from "../../Assets/About Us/Calendar.svg";
import Shopping from "../../Assets/About Us/Shopping.svg";
import Warning from "../../Assets/About Us/Warning.svg";
import background from "../../Assets/About Us/obj.svg";
const StyledSection = styled.div`
  padding: 100px 5vw;
  min-height: 1100px;
  width: 100%;
  background: no-repeat url(${background});
  background-color: #1a1a1a;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  .wrapper {
    width: 100%;
    max-width: 1230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    .title {
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
      flex-direction: column;
      gap: 120px;
      .text {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        text-align: justify;

        color: #ffffff;
        text-align: justify;
      }
      .info {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        .block {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background: #f0d52d;
          flex-basis: 400px;
          height: 160px;
          padding: 50px;

          box-sizing: border-box;
          border-radius: 10px;
          img {
            width: 85px;
            height: 85px;
          }
          .text {
            width: 192px;
            h4 {
              font-family: Montserrat;
              font-style: normal;
              font-weight: bold;
              font-size: 25px;
              line-height: 30px;
              text-transform: uppercase;

              color: #ffffff;
            }
            p {
              font-family: Montserrat;
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 24px;

              color: #ffffff;
            }
          }
        }
      }
    }
  }
  @media (max-width: 960px) {
    min-height: 900px;
    .wrapper {
      max-width: 700px;

      .container {
        .info {
          .block {
            flex-basis: 300px;
            height: 105px;
            padding: 20px;

            img {
              width: 65px;
              height: 65px;
            }
            .text {
              width: 150px;
              h4 {
                font-size: 20px;
                line-height: 30px;
              }
              p {
                font-size: 17px;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 100px 5vw;
    min-height: 750px;
    .wrapper {
      max-width: 600px;

      .title {
        font-size: 55px;
        line-height: 55px;
      }
      .container {
        gap: 40px;
        .text {
          font-size: 20px;
        }
        .info {
          gap: 20px;
          .block {
            height: 100px;
            flex-basis: 220px;
            height: 95px;
            padding: 10px;

            img {
              width: 60px;
              height: 60px;
            }
            .text {
              width: 150px;
              h4 {
                font-size: 18px;
                line-height: 20px;
              }
              p {
                font-size: 15px;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 534px) {
    padding: 100px 5vw;
    min-height: 750px;
    .wrapper {
      max-width: 360px;
      gap: 20px;
      .title {
        font-size: 30px;
        line-height: 60px;
      }
      .container {
        gap: 40px;
        .text {
          font-size: 15px;
        }
        .info {
          gap: 20px;
          .block {
            height: 100px;
            flex-basis: 150px;
            height: 65px;
            padding: 10px;

            img {
              width: 35px;
              height: 35px;
            }
            .text {
              width: 80px;
              h4 {
                font-size: 12px;
                line-height: 15px;
              }
              p {
                font-size: 11px;
                line-height: 15px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 360px) {
    padding: 100px 5vw;
    min-height: 750px;
    .wrapper {
      max-width: 360px;
      gap: 20px;
      .title {
        font-size: 30px;
        line-height: 60px;
      }
      .container {
        gap: 40px;
        .text {
          font-size: 15px;
        }
        .info {
          gap: 20px;
          .block {
            height: 100px;
            flex-basis: 150px;
            height: 65px;
            padding: 10px;

            img {
              width: 35px;
              height: 35px;
            }
            .text {
              width: 80px;
              h4 {
                font-size: 12px;
                line-height: 15px;
              }
              p {
                font-size: 11px;
                line-height: 15px;
              }
            }
          }
        }
      }
    }
  }
`;

export default function AboutUs() {
  return (
    <StyledSection id="Section3">
      <div className="wrapper">
        <div className="title">About us</div>
        <div className="container">
          <div className="text">
            Each NFT is unique and no two are exactly alike. The combination of
            Bored Apes Legs Club NFTs aesthetics was randomly generated from
            over 200 hand drawn traits.
            <br />
            <br />
            There are 7 unique Bored Apes Legs Club NFTs that were created by
            the artist and do not have randomly generated traits.
          </div>
          <div className="info">
            <div className="block">
              <img
                src={Document}
                alt="https://polygonscan.com/address/0x17D7C9f83254176618ca90D99dB2E6f5209b062B"
              />
              <div className="text">
                <h4>Contract</h4>
                <a href="https://etherscan.io/address/0x26162ec22bc9640e788d1da064c604fc08077fae">
                  <p>View</p>
                </a>
              </div>
            </div>
            <div className="block">
              <img src={Calendar} alt="" />
              <div className="text">
                <h4>Launch Date</h4>
                <p>June 14</p>
              </div>
            </div>
            <div className="block">
              <img src={Shopping} alt="" />
              <div className="text">
                <h4>Price</h4>
                <p>0.1 ETH</p>
              </div>
            </div>
            <div className="block">
              <img src={Warning} alt="" />
              <div className="text">
                <h4>Buyers Limit</h4>
                <p>20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
