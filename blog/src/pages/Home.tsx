import styled from "styled-components";
import { Header } from "../components/Header";
import { Posts } from "../components/Posts";
import { Sidebar } from "../components/Sidebar";

const Wrapper = styled.div``;

const PostWrapper = styled.div`
  display: flex;
`;

export const Home = () => {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <PostWrapper>
        <Posts />
        <Sidebar />
      </PostWrapper>
    </>
  );
};
