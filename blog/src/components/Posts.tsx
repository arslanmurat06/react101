import styled from "styled-components";
import { Post } from "./Post";

const Container = styled.div`
  flex: 9;
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
`;

export const Posts = () => {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};
