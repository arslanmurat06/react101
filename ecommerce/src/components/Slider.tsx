import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { StyledProps } from "@material-ui/core";
import { useState } from "react";
import {sliderItems}  from '../data/slider-items';

interface Props {
   direction:string;
   bg:string;
   slideIndex:number;
  }

const Container =styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
`;

const Wrapper =styled.div<Pick<Props, 'slideIndex'>>`
    height:100%;
    display:flex;
    transform:translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Arrow =styled.div<Pick<Props,'direction'>>`
    width:50px;
    height:50px;
   
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    position:absolute;
    top:0;
    bottom:0;
    right:${props=> props.direction === "right"  && "10px"};
    left:${props=> props.direction === "left"  && "10px"};
    margin:auto;
    opacity:0.5;
    z-index: 2;
`;

const Slide =styled.div<Pick<Props,'bg'>>`
  display:flex;
  height:100vh;
  width:100vw;
  align-items:center;
  background-color:#${props=> props.bg};
`;

const ImgContainer =styled.div`
    flex:1;
    height:100%;
    object-fit:cover;
`;

const Image =styled.img`
    height:80%;
 
`;

const InfoContainer =styled.div`
  flex:1;
  padding:80px;
  align-items:center;
  justify-content:flex-end;
  margin-left:50px;
`;


const Title =styled.h1`
    font-size:70px;
`;

const Description =styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`;

const Button =styled.button`
    color:black;
    background-color:white;
    padding:10px;
    font-size:20px;
    cursor:pointer;
`;


export const Slider = () => {

    const[slideIndex,setSlideIndex] = useState(0);

    const handleClick = (direction:String)=> {
            if(direction ==="left"){
                setSlideIndex(slideIndex > 0 ? slideIndex -1: 2);
            }
            else{
                setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0);
            }
    }

    return (
      <Container>
          <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
          </Arrow>
          {
              <Wrapper slideIndex= {slideIndex}>
              {sliderItems.map((slide) => 
                (
                <Slide bg={slide.bg} key={slide.id}>
                  <InfoContainer>
                      <Title>{slide.title}</Title>
                      <Description>{slide.desc}</Description>
                      <Button>Shop Now</Button>
                  </InfoContainer>
                  <ImgContainer>
                      <Image src={slide.img}/>
                  </ImgContainer>
                </Slide>
              )
              )}
              </Wrapper>
          }
          <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
          </Arrow>
      </Container>
    )
}
