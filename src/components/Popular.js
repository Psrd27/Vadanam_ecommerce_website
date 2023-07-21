import React from 'react'
import { styled} from 'styled-components'

const Container = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
background-color: #E1E5EA;
  /* background-image: linear-gradient(-45deg, #E74646 0%, #FA9884 25%, #FFE5CA 51%, #FFF3E2 100%);   */
`;

const Title=styled.h1`
color: black;
`;
const Popular = () => {
  return (
    <Container>
        <Title>POPULAR PRODUCTS</Title>
    </Container>
  )
}

export default Popular
