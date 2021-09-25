import { Hidden } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  Hidden: boolean;
}

const Container = styled.div<Pick<Props, "Hidden">>`
  height: 30px;
  background-color: pink;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  display: ${(props) => (props.Hidden ? "none" : "flex")};
`;

const ExitButton = styled.button`
  background-color: transparent;
  border-line: none;
  flex: 1;
  margin: 5px;
`;

const AnnounceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 100;
  height: 100%;
`;

const AnnounceText = styled.p`
  font-weight: bold;
`;

export const Announcement = () => {
  const [isHidden, setHidden] = useState(false);

  return (
    <Container Hidden={isHidden}>
      <AnnounceContainer>
        <AnnounceText>This is an anouncement</AnnounceText>
      </AnnounceContainer>
      <ExitButton onClick={() => setHidden(true)}>X</ExitButton>
    </Container>
  );
};
