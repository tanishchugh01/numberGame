import { useSelector } from "react-redux";
import styled from "styled-components";

const Result = () => {
  const { a1 } = useSelector((state) => state.value);

  const Message = styled.div`
    text-align: center;
    font-size: 3rem;
  `;
  const Number = styled.div`
    text-align: center;
    font-size: 5rem;
  `;
  const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #a79cce;
    align-items: center;
    height: 100vh;
  `;
  return (
    <Container>
      <Message>Last Value generated:</Message>
      <Number>{a1}</Number>
    </Container>
  );
};

export default Result;
