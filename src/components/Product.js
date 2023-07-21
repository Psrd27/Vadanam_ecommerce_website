import React from 'react'
import { styled } from 'styled-components'
const Container= styled.div`
position: relative;
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 500px;
    background-color: Red;
    align-items: center;
    justify-content: center;
`;

const Circle=styled.div``;
const Image=styled.img`
align-items: center;
justify-content: center;
opacity: 1;
  display: block;
  min-width: 280px;
  width: fit-content;
  height: 100%;
  transition: 0.5s ease;
  backface-visibility: hidden;

  ${Container}:hover & {
    opacity: 0.3;
  }
`;

const Info=styled.div`

transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  ${Container}:hover & {
    opacity: 1;
  }`;

const Title=styled.div`
justify-content: center;
align-items: center;
    background-color: lightgray;
  color: white;
  font-size: 16px;
  padding: 16px 32px;`;

const Desc=styled.p`
display: flex;
top:0;
bottom: 0;
margin: auto;
justify-content: center;
align-items: center;`;

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title> 
            <Desc> {item.desc}</Desc>
        </Info>
        
    </Container>
  )
}

export default Product
