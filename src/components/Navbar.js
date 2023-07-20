import React from 'react'
import { styled } from 'styled-components'
// import { MenuItem } from '@mui/material'

const Container =  styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left =styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
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
 const MenuItem=styled.div`
    font-size:140x;
    cursor:pointer;
    margin-left:25px;
 `
const Navbar = () => {
  return (
    <Container>
    <Wrapper>
        <Left>Logo
        </Left>
        <Center><Title>VADANAM.</Title></Center>
        <Right>
            <MenuItem>
            ABOUT US
            </MenuItem>
            <MenuItem>
            CONTACT
            </MenuItem>
        </Right>
    </Wrapper>
   
</Container>
  )
}

export default Navbar