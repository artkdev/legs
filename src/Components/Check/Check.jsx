import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Check() {
  const BAYCadress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
  const [url, seturl] = useState();
  const [url2, seturl2] = useState();

  function getAsset(input) {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        // Do not expose your API key in the browser
        "X-API-KEY": "31e0cc50c1284711abc9837ebf5a5ecd",
      },
    };

    fetch(
      `https://api.opensea.io/api/v1/asset/${BAYCadress}/${input}/?include_orders=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => seturl(response.image_url))
      .catch((err) => console.error(err));
    seturl2(
      `https://new.mypinata.cloud/ipfs/QmdK3C4XkeJCCKfF9Gt4WeK2MsBrDMmREint7GyU51RYPJ/${input}.png`
    );
  }

  return (
    <StyledCheck>
      <input type={"number"} onInput={(e) => getAsset(e.target.value)} />
      <p>Enter BAYC NFT #ID</p>
      <div>
        <img src={url} alt="" />
      </div>
      <div>
        <img src={url2} alt="" />
      </div>
      {url ? (
        <NavLink
          className="mint"
          to="/Mint"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mint the other half
        </NavLink>
      ) : (
        ""
      )}
    </StyledCheck>
  );
}

const StyledCheck = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  img {
    width: 300px;
    height: 300px;
    border-radius: 8px;
    margin: 5px;
  }
  .mint {
    text-align: center;
    display: flex;
    flex-direction: row;
    border: none;
    width: 377px;
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
`;
