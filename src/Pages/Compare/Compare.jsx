import styled from "styled-components";
import Check from "../../Components/Check/Check";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import backgr from "../../Assets/Check/back.svg";

export default function Compare() {
  return (
    <StyledCompare>
      <Header />
      <Check />
      <Footer />
    </StyledCompare>
  );
}
const StyledCompare = styled.div`
  background-image: url(${backgr});
  background-color: #1a1a1a;
  background-position: center;
  background-repeat: no-repeat;
`;
