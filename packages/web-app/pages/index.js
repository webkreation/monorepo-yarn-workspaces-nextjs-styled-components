import styled from "styled-components";
import foo from "foo";
import Title from "components-ui";

const Title2 = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <div>
      <Title2>Monorepo nextjs styled-components test</Title2>
      Imported modules from another workspace:
      <pre>{foo}</pre>
      <Title />
    </div>
  );
}
