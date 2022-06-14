import React from "react";
import styled from "styled-components";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Collection from "../../Components/Collection/Collection";
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MobileMenu from "../../Components/Header/MobileMenu/MobileMenu";
import Home from "../../Components/Home/Home";
import Roadmap from "../../Components/Roadmap/Roadmap";
import SidePannel from "../../Components/SidePannel/SidePannel";
import Team from "../../Components/Team/Team";

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MainPage() {
  return (
    <StyledMainPage>
      <Header />
      <SidePannel />
      <Home />
      <Collection />
      <AboutUs />
      <Roadmap />

      <Team />
      <Footer />
    </StyledMainPage>
  );
}
