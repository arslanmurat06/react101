import styled from "styled-components";
import { categories } from "../data/category-items";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((c) => (
        <CategoryItem data={c} />
      ))}
    </Container>
  );
};
