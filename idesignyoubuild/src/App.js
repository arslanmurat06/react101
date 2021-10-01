import styled from "styled-components";
import Img1 from "./images/1.png";
import Img2 from "./images/2_1.png";
import Img3 from "./images/3.png";
import { keyframes } from "styled-components";
import { mobile } from "./responsive/mobile";

const Container = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  ${mobile({ position: "relative" })}
`;

const Sidebar = styled.div`
  flex: 1;
  border-right: 1px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ display: "none" })}
`;
const Main = styled.div`
  flex: 9;
  height: 100vh;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-around;
  height: 150px;
`;

const Logo = styled.span`
  font-size: 48px;
  line-height: 72px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-top: 24px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  ${mobile({ marginLeft: "10px", fontSize: "35px" })}
`;

const Topbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  ${mobile({ display: "none" })}
`;

const MenuItem = styled.span`
  color: white;
  font-size: 2opx;
  margin-right: 40px;
  font-family: "Poppins", sans-serif;
  line-height: 30px;
  cursor: pointer;
  border-bottom: ${(props) => (props.selected ? "3px solid #ffffff" : "none")};
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 60px;
  padding-top: 100px;
  flex: 1;
  ${mobile({ paddinTop: "0px", paddingLeft: "10px", width: "50%" })}
`;

const Header = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 72px;
  line-height: 79.2px;
  color: #ffff;
  margin-bottom: 20px;
  ${mobile({ fontSize: "48px", lineHeight: "52.8px" })}
`;

const Desc = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #fff;
  ${mobile({ fontSize: "12px", lineHeight: "18px" })}
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
  ${mobile({ zIndex: "-1", position: "absolute", left: "150px" })}
`;

const ImageBig = styled.img`
  height: 80%;
  width: 100%;
  margin-right: 50px;
`;

const BounceAnimation = keyframes`
  0%,
  100% {
    transform: translateY(-15%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

`;

const ImageSmall = styled.img`
  height: 323px%;
  width: 242px%;
  position: absolute;
  top: 20px;
  left: 60px;
  animation-name: ${BounceAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

const Footer = styled.div`
  width: 100%;
  height: 200px;
  z-index=999;
  bottom:0px;
  position:absolute;
  background: radial-gradient(100% 2631.09% at 0% 0%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.558) 100%);
  backdrop-filter: blur(50px);
  display:flex;
`;

const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
`;

const FooterCenter = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  ${mobile({ display: "none" })}
  ${mobile({ flex: "1" })}
`;

const ImageFooter = styled.img`
  ${mobile({ objectFit: "cover" })}
`;

const FooterHeader = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  font-family: "Poppins", sans-serif;
  color: #fff;
  margin-left: 80px;
  margi̇n-top: 50px;
  ${mobile({ fontSize: "16px", lineHeight: "24px" })}
  ${mobile({ marginLeft: "0px" })}
`;

const FooterDec = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 31.5px;
  font-family: "Poppins", sans-serif;
  color: #fff;
  margin-left: 80px;
  ${mobile({ fontSize: "12px", fontWeight: "500", lineHeight: "19.8px" })}
  ${mobile({ marginLeft: "0px", marginRight: "5px" })}
  ${mobile({ wordWrap: "break-word" })}
`;

const TopBarForMobile = styled.div`
  display: none;
  ${mobile({
    display: "flex",
    justifyContent: "space-between",
  })}
  width:100%;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Sidebar>
        <Logo>Xae</Logo>
        <SocialContainer>
          <i
            style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
            className="fab fa-facebook-f"
          ></i>
          <i
            style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
            className="fab fa-instagram"
          ></i>
          <i
            style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
            className="fab fa-twitter"
          ></i>
        </SocialContainer>
      </Sidebar>
      <Main>
        <TopBarForMobile>
          <Logo>Xae</Logo>
          <i
            style={{ color: "white", marginTop: "24px", marginRight: "10px" }}
            class="fas fa-bars"
          ></i>
        </TopBarForMobile>
        <Topbar>
          <MenuItem selected={true}>Home</MenuItem>
          <MenuItem selected={false}>About</MenuItem>
          <MenuItem selected={false}>Galery</MenuItem>
          <MenuItem selected={false}>Contact</MenuItem>
          <MenuItem>
            <i style={{ color: "white" }} class="fas fa-sun"></i>
          </MenuItem>
        </Topbar>
        <ContentContainer>
          <TextContainer>
            <Header>Adventure Together</Header>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              id potenti faucibus nec, rhoncus, vulputate vitae. Dictum rutrum
              ut cras nullam porta id dolor arcu, quis.
            </Desc>
          </TextContainer>
          <ImageContainer>
            <ImageBig src={Img1} />
            <ImageSmall src={Img2} />
          </ImageContainer>
        </ContentContainer>
        <Footer>
          <FooterLeft>
            <ImageFooter src={Img3} />
          </FooterLeft>
          <FooterCenter>
            <FooterHeader>Exploration</FooterHeader>
            <FooterDec>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              id potenti faucibus nec, rhoncus, vulputate
            </FooterDec>
          </FooterCenter>
          <FooterRight>
            <FooterHeader>Footprint</FooterHeader>
            <FooterDec>Lorem ipsum dolor sit amet, consectetur</FooterDec>
          </FooterRight>
        </Footer>
      </Main>
    </Container>
  );
}

export default App;
