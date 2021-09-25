import styled from "styled-components";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0d2534;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: #209eb4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.article`
  color: white;
  letter-spacing: 2px;
  font-size: 30px;
`;

export const Welcome = () => {
  return (
    <Page>
      <Container>
        <Message>
          <div>Welcome to the page</div>
        </Message>
      </Container>
    </Page>
  );
};
