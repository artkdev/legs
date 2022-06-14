import React from "react";
import styled from "styled-components";
import twitter from "../../Assets/twitter.svg";
import discord from "../../Assets/discord.svg";
import opensea from "../../Assets/opensea.svg";

const StyledSidePannel = styled.div`
  position: fixed;
  top: calc(50vh - 60px); // block hight ajustment
  right: 0px;
  width: 42px;
  height: 112px;
  background: #ffffff;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  gap: 6px;
  .link {
    color: black;
    height: 29px;
    width: 29px;
    background: #ffffff71;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function SidePannel() {
  return (
    <StyledSidePannel>
      <div className="link">
        <img src={twitter} alt="" />
      </div>
      <a className="link" href="" target="_blank" rel="noreferrer noopener">
        <img src={discord} alt="" />
      </a>
      <a
        className="link"
        href="https://opensea.io/collection/boredapeslegsclub"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={opensea} alt="" />
      </a>
    </StyledSidePannel>
  );
}
