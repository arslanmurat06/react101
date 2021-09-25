import styled from "styled-components";
import { Search } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
  background-color: black;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  alig-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: white;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  align-items: center;
  justify-content: center;
  color: white;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "black" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BAZAAR.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
