import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Root() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.main`
  margin: 0 auto;
  padding: 20px;

  width: 600px;
  min-height: 100vh;

  background-color: beige;
`;

export default Root;
