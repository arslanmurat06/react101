import { useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { createPost } from "../api/posts";
import { mobile } from "../responsive/mobile";
import { useAppDispatch, useAppSelector } from "../store";
import { PostDTO } from "../types/PostDTO";

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  position: relative;
`;

const FormContainer = styled.div``;

const FormGroup = styled.div`
  margin-left: 150px;
  display: flex;
  align-items: center;

  ${mobile({ marginLeft: "20px" })}
`;

const FileInput = styled.input`
  display: none;
  border: none;
`;

const TextInput = styled.input`
  border: none;
  font-size: 30px;
  padding: 20px;
  width: 70vw;
  :focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  border-radius: 50%;
  border: 1px solid;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 20px;
  cursor: pointer;
`;

const IconLabel = styled.label``;

const TextArea = styled.textarea`
  border: none;
  font-size: 20px;
  padding: 20px;
  width: 70vw;
  :focus {
    outline: none;
  }
  height: 100vh;
`;

const SubmitButton = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  color: #fff;
  background-color: teal;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
`;

const Image = styled.img`
  margin-left: 150px;
  width: 70vw;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  ${mobile({ marginLeft: "20px" })}
`;

export const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useAppDispatch();

  const postSlice = useAppSelector((state) => state.posts);

  const savePost = () => {
    const post: PostDTO = {
      _id: null,
      categories: null,
      photo: null,
      createdAt: new Date(Date.now()),
      updateAt: new Date(Date.now()),
      username: "Murat Arslan",
      desc: desc,
      title: title,
    };

    dispatch(createPost(post));
  };

  return (
    <Container>
      <Image src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      <Form>
        <FormContainer>
          <FormGroup>
            <IconContainer>
              <IconLabel htmlFor="fileInput">
                <i className="fas fa-plus" />
              </IconLabel>
            </IconContainer>
            <FileInput type="file" id="fileInput" />
            <TextInput
              type="text"
              placeholder="Title"
              autoFocus={true}
              value={title}
              onChange={(val) => setTitle(val.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <TextArea
              placeholder="Tell your story..."
              value={desc}
              onChange={(val) => setDesc(val.target.value)}
            />
          </FormGroup>
          <SubmitButton
            disabled={postSlice.loading ? true : false}
            onClick={() => savePost()}
          >
            {postSlice.loading ? "Publishing" : "Publish"}
          </SubmitButton>

          {postSlice.created && <Redirect to="/" />}
        </FormContainer>
      </Form>
    </Container>
  );
};
