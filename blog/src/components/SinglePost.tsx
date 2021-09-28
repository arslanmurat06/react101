import styled from "styled-components";

const Container = styled.div`
  flex: 9;
  padding: 20px;
  padding-right: 0px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-width: cover;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  font-family: "Lora", serif;
  flex: 10;
`;

const EditPost = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Info = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

const Author = styled.span`
  font-size: 16px;
  color: #b39656;
  font-family: "Varela", sans-serif;
`;

const Date = styled.span``;

const Description = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 25px;
  ::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;

export const SinglePost = () => {
  return (
    <Container>
      <Image src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      <TitleWrapper>
        <Title>Do you want to be successful?</Title>
        <EditPost>
          <li
            style={{ marginLeft: "10px", color: "teal" }}
            className="far fa-edit"
          />
          <li
            style={{ marginLeft: "10px", color: "tomato" }}
            className="far fa-trash-alt"
          />
        </EditPost>
      </TitleWrapper>
      <Info>
        <Author>
          <b>Murat Arslan</b>
        </Author>
        <Date>1 hour ago</Date>
      </Info>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Description>
    </Container>
  );
};
