import styled from "styled-components";
import background from "../../Assets/FAQ/Obj.svg";

export const StyledFAQ = styled.section`
  padding: 100px 5vw;
  padding-bottom: 100px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: no-repeat url(${background});
  background-color: #1a1a1a;
  background-position: center;
  background-size: cover;
  .wrapper {
    width: 100%;
    max-width: 1230px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
      @media (max-width: 768px) {
        font-size: 55px;
        line-height: 55px;
      }
      @media (max-width: 534px) {
        font-size: 30px;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0;
      li {
        background: #f0d52d;

        box-sizing: border-box;
        border-radius: 24px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 900;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: 0.08em;
        color: #ffffff;
        padding: 15px 25px;

        height: 60px;
        overflow: hidden;
        transition: all 0.3s 0.2s linear;

        cursor: pointer;
        .head {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          h2 {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 900;
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.08em;
            text-transform: uppercase;

            color: #ffffff;
            @media (max-width: 768px) {
              font-size: 18px;
              line-height: 22px;
            }
          }
          img {
            width: 24px;
            height: 12px;
          }
          .upArrow {
            transform: rotate(-180deg);
            transition: all 0.5s linear;
          }
          .downArrow {
            transform: rotate(0deg);
            transition: all 0.5s 0.3s linear;
          }
        }

        p {
          margin-top: 20px;
          padding: 0 35px;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          text-align: justify;
          opacity: 0;

          color: #ffffff;
          transition: all 0.5s ease;
          a {
            color: yellow;
            text-decoration: none;
          }
          @media (max-width: 768px) {
            font-size: 16px;
            line-height: 20px;
            padding: 15px 0px;
          }
        }
        @media (max-width: 768px) {
          height: 50px;
        }
      }
      .first {
        @media (max-width: 437px) {
          height: 70px;
        }
      }
      .second {
        @media (max-width: 485px) {
          height: 70px;
        }
      }
      .third {
        @media (max-width: 542px) {
          height: 70px;
        }
      }
      .fourth {
        @media (max-width: 566px) {
          height: 70px;
        }
        @media (max-width: 370px) {
          height: 90px;
        }
      }
      .fifth {
        @media (max-width: 1035px) {
          height: 90px;
        }
        @media (max-width: 768px) {
          height: 70px;
        }
        @media (max-width: 424px) {
          height: 90px;
        }
      }
      .sixth {
        @media (max-width: 1035px) {
          height: 90px;
        }
        @media (max-width: 768px) {
          height: 70px;
        }
        @media (max-width: 447px) {
          height: 90px;
        }
        @media (max-width: 366px) {
          height: 110px;
        }
      }
      .opened {
        height: 180px;
        transition: all 0.5s ease;
        cursor: default;

        p {
          opacity: 1;
          transition: all 0.5s 0.1s ease;
        }
      }
      .opened.first {
        @media (max-width: 1204px) {
          height: 204px;
        }
        @media (max-width: 1010px) {
          height: 228px;
        }
        @media (max-width: 886px) {
          height: 252px;
        }
        @media (max-width: 775px) {
          height: 276px;
        }
        @media (max-width: 768px) {
          height: 210px;
        }
        @media (max-width: 682px) {
          height: 230px;
        }
        @media (max-width: 589px) {
          height: 250px;
        }
        @media (max-width: 536px) {
          height: 270px;
        }
        @media (max-width: 477px) {
          height: 290px;
        }
        @media (max-width: 444px) {
          height: 310px;
        }
        @media (max-width: 437px) {
          height: 332px;
        }
        @media (max-width: 414px) {
          height: 352px;
        }
        @media (max-width: 377px) {
          height: 372px;
        }
        @media (max-width: 363px) {
          height: 392px;
        }
      }
      .opened.second {
        height: 108px;
        @media (max-width: 1341px) {
          height: 132px;
        }
        @media (max-width: 779px) {
          height: 156px;
        }
        @media (max-width: 768px) {
          height: 128px;
        }
        @media (max-width: 592px) {
          height: 148px;
        }
        @media (max-width: 485px) {
          height: 172px;
        }
        @media (max-width: 412px) {
          height: 192px;
        }
      }
      .opened.third {
        height: 108px;
        @media (max-width: 542px) {
          height: 124px;
        }
        @media (max-width: 375px) {
          height: 148px;
        }
        @media (max-width: 361px) {
          height: 168px;
        }
      }
      /* .opened.fourth {
        height: 108px;
        @media (max-width: 803px) {
          height: 124px;
        }
        @media (max-width: 768px) {
          height: 108px;
        }
        @media (max-width: 614px) {
          height: 128px;
        }
        @media (max-width: 566px) {
          height: 152px;
        }
        @media (max-width: 370px) {
          height: 176px;
        }
        @media (max-width: 365px) {
          height: 196px;
        }
      } */
      .opened.fifth {
        height: 180px;
        @media (max-width: 1100px) {
          height: 178px;
        }
        @media (max-width: 1035px) {
          height: 208px;
        }
        @media (max-width: 806px) {
          height: 234px;
        }
        @media (max-width: 768px) {
          height: 194px;
        }
        @media (max-width: 620px) {
          height: 214px;
        }
        @media (max-width: 506px) {
          height: 234px;
        }
        @media (max-width: 425px) {
          height: 264px;
        }
        @media (max-width: 411px) {
          height: 284px;
        }
      }
      .opened.sixth {
        height: 124px;
        @media (max-width: 1035px) {
          height: 158px;
        }
        @media (max-width: 775px) {
          height: 182px;
        }
        @media (max-width: 768px) {
          height: 146px;
        }
        @media (max-width: 590px) {
          height: 166px;
        }
        @media (max-width: 447px) {
          height: 188px;
        }
        @media (max-width: 415px) {
          height: 208px;
        }
        @media (max-width: 366px) {
          height: 232px;
        }
      }
    }
  }
`;
