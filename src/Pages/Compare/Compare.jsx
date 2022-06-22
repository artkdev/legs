import styled from "styled-components";
import Check from "../../Components/Check/Check";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default function Compare() {
  return (
    <StyledCompare>
      <Header />
      <Check />
      <Footer />
    </StyledCompare>
  );
}
const StyledCompare = styled.div``;
