import { Item } from "rc-menu";
import styled from "styled-components";
import { ICategory } from "../models/category";

const Container = styled.div`
  flex: 1;
  margin: 2px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CategoryItem: React.FC<ICategory> = ({ data }) => {
  return (
    <Container>
      <Image src={data.img} />
      <Info>
        <Title>{data.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};
