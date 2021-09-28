import styled from "styled-components";

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

const Date = styled.span`
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

export const Post = () => {
  return (
    <Container>
      <Image src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      <InfoContainer>
        <Info>
          <Cats>
            <CatTitle>Music</CatTitle>
            <CatTitle>Life</CatTitle>
          </Cats>
          <Title>How do you manage to be successfull?</Title>
          <hr />
          <Date>1 hour ago</Date>
        </Info>
      </InfoContainer>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting,
      </Description>
    </Container>
  );
};
