import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { login } from "../api/auth";
import { useAppSelector } from "../store";
import { UserDTO } from "../types/UserDTO";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: 300px;
`;

const Title = styled.span`
  font-size: 50px;
`;

const Label = styled.label`
  margin: 10px 0;
`;

const Email = styled.input`
  padding: 10px;
  border: none;
  background-color: white;
  :focus {
    outline: none;
  }
  border-radius: 10px;
`;
const Password = styled.input`
  padding: 10px;
  border: none;
  background-color: white;
  :focus {
    outline: none;
  }
  border-radius: 10px;
`;

const LoginButton = styled.button`
  margin-top: 20px;
  border: none;
  color: white;
  background-color: lightcoral;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  width: 150px;
  align-self: center;
  cursor: pointer;
`;
const RegisterButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: teal;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: white;
  border-radius: 10px;
`;

const Error = styled.p`
  color: red;
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
`;
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userSlice = useAppSelector((state) => state.users);

  const handleLogin = (e: any) => {
    e.preventDefault();

    const user: UserDTO = {
      _id: null,
      createAt: null,
      email: null,
      password: password,
      username: username,
      profilPicture: null,
      updateAt: null,
    };

    dispatch(login(user));
  };

  return (
    <Container>
      {userSlice.loggedIn && <Redirect to={"/home"} />}
      <Title>Login</Title>
      <Form>
        <Label>Username</Label>
        <Email
          type={"text"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"Enter username..."}
        />
        <Label>Password</Label>
        <Password
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Enter password..."}
        />
        <LoginButton onClick={(e) => handleLogin(e)}>Login</LoginButton>
        {userSlice.error && <Error>{userSlice.error}</Error>}
        <Link to={"/register"}>
          {" "}
          <RegisterButton>Register</RegisterButton>
        </Link>
      </Form>
    </Container>
  );
};
