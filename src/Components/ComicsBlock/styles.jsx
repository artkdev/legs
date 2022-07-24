import styled from "styled-components";

export const StyledComixBlock = styled.section`
  padding: 100px 5vw;
  padding-bottom: 100px;
  width: 100%;
  background-color: #1a1a1a;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .wraper {
    display: flex;
    width: 100%;
    max-width: 1230px;
    flex-direction: column;
    align-items: center;
    .title {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 900;
      font-size: 70px;
      line-height: 85px;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      color: #ffffff;

      margin-bottom: 40px;
    }
    .descr {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 37px;
      /* identical to box height */

      text-align: center;

      color: #ffffff;

      margin-bottom: 20px;
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

      margin-bottom: 40px;
    }
    .comicsprev {
      width: 567px;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    .wraper {
      .title {
        margin-top: 100px;
        font-size: 55px;
        margin-bottom: 30px;
      }
      .descr {
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 25px;
      }
      .mint {
        margin-top: 20px;
        text-align: center;
        max-width: 100%;
        height: 60px;
        font-size: 30px;
        line-height: 29px;
      }
      .comicsprev {
        width: 467px;
      }
    }
  }
  @media (max-width: 534px) {
    .wraper {
      .title {
        margin-top: 100px;
        font-size: 30px;
        margin-bottom: 20px;
      }
      .descr {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 20px;
      }
      .mint {
        text-align: center;
        max-width: 100%;

        max-width: 100%;
        height: 66px;
        font-size: 24px;
        line-height: 29px;
      }
      .comicsprev {
        width: 340px;
      }
    }
  }
  @media (max-width: 360px) {
    .wraper {
      .title {
        margin-top: 100px;
        font-size: 30px;
        margin-bottom: 15px;
      }
      .descr {
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
      .comicsprev {
        width: 260px;
      }
    }
  }
`;
