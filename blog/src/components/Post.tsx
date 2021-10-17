import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CategoryDTO } from "../types/CategoryDTO";
import { IPost } from "../types/PostDTO";

const Container = styled.div`
  width: 300px;
  margin: 0px 25px 40px 25px;
`;

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;
`;

const InfoContainer = styled.div``;

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Cats = styled.div``;

const CatTitle = styled.span`
  font-family: "Varela Round", sans-serif;
  font-size: 11px;
  color: #be9656;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
  line-height: 20px;
`;

const Title = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
`;

const DateComp = styled.span`
  font-family: "Lora", serif;
  font-style: italic;
  fonts-size: 13px;
  color: #999;
  margin-top: 15px;
`;

const Description = styled.p`
  font-family: "Varela Round", sans-serif;
  fonts-size: 13px;
  color: #444;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Post: React.FC<IPost> = ({ data }) => {
  return (
    <Container>
      {data.photo && <Image src={data.photo} />}

      <InfoContainer>
        <Info>
          <Cats>
            {data.categories != null
              ? data.categories.map((c: string) => (
                  <Link to={`/${c}`}>
                    <CatTitle>{c}</CatTitle>
                  </Link>
                ))
              : null}
          </Cats>
          <Link to={`post/${data._id}`}>
            <Title>{data.title}</Title>
          </Link>
          <hr />
          <DateComp>{new Date(data.createdAt).toDateString()}</DateComp>
        </Info>
      </InfoContainer>
      <Description>{data.desc}</Description>
    </Container>
  );
};
