import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "./App.css";
import { generateRandom } from "./Redux/value";
import { useNavigate } from "react-router-dom";

function App() {
  // const [a1, seta1] = useState("0");

  // function generateRandom(setVar) {
  //   setVar(Math.floor(Math.random() * 15));
  // }

  const { a1 } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (a1 > 10) {
      setTimeout(() => {
        navigate("/numberGame/result");
      }, 3000);
    }
  }, [a1]);

  const PTag = styled.p`
    font-size: 10rem;
  `;
  const Button = styled.button`
    background-color: blue;
    height: 5rem;
    width: 10rem;
    font-size: 2rem;
    border-radius: 1rem;
    color: white;
    :hover {
      background-color: black;
      // box-shadow:1px 0px 5px 6px black;
    }
    :active {
      color: yellow;
      background-color: grey;
    }
  `;
  const Container = styled.div`
    display: flex;
    // flex-direction: col;
    background-color: #a7fcce;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    algign-items: stretch;
  `;
  const Message = styled.div`
    position: fixed;
    background-color: white;
    text-align: center;
    padding: 3rem;
    height: 50vh;
    width: 50vw;
    z-index: 2;
    border-radius: 2rem;
    display: ${a1 > 10 ? "block" : "none"};
  `;

  return (
    <Container>
      <PTag>{a1}</PTag>
      <Button
        onClick={() => {
          dispatch(generateRandom());
        }}
      >
        Generate
      </Button>
      <Message>
        <h3>Target Achieved</h3>
        <p>You will be redirected soon</p>
      </Message>
    </Container>
  );
}

export default App;
