import styled from "styled-components";
import { setRem, setColor } from "../../Styles";

const Section = styled.section`
  padding: ${setRem(64)} 0;
  background: ${(props) => props.color || setColor.mainWhite};
`;

export default Section;
