import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  flex: 1;
  background-image: radial-gradient(
    circle 943px at 3.2% 53%,
    rgba(237, 150, 78, 0.75) 0%,
    rgba(238, 93, 123, 0.75) 90%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: black;
  opacity: 0.8;
  border-radius: 20px;
  width: 40vw;
  height: 40vh;
  min-height: 400px;
  min-width: 400px;
  max-height: 500px;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.h1`
  font-weight: bold;
  color: white;
  letter-spacing: 0.2rem;
  flex: 1;
`;

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  flex: 6;
  margin-top: 80px;
`;

const FormItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const FormText = styled.span`
  font-weight: bold;
  flex: 1;
  margin-left: 20px;
  color: white;
`;

const Input = styled.input`
  background-color: white;
  height: 20px;
  flex: 2;
  margin-right: 40px;
  input-line: none;
`;

const Button = styled.button`
  background-color: teal;
  color: black;
  border-radius: 5px;
  width: 100px;
  margin-top: 20px;
`;

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Header>LOGIN</Header>
        <FormWrapper>
          <FormItemsWrapper>
            <FormText>Username:</FormText>
            <Input />
          </FormItemsWrapper>
          <FormItemsWrapper>
            <FormText>Password:</FormText>
            <Input />
          </FormItemsWrapper>
          <Button>Login</Button>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};
