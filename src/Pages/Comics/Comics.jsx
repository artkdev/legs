import styled from "styled-components";
import { NavLink } from "react-router-dom";

import prev1 from "../../Assets/Comics/1_1.png";
import prev2 from "../../Assets/Comics/1_5.png";

import img1 from "../../Assets/Comics/1_1.png";
import img2 from "../../Assets/Comics/1_2.png";
import img3 from "../../Assets/Comics/1_3.png";
import img4 from "../../Assets/Comics/1_4.png";
import img5 from "../../Assets/Comics/1_5.png";

import back from "../../Assets/Comics/akar-icons_arrow-up.png";
import prev from "../../Assets/Comics/prev.png";
import next from "../../Assets/Comics/next.png";

import background from "../../Assets/Home/Home.svg";

import { useEffect, useState } from "react";

const comics1 = {
  name: "monkey adventure",
  description: "This story is about monkeys and adventures",
  prev: prev1,
  pages: [img1, img2, img3, img4, img5],
};

// const comics2 = {
//   name: "monkey adventure",
//   description: "This story is about monkeys and adventures",
//   prev: prev2,
//   pages: [img5, img4, img3, img2, img1],
// };

const comics = [comics1];

export default function Comics() {
  const [current, setCurrent] = useState(0);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h1>Comics</h1>
        </div>
        <div className="spacer"></div>
      </StyledHeader>
      <div className="content">
        {comics.map((element, index) => (
          <ComicsCard
            key={index}
            prev={element.prev}
            title={element.name}
            description={element.description}
            visibility={visibility}
            setVisibility={setVisibility}
            current={index}
            setCurrent={setCurrent}
          />
        ))}
      </div>
      <View
        cur={current}
        visibility={visibility}
        setVisibility={setVisibility}
      />
    </StyledCompare>
  );
}
const StyledCompare = styled.div`
  padding-top: 30px;
  min-height: 100vh;
  height: fit-content;
  background: no-repeat url(${background});
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 40px 100px;
  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 85px;

    justify-content: center;
  }
`;

const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 40px;
  .home {
    display: flex;
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
    h1 {
      width: 281px;
      height: 73px;

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 900;
      font-size: 60px;
      line-height: 73px;
      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      color: #ffffff;
    }
  }
  .spacer {
    width: 100%;
    flex: 1;
  }
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

const ComicsCard = ({
  prev,
  title,
  description,
  visibility,
  setVisibility,
  current,
  setCurrent,
}) => {
  function HandleClick() {
    setVisibility(!visibility);
    setCurrent(current);
  }
  return (
    <StyledComicsCard onClick={() => HandleClick()}>
      <div className="prev">
        <img src={prev} alt="" />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledComicsCard>
  );
};
const StyledComicsCard = styled.div`
  display: flex;
  flex-basis: 200px;
  flex-direction: column;
  width: 200px;
  cursor: pointer;
  .prev {
    width: 200px;
    height: 280px;

    background: #ffffff;
    margin-bottom: 15px;
    img {
      width: 200px;
      height: 280px;
    }
  }
  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: #ffffff;
    margin-bottom: 5px;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.08em;

    color: #969696;
  }
`;

const View = ({ visibility, setVisibility, cur }) => {
  const [page, setpage] = useState(0);

  const [full, setfull] = useState(false);
  console.log(full);

  function handlePrev() {
    let current = page;

    if (current <= 0) {
      return;
    } else {
      setpage(current - 1);
    }
  }
  function handleNext() {
    let current = page;
    let all = comics[cur].pages.length - 1;

    if (current == all) {
      return;
    } else {
      setpage(current + 1);
    }
  }

  function handleBack() {
    setVisibility(!visibility);
    setpage(0);
  }

  return (
    <StyledView visibility={visibility} full={full}>
      <div className="wrapper">
        <div className="spacer1" />

        <div className="page">
          <div className="back" onClick={() => handleBack()}>
            <img src={back} alt="" />
          </div>

          <div onClick={() => setfull(!full)}>
            <img className="img" src={comics[cur].pages[page]} alt="" />
          </div>

          <div className="controls">
            <div className="prevp" onClick={() => handlePrev()}>
              <img src={prev} alt="" />
            </div>
            <div className="pagination">
              {page + 1} / {comics[cur].pages.length}
            </div>
            <div className="nextp" onClick={() => handleNext()}>
              <img src={next} alt="" />
            </div>
          </div>
        </div>
        <div className="spacer1" />
      </div>
    </StyledView>
  );
};

const StyledView = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(15px);

  display: ${({ visibility }) => (visibility ? `flex` : "none")};
  justify-content: center;
  align-items: center;
  .wrapper {
    overflow: auto;
    width: 200vw;
    height: 100vh;

    padding: 50px 0px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    .page {
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .back {
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-bottom: 15px;
        img {
          min-width: 50px;
          min-height: 50px;
        }
      }
      .img {
        width: ${({ full }) => (full ? `1024px` : "100%")};
        max-height: ${({ full }) => (full ? `` : "80vh")};
        margin-bottom: 15px;
        user-select: all;
        pointer-events: all;
      }
      .controls {
        width: 100%;
        height: fit-content;
        display: flex;

        align-items: center;
        justify-content: center;
        gap: 10px;
        .prevp,
        .nextp {
          cursor: pointer;
          width: 25px;
          height: 25px;
          img {
            width: 25px;
            height: 25px;
          }
        }
        .pagination {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.08em;

          color: #ffffff;
        }
      }
    }
    .spacer1 {
      width: 100px;
      height: 100px;
      min-width: 50px;
      min-height: 50px;
    }
  }
`;
