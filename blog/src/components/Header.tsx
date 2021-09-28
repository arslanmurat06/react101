import styled from "styled-components";

const Container = styled.div`
  margin-top: 60px;
`;

const SmallTitle = styled.span`
  position: absolute;
  top: 18%;
  font-size: 20px;
`;

const LargeTitle = styled.span`
  position: absolute;
  top: 20%;
  font-size: 100px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", serif;
  color: #444;
`;

const Image = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 80px;
  object-fit: cover;
`;

export const Header = () => {
  return (
    <Container>
      <TitleContainer>
        <SmallTitle>React & Node</SmallTitle>
        <LargeTitle>Blog</LargeTitle>
      </TitleContainer>
      <Image src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </Container>
  );
};
