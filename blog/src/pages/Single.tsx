import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { SinglePost } from "../components/SinglePost";

const Container = styled.div`
  display: flex;
`;

export const Single = () => {
  return (
    <Container>
      <SinglePost />
      <Sidebar />
    </Container>
  );
};
