import styled from "styled-components";

const TestStyled = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Test = () => <TestStyled>Styled UI-Component</TestStyled>;

export default Test;
