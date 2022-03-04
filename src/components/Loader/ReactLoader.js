import { TailSpin } from "react-loader-spinner";
import styled from "styled-components/macro";

export default function ReactLoader() {
  return (
    <Wrapper>
      <TailSpin type="TailSpin" color="#00000059" height={70} width={70} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
