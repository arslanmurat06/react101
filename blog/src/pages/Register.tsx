import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { register } from "../api/auth";
import { useAppSelector } from "../store";
import { UserDTO } from "../types/UserDTO";

const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
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

const RegisterButton = styled.button`
  margin-top: 20px;
  border: none;
  color: white;
  background-color: teal;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  width: 150px;
  align-self: center;
  cursor: pointer;
`;
const LoginButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: lightcoral;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: white;
  border-radius: 10px;
`;

export const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userSlice = useAppSelector((state) => state.users);

  const handleRegister = (e: any) => {
    e.preventDefault();

    const user: UserDTO = {
      _id: null,
      createAt: new Date(Date.now()).toISOString(),
      email: email,
      password: password,
      profilPicture: null,
      updateAt: null,
      username: username,
    };

    console.log(user);
    dispatch(register(user));
  };
  return (
    <Container>
      {userSlice.loggedIn && <Redirect to={"/login"} />}
      <Title>Register</Title>
      <Form>
        <Label>Email</Label>
        <Email
          type={"text"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Enter email..."}
        />
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
        <RegisterButton
          disabled={userSlice.loading}
          onClick={(e) => handleRegister(e)}
        >
          Register
        </RegisterButton>

        <Link to={"/login"}>
          <LoginButton>Login</LoginButton>
        </Link>
      </Form>
    </Container>
  );
};
