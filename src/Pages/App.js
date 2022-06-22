import React from "react";
import styled from "styled-components";
import MainPage from "./MainPage/MainPage";
import { Route, Routes } from "react-router";
import { ScrollToTop } from "../Helpers/wallet/Helpers";
import Mint from "./Mint/Mint";
import "../styles/theme.css";
import Compare from "./Compare/Compare";

const AppWrapper = styled.div`
  background-color: gray;
  min-width: 360px;
  width: 100%;
  height: fit-content;
`;

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route exact path="" element={<MainPage ScrollToTop={ScrollToTop} />} />
        <Route
          exact
          path="/mint"
          element={<Mint ScrollToTop={ScrollToTop} />}
        />
        <Route
          exact
          path="/compare"
          element={<Compare ScrollToTop={ScrollToTop} />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />{" "}
        {/*Redirect to main page if adress is non found*/}
      </Routes>
    </AppWrapper>
  );
}

export default App;
