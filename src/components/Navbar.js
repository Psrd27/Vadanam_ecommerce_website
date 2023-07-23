import React from 'react'
import { styled } from 'styled-components'
import {animateScroll as scroll } from "react-scroll";
// import MyImage from "./src/pics/vadanamlogo.jpg";

const Container =  styled.div`
    height: 80px;
    background-color: #f5e5db;

`
const Wrapper = styled.div`
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0;
`
const Left =styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Img=styled.img``;
const Title =styled.h1`
`
const Center =styled.div`
text-align:center;
    flex:1;
`
const Right =styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
`
 const MenuItem=styled.button`
    font-size:140x;
    cursor:pointer;
    margin-left:25px;
    background-color: transparent;
    border: none;
 `
const Navbar = () => {
  return (
    <Container>
    <Wrapper>
        <Left>Logo
        </Left>
        <Center><Title >VADANAM.</Title></Center>
        <Right>
            <MenuItem onClick={() => scroll.scrollToBottom()}>
            ABOUT US
            </MenuItem>
            <MenuItem onClick={() => scroll.scrollToBottom()}>
            CONTACT
            </MenuItem>
        </Right>
    </Wrapper>
   
</Container>
  )
}

export default Navbar