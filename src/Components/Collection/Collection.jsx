import React from "react";
import styled from "styled-components";
import background from "../../Assets/CollectionBack.svg";
import img1 from "../../Assets/Carousel/1.png";
import img2 from "../../Assets/Carousel/2.png";
import img3 from "../../Assets/Carousel/3.png";
import img4 from "../../Assets/Carousel/4.png";
import img5 from "../../Assets/Carousel/5.png";
import img6 from "../../Assets/Carousel/6.png";
import img7 from "../../Assets/Carousel/7.png";
import img8 from "../../Assets/Carousel/8.png";
import img9 from "../../Assets/Carousel/9.png";
import img10 from "../../Assets/Carousel/10.png";
import img11 from "../../Assets/Carousel/11.png";
import img12 from "../../Assets/Carousel/12.png";
import img13 from "../../Assets/Carousel/13.png";
import img14 from "../../Assets/Carousel/14.png";
import img15 from "../../Assets/Carousel/15.png";
import img16 from "../../Assets/Carousel/16.png";
import { NavLink } from "react-router-dom";

const StyledSection = styled.div`
  padding-bottom: 100px;
  width: 100%;
  background: no-repeat url(${background});
  background-color: #1a1a1a;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h1 {
    padding: 0 1vw;
    margin-top: 100px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 85px;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: #ffffff;
  }
  .carousel {
    margin-top: 50px;
    margin-bottom: 30px;
    position: relative;
    height: 236px;
    width: 100%;
    overflow: hidden;
    .carouselInner {
      position: absolute;
      width: 4576px; //pictures * (pictures wigth + gap)
      display: flex;
      flex-direction: row;
      animation-name: move_left;
      animation-duration: 60s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      gap: 50px;
      img {
        width: 236px;
        height: 236px;
        border-radius: 55px;
      }
    }
  }
  h2 {
    margin-bottom: 30px;
    max-width: 691px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: #ffffff;
  }
  .mint {
    text-align: center;
    display: flex;
    flex-direction: row;
    border: none;
    min-width: 377px;
    height: 66px;
    background: #f0d52d;
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

    color: #202020;

    margin-bottom: 10px;
  }
  @keyframes move_left {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(-100%);
    }
  }
  @media (max-width: 768px) {
    h1 {
      margin-top: 100px;
      font-size: 55px;
    }
    h2 {
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 25px;
    }
    .carousel {
      margin-top: 40px;
      height: 167px;
      .carouselInner {
        width: 2992px; //pictures * (pictures wigth + gap)
        gap: 20px;
        img {
          width: 167px;
          height: 167px;
          border-radius: 30px;
        }
      }
    }
    .mint {
      margin-top: 20px;
      text-align: center;
      max-width: 100%;
      height: 60px;
      font-size: 30px;
      line-height: 29px;
    }
  }
  @media (max-width: 534px) {
    h1 {
      margin-top: 100px;
      font-size: 30px;
    }
    h2 {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 20px;
    }

    .carousel {
      margin-top: 20px;
      height: 137px;
      .carouselInner {
        width: 2512px; //pictures * (pictures wigth + gap)
        gap: 20px;
        img {
          width: 137px;
          height: 137px;
          border-radius: 35px;
        }
      }
    }
    .mint {
      text-align: center;
      max-width: 100%;

      max-width: 100%;
      height: 66px;
      font-size: 24px;
      line-height: 29px;
    }
  }
  @media (max-width: 360px) {
    h1 {
      margin-top: 100px;
      font-size: 30px;
    }
    .carousel {
      margin-top: 20px;
      height: 107px;
      .carouselInner {
        width: 2140px; //pictures * (pictures wigth + gap)
        gap: 20px;
        img {
          width: 107px;
          height: 107px;
          border-radius: 30px;
        }
      }
    }
    h2 {
      max-width: 320px;
      font-size: 15px;
      line-height: 20px;
      margin-bottom: 15px;
    }
    .mint {
      min-width: 320px;
      height: 50px;
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
export default function Collection() {
  return (
    <StyledSection id="Section2">
      <h1>Collection</h1>
      <div className="carousel">
        <div className="carouselInner">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
        </div>
      </div>
      <h2>Find a match for your NFT or try different combinations!</h2>
      <NavLink className="mint" to="/preview">
        Preview
      </NavLink>
    </StyledSection>
  );
}
