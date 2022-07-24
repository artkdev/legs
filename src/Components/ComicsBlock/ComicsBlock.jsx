import React from "react";
import { StyledComixBlock } from "./styles";
import prev from "../../Assets/CimicsBlock/Frame 121.png";
import { NavLink } from "react-router-dom";

export default function ComixBlock() {
  return (
    <StyledComixBlock>
      <div className="wraper">
        <h1 className="title">comics</h1>
        <p className="descr">Check our comics to knew more about BALC NFTs!</p>
        <NavLink className="mint" to="/comics">
          Learn more
        </NavLink>
        <img className="comicsprev" src={prev} alt="" />
      </div>
    </StyledComixBlock>
  );
}
