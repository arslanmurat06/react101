import { NONAME } from "dns";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../features/userSlice";
import { bigScreen } from "../responsive/bigScreen";
import { mobile } from "../responsive/mobile";
import { useAppDispatch, useAppSelector } from "../store";

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
  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  ${mobile({ display: "none" })}
`;

const HamburgerMenu = styled.div<Props>`
  display: none;
  ${mobile({ justifyContent: "flex-end", display: "flex", width: "100%" })}
  z-index:999;
  color: ${(p) => p.showMenu && "white"};
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

const DropDownMenu = styled.div<Props>`
  width: 100%;
  background-color: rgba(128, 128, 128, 0.7);
  opacity: ${(p) => (p.showMenu ? "1" : "0")};

  align-items: center;
  ${bigScreen({ display: "none" })}
  position: absolute;
  top: 0;
  transition: opacity 0.5s ease;
`;

const DropDownMenuItem = styled.a<Props>`
  display: ${(p) => (p.showMenu ? "block" : "none")};
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid gray;
  &:hover {
    font-weight: 700;
  }
`;

interface Props {
  showMenu: boolean;
}

export const Topbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const userSlice = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  const handleLogout = (e: any) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <Container>
      <DropDownMenu showMenu={showMenu}>
        <Link onClick={() => setshowMenu(false)} to="/">
          <DropDownMenuItem showMenu={showMenu}>HOME</DropDownMenuItem>
        </Link>
        <Link onClick={() => setshowMenu(false)} to="/about">
          <DropDownMenuItem showMenu={showMenu}>ABOUT</DropDownMenuItem>
        </Link>
        <Link onClick={() => setshowMenu(false)} to="/contact">
          <DropDownMenuItem showMenu={showMenu}>CONTACT</DropDownMenuItem>
        </Link>
        <Link onClick={() => setshowMenu(false)} to="/login">
          <DropDownMenuItem showMenu={showMenu}>LOGIN</DropDownMenuItem>
        </Link>
        <Link onClick={() => setshowMenu(false)} to="register">
          <DropDownMenuItem showMenu={showMenu}>REGISTER</DropDownMenuItem>
        </Link>
      </DropDownMenu>
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
          <Link to={"/"}>
            <MenuItem>HOME</MenuItem>
          </Link>

          <Link to={"/about"}>
            <MenuItem>ABOUT</MenuItem>
          </Link>

          <Link to={"/contact"}>
            <MenuItem>CONTACT</MenuItem>
          </Link>

          <Link to={"/write"}>
            <MenuItem>WRITE</MenuItem>
          </Link>

          <Link to={"/login"}>
            {userSlice.loggedIn && (
              <MenuItem
                style={{ color: "red" }}
                onClick={(e) => handleLogout(e)}
              >
                LOGOUT
              </MenuItem>
            )}
          </Link>
        </Menu>
      </Center>
      <Right>
        {userSlice.loggedIn ? (
          <Link to={"/settings"}>
            <AvatarImg src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </Link>
        ) : (
          <>
            <Link to={"/login"}>
              <MenuItem>LOGIN</MenuItem>
            </Link>
            <Link to={"/register"}>
              <MenuItem>REGISTER</MenuItem>
            </Link>
          </>
        )}

        <i
          className="fas fa-search"
          style={{ fontSize: "18px", color: "#666", cursor: "pointer" }}
        />
      </Right>

      <HamburgerMenu showMenu={showMenu}>
        <i
          onClick={() => setshowMenu(!showMenu)}
          className={showMenu ? "fas fa-times" : "fas fa-bars"}
          style={{ marginRight: "25px", cursor: "pointer", fontSize: "18px" }}
        ></i>
      </HamburgerMenu>
    </Container>
  );
};
