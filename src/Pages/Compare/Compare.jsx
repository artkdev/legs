import styled from "styled-components";
import Check from "../../Components/Check/Check";
import background from "../../Assets/Home/Home.svg";

export default function Compare() {
  return (
    <StyledCompare>
      <Check />
    </StyledCompare>
  );
}
const StyledCompare = styled.div`
  background: no-repeat url(${background});
  background-position: center;
  background-size: cover;
`;
