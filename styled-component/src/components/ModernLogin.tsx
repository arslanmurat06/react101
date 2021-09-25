import styled from "styled-components";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LockIcon from "@material-ui/icons/Lock";

import { tablet } from "../responsive/tablet";
import { useAppDispatch, useAppSelector } from "../store";
import { useState } from "react";
import { login } from "../features/loginSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
import { mobile } from "../responsive/mobile";
import { Redirect } from "react-router";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d2534;
`;

const LoginWrapper = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${tablet({ width: "50%" })}
  ${mobile({ width: "60%" })}
`;
const ImageWrapper = styled.div`
  height: 100%;
  flex: 2;
  background-color: yellow;
  ${tablet({ display: "none" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fit;
`;

const Header = styled.h1`
  font-size: 45px;
  color: #209eb4;
  letter-spacing: 2px;
  margin-bottom: 100px;
`;

const FormItemWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  height: 20px;
  flex: 1;
  margin: 0px 10px;
  outline: 0;
  border: none;
  background: transparent;
  border-bottom: 1px solid #209eb4;
  color: white;
  type: password;
`;

const Icon = styled.div`
  margin-left: 20px;
`;

const Button = styled.button`
  background-color: #652ec7;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border: none;
  box-shadow: 0px 0px 15px #652ec7;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: translateY(-7px);
  }
`;

const AccountTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: -30px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const AccountText = styled.p`
  color: #209eb4;
  cursor: pointer;
  ${mobile({
    fontSize: "10px",
  })}
`;

export const ModernLogin = () => {
  const dispatch = useAppDispatch();

  const loginSlice = useAppSelector((state) => state.loginSlice);

  const [username, setUsername] = useState<string>("mor_2314");
  const [password, setPassword] = useState<string>("83r5^_");

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <Header>Login</Header>
        <FormItemWrapper>
          <Icon>
            <EmailIcon style={{ color: "#209eb4" }} />
          </Icon>
          <Input placeholder="Username" value={username} disabled={true} />
        </FormItemWrapper>
        <FormItemWrapper>
          <Icon>
            <VpnKeyIcon style={{ color: "#209eb4" }} />
          </Icon>
          <Input
            placeholder="Password"
            type="password"
            disabled={true}
            value={password}
          />
        </FormItemWrapper>
        <AccountTextWrapper>
          <AccountText onClick={() => console.log("tıklandı")}>
            Don't you have an account?
          </AccountText>
        </AccountTextWrapper>
        {loginSlice.loading ? (
          <CircularProgress />
        ) : loginSlice.data ? (
          <Redirect to={"/welcome"} />
        ) : (
          <Button onClick={() => handleLogin()}>
            <LockIcon style={{ color: "#209eb4" }} />
          </Button>
        )}
      </LoginWrapper>
    </Wrapper>
  );
};
