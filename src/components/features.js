import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { styled } from 'styled-components'
import { sliderItems } from '../data.js';
// import myImage from './pics/vadanam01.png';
const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position: relative;
    overflow: hidden;
`;
const Arrow=styled.div`
    width: 60px;
    height:60px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content:center;
    position : absolute;
    top:0;
    bottom:0;
    margin:auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    
    cursor: pointer;
    opacity:0.5;

`;
const Wrapper=styled.div`
padding: 10px 0px;
height:100%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${props => props.slideIndex *-100}vw);
`;

const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: ${props=>props.bg};
`;

const ImageContainer=styled.div`
display:flex;
height:100%;
justify-content: center;
align-items: center;
flex:1;
`;
const Image=styled.img`
height:50%;

/* border-radius: 100%; */
`;
const InfoContainer=styled.div`
padding:50px;
flex:1;
`;
const Title= styled.h1`
font-size:70px;
`;
const Description= styled.p`
margin: 50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`;
const Button= styled.button`
padding:10px;
font-size:2-px;
background-color: transparent;
cursor:pointer;
`;

const Features = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick =(direction)=>{
        if(direction ==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
    };

  return (
    <Container>
    {/* <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeft/>
    </Arrow> */}
    <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) =>(
        <Slide bg={item.bg}>
        <ImageContainer>
            <Image src={item.img}></Image>
        </ImageContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
        ))}
       
    </Wrapper>
    <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeft/>
    </Arrow>
    <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRight/>
    </Arrow>
    </Container>
  )
}

export default Features
