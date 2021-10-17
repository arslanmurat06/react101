import { useState } from "react";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { useAppSelector } from "../store";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  flex: 9;
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UpdateText = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  color: lightcoral;
`;
const DeleteteText = styled.span`
  color: red;
  font-size: 12px;
  cursor: pointer;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImageLabel = styled.label`
  height: 25px;
  width: 25px;
  color: pink;
  font-size: 30px;
  margin-left: 10px;
`;

const ProfileLabel = styled.label`
  font-size: 20px;
  margin-top: 20px;
`;

const ProfilePictureWrapepr = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ProfilePciture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  object-fit: cover;
`;

const TextInput = styled.input`
    color:gray:
    margin:10px 0;
    height:30px;
    border:none;
    border-bottom:1px solid lightgray;
    :focus{
      outline:none;
    }

`;

const FileInput = styled.div``;

const SubmitButton = styled.button`
  margin-top: 20px;
  border: none;
  background-color: teal;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  width: 150px;
  align-self: center;
  padding: 10px;
  cursor: pointer;
`;

export const Settings = () => {
  const userSlice = useAppSelector((state) => state.users);

  const [email, setEmail] = useState(userSlice.data?.email ?? "");

  const [username, setUsername] = useState(userSlice.data?.username ?? "");

  return (
    <Container>
      <Wrapper>
        <Title>
          <UpdateText>Update Your Account</UpdateText>
          <DeleteteText>Delete Account</DeleteteText>
        </Title>

        <FormWrapper>
          <ProfileLabel>Profile Picture</ProfileLabel>
          <ProfilePictureWrapepr>
            <ProfilePciture
              src={
                "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }
            />
            <FileInput>
              <ProfileImageLabel htmlFor={"fileInput"}>
                <i
                  className={"fa fa-user-circle"}
                  style={{ cursor: "pointer" }}
                />
              </ProfileImageLabel>

              <input
                type={"file"}
                id={"fileInput"}
                style={{ display: "none" }}
              />
            </FileInput>
          </ProfilePictureWrapepr>
          <ProfileLabel>Username</ProfileLabel>
          <TextInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type={"text"}
            placeholder="user name"
          />
          <ProfileLabel>Email</ProfileLabel>
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            placeholder="email"
          />
          {/* <ProfileLabel>Password</ProfileLabel> */}
          {/* <TextInput type={"password"} /> */}

          <SubmitButton>Update</SubmitButton>
        </FormWrapper>
      </Wrapper>
      <Sidebar />
    </Container>
  );
};
