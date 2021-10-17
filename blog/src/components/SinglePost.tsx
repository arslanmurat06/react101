import { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router";
import styled from "styled-components";
import { deletePost, getPost, updatePost } from "../api/posts";
import { useAppDispatch, useAppSelector } from "../store";
import { PostDTO } from "../types/PostDTO";

const Container = styled.div`
  flex: 9;
  padding: 20px;
  padding-right: 0px;
`;

const Wrapper = styled.div``;

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

const DateComp = styled.span``;

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

const TextInput = styled.input`
  border: none;
  font-size: 30px;
  padding: 20px;
  width: 70vw;
  :focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  color: #fff;
  background-color: teal;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
`;

export const SinglePost = () => {
  const location = useLocation();

  const postId = location.pathname.split("/")[2];
  const dispatch = useAppDispatch();

  const postSlice = useAppSelector((state) => state.posts);

  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId]);

  const handleDelete = () => {
    console.log(postSlice.data![0]._id + "silinecek");
    dispatch(deletePost(postSlice.data![0]._id ?? ""));
  };

  const handleUpdateMod = () => {
    setTitle(postSlice.data![0].title);
    setDesc(postSlice.data![0].desc);
    setUpdateMode(true);
  };
  const update = () => {
    const post: PostDTO = {
      _id: postSlice.data![0]._id,
      categories: postSlice.data![0].categories,
      photo: postSlice.data![0].photo,
      createdAt: postSlice.data![0].createdAt,
      updateAt: new Date(Date.now()),
      username: postSlice.data![0].username,
      desc: desc,
      title: title,
    };

    dispatch(updatePost(post));
  };

  return (
    <Container>
      {postSlice.updated ? (
        <Redirect to="/" />
      ) : postSlice.loading ? (
        <p>Lütfen bekleyiniz</p>
      ) : (
        <Wrapper>
          {postSlice.deleted && <Redirect to="/" />}
          {postSlice.data![0].photo != null ? (
            <Image src={postSlice.data![0].photo} />
          ) : (
            <Image src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          )}
          <TitleWrapper>
            {updateMode ? (
              <TextInput
                type="text"
                placeholder="Title"
                autoFocus={true}
                value={title}
                onChange={(val) => setTitle(val.target.value)}
              />
            ) : (
              <Title>{postSlice.data![0].title ?? "unknown title"}</Title>
            )}

            <EditPost>
              {updateMode ? (
                <SubmitButton
                  disabled={postSlice.loading ? true : false}
                  onClick={() => update()}
                >
                  {postSlice.loading ? "Publishing" : "Publish"}
                </SubmitButton>
              ) : (
                <>
                  <li
                    onClick={handleUpdateMod}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      color: "teal",
                    }}
                    className="far fa-edit"
                  />
                  <li
                    onClick={() => handleDelete()}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      color: "tomato",
                    }}
                    className="far fa-trash-alt"
                  />
                </>
              )}
            </EditPost>
          </TitleWrapper>
          <Info>
            <Author>
              <b>{postSlice.data![0].username ?? "unknown"}</b>
            </Author>
            <DateComp>
              {new Date(postSlice.data![0].createdAt).toDateString()}
            </DateComp>
          </Info>

          {updateMode ? (
            <>
              <TextArea
                placeholder="Tell your story..."
                value={desc}
                onChange={(val) => setDesc(val.target.value)}
              />
            </>
          ) : (
            <Description>{postSlice.data![0].desc}</Description>
          )}
        </Wrapper>
      )}
    </Container>
  );
};
