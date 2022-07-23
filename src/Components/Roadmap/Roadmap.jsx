import React from "react";

import check from "../../Assets/Roadmap/bi_check-circle-fill.png";
import { StyledSection } from "./styles";

export default function Roadmap() {
  return (
    <StyledSection id="Section4">
      <div className="wrapper">
        <div className="title">Roadmap</div>
        <div className="content">
          <div className="block">
            <img className="check" src={check} alt="" />
            <div className="left">
              <div className="top">1</div>
              <div className="bot"></div>
            </div>
            <div className="right underline">
              <div className="top">June 19</div>
              <div className="bot">
                <div className="text-tittle">The first step</div>
                2500 of 10000 Bored Apes Legs Club NFTs will be available for
                mint at 0 ETH and 0.01 ETH after!
              </div>
            </div>
          </div>

          <div className="block">
            <img className="check" src={check} alt="" />
            <div className="left">
              <div className="top">2</div>
              <div className="bot"></div>
            </div>
            <div className="right underline">
              <div className="top">Next step</div>

              <div className="bot">
                <p>Development of social networks</p>
              </div>
            </div>
          </div>
          <div className="block">
            <img className="check" src={check} alt="" />
            <div className="left">
              <div className="top">3</div>
              <div className="bot"></div>
            </div>
            <div className="right underline">
              <div className="top"></div>
              <div className="bot">
                <div className="text-tittle">Mini-comics</div>

                <p>Release of a mini-comics based on BALC</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="left">
              <div className="top">4</div>
              <div className="bot"></div>
            </div>
            <div className="right underline">
              <div className="top"></div>
              <div className="bot">
                <div className="text-tittle">Development of other half</div>
                <p></p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="left">
              <div className="top">5</div>
              <div className="bot"></div>
            </div>
            <div className="right ">
              <div className="top"></div>
              <div className="bot">
                <div className="text-tittle">Update coming soon</div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
