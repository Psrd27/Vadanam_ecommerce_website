import { AlternateEmail, Instagram, Phone, Room } from '@mui/icons-material';
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
display: flex;
background-color: #f5e5db;
`;
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo=styled.h1``;
const Desc=styled.p`
margin:20px 0px;
 `;
const SocialContainer=styled.div`
display: flex;`;

const Anchor=styled.a`
width: 40px;
height: 40px;
border-radius:50%;
color:white;
background-color:#eb2c86;
display: flex;
align-items: center;
justify-content: center;
`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color:white;
background-color:#eb2c86;
display: flex;
align-items: center;
justify-content: center;
`;
const Center = styled.div`
flex:1;
padding: 20px;
`;
const Title=styled.h3`
    margin-bottom: 30px;
`;
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;`;

const Right = styled.div`
flex:1;
padding: 20px;
display: flex;
flex-direction: column;

`;
const ContactItem=styled.div`
display: flex;
align-items: center;
padding: 2px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>VADANAM.</Logo>
            <Desc>Vadanam handcrafted skincare, where passion and nature unite to create a truly exceptional and rejuvenating experience for your skin. At the heart of our brand, we believe in the power of simplicity and authenticity, harnessing the finest natural ingredients to craft products that cater to your unique skin needs. </Desc>
            <SocialContainer>
                <SocialIcon>
                    <Anchor href='https://www.instagram.com/vadanam_skincare/'><Instagram/></Anchor>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Skin care</ListItem>
                <ListItem>Lip care</ListItem>
                <ListItem>Hair care</ListItem>
                <ListItem>Soap</ListItem>
                <ListItem>Lip balm</ListItem>
                <ListItem>Shampoo</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> Address</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> Phone Number</ContactItem>
            <ContactItem><AlternateEmail style={{marginRight:"10px"}}/> Email</ContactItem>
        </Right>
    </Container>
      
  )
}

export default Footer
