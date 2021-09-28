import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  z-index: 999;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Center = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.li`
  list-style: none;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;

const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

export const Topbar = () => {
  return (
    <Container>
      <Left>
        <i
          className="fab fa-facebook"
          style={{ marginLeft: "20px", cursor: "pointer" }}
        ></i>
        <i
          className="fab fa-twitter-square"
          style={{ marginLeft: "20px", cursor: "pointer" }}
        ></i>
        <i
          className="fab fa-instagram-square"
          style={{ marginLeft: "20px", cursor: "pointer" }}
        ></i>
      </Left>
      <Center>
        <Menu>
          <MenuItem>HOME</MenuItem>
          <MenuItem>ABOUT</MenuItem>
          <MenuItem>CONTACT</MenuItem>
          <MenuItem>LOGOUT</MenuItem>
        </Menu>
      </Center>
      <Right>
        <AvatarImg src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <i
          className="fas fa-search"
          style={{ fontSize: "18px", color: "#666", cursor: "pointer" }}
        />
      </Right>
    </Container>
  );
};
