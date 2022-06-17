import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../../Assets/Home/obj.svg";
import preview from "../../Assets/Home/preview.jpg";

const StyledSection = styled.div`
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
  .container {
    width: 100%;
    max-width: 1230px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 50px;
    .top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;

      gap: 20px;
      .leftBlock {
        width: 527px;
        height: 527px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        flex-shrink: 0;
        .prev {
          position: relative;
          left: 10px;
          top: 20px;
          width: 375px;
          height: 375px;
          border-radius: 50%;
        }
      }
      .rightBlock {
        min-height: 320px;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        flex-direction: column;
        flex-basis: 422px;
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
    }
    .bot {
      width: 100%;
      min-height: 102px;

      display: flex;
      flex-direction: row;

      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      .infoContainer {
        flex-basis: 269px;
        width: 269px;
        height: 102px;
        background: #2e8546;
        border-radius: 10px;

        padding: 16px 24px;
        .title {
          white-space: nowrap;
          font-family: Montserrat;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;

          color: #ffffff;
        }
        .data {
          margin-top: 9px;
          padding-left: 15px;
          font-family: Montserrat;
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          line-height: 37px;

          color: #ffffff;

          border-left: 3px solid #ffffff;

          display: flex;
          flex-direction: row;
          align-items: flex-end;
          .amount {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 37px;
            /* identical to box height */

            color: #ffffff;
          }
          .currency {
            margin-left: 5px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 27px;
            /* identical to box height */

            text-transform: uppercase;

            color: #ffffff;
          }
        }
      }
    }
  }

  @media (max-width: 1262px) {
    .container {
      .bot {
        max-width: 800px;
      }
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
      .top {
        .leftBlock {
          width: 400px;
          height: 400px;
          .prev {
            width: 275px;
            height: 275px;
          }
          .bordr {
            width: 382px;
            height: 320px;
          }
        }
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
      .bot {
        min-height: 102px;
        gap: 20px 30px;
        .infoContainer {
          flex-basis: 220px;
          width: 220px;
          height: 80px;

          padding: 10px 25px;
          .title {
            font-size: 20px;
            line-height: 24px;
          }
          .data {
            font-size: 20px;
            line-height: 28px;

            .amount {
              font-size: 18px;
              line-height: 18px;
            }
            .currency {
              margin-left: 5px;
              font-size: 11px;
              line-height: 13px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 534px) {
    .container {
      max-width: 450px;
      gap: 50px;
      .top {
        .leftBlock {
          width: 300px;
          height: 300px;
          .prev {
            width: 215px;
            height: 215px;
          }
          .bordr {
            width: 302px;
            height: 260px;
          }
        }
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
      .bot {
        .infoContainer {
          flex-basis: 145px;
          width: 145px;
          height: 80px;

          padding: 15px 15px;
          .title {
            font-size: 15px;
            line-height: 19px;
          }
          .data {
            padding-left: 5px;
            font-size: 20px;
            line-height: 25px;
          }
        }
      }
    }
  }
  @media (max-width: 360px) {
    .container {
      max-width: 300px;
      .top {
        .leftBlock {
          width: 300px;
          height: 300px;
          .prev {
            left: 10px;
            top: 20px;
            width: 215px;
            height: 215px;
          }
          .bordr {
            width: 302px;
            height: 260px;
          }
        }
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
      .bot {
        min-height: 102px;
        gap: 20px 30px;
        .infoContainer {
          flex-basis: 130px;
          width: 130px;
          height: 69px;

          padding: 10px 10px;
          .title {
            font-size: 13px;
            line-height: 16px;
          }
          .data {
            padding-left: 5px;
            font-size: 16px;
            line-height: 22px;

            border-left: 2px solid #ffffff;

            .amount {
              font-size: 16px;
              line-height: 22px;
            }
            .currency {
              margin-left: 5px;
              font-size: 11px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <StyledSection id="Section1">
      <div className="container">
        <div className="top">
          <div className="leftBlock">
            <img className="prev" src={preview} alt="" />
          </div>
          <div className="rightBlock">
            <div className="textBlock">
              <h2>Bored Ape Legs Club</h2>
              <p>
                Bayc’s upper torso is already out there, but how the f*$% will
                they walk on the otherside? We found the solution, we hand
                crafted a pair of legs for every ape! Our goal is to have each
                ape owner have it’s matching pair of legs.
              </p>
            </div>
            {/* <Link
              className="mint"
              to="Mint"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mint the other half
            </Link> */}
            <div
              className="mint"
              to="Mint"
              target="_blank"
              rel="noopener noreferrer"
            >
              Free Mint coming soon
            </div>
          </div>
        </div>
        {/* <div className='bot'>
					<div className='infoContainer'>
						<div className='title'>Items</div>
						<div className='data'>8,888</div>
					</div>
					<div className='infoContainer'>
						<div className='title'>Owners</div>
						<div className='data'>4,465</div>
					</div>
					<div className='infoContainer'>
						<div className='title'>Floor</div>
						<div className='data'>
							<div className='amount'>1.089</div>
							<div className='currency'>eth</div>
						</div>
					</div>
					<div className='infoContainer'>
						<div className='title'>Volume traded</div>
						<div className='data'>
							<div className='amount'>46,882</div>
							<div className='currency'>eth</div>
						</div>
					</div>
				</div> */}
      </div>
    </StyledSection>
  );
}
