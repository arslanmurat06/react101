import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAllPosts } from "../api/posts";
import { useAppDispatch, useAppSelector } from "../store";
import { Post } from "./Post";

const Container = styled.div`
  flex: 9;
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
`;

export const Posts = () => {
  const dispatch = useAppDispatch();

  const postSlice = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <Container>
      {postSlice.data?.map((d) => {
        return <Post key={d._id} data={d} />;
      })}
    </Container>
  );
};
