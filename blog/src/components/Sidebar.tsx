import styled from "styled-components";

const Container = styled.div`
  flex: 3;
  padding-bottom: 30px;
  margin: 20px;
  background-color: #fbfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: 1px solid #a7a4a4;
  border-bottom: 1px solid #a7a4a4;
  font-family: "Varela Round", sans-serif;
  color: #222;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 15px;
  width: 250px;
  height: 250px;
`;

const Text = styled.p`
  padding: 30px;
`;

const ListWrapper = styled.ul``;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 30px;
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
`;

const SocialIconWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sidebar = () => {
  return (
    <Container>
      <Item>
        <Title>ABOUT ME</Title>
        <Image src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" />
        <div>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </div>
      </Item>

      <Item>
        <Title>CATEGORIES</Title>
        <ListWrapper>
          <ListItem>Life</ListItem>
          <ListItem>Music</ListItem>
          <ListItem>Sport</ListItem>
          <ListItem>Style</ListItem>
          <ListItem>Cinema</ListItem>
        </ListWrapper>
      </Item>

      <Item>
        <Title>FOLLOW ME</Title>
        <SocialIconWrapper>
          <i
            className="fab fa-facebook"
            style={{ fontSize: "16px", marginLeft: "10px", cursor: "pointer" }}
          ></i>
          <i
            className="fab fa-twitter-square"
            style={{ fontSize: "16px", marginLeft: "10px", cursor: "pointer" }}
          ></i>
          <i
            className="fab fa-instagram-square"
            style={{ fontSize: "16px", marginLeft: "10px", cursor: "pointer" }}
          ></i>
        </SocialIconWrapper>
      </Item>
    </Container>
  );
};
