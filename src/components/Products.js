import React from 'react'
import { styled } from 'styled-components'
import { popularProducts } from '../data.js';
import Product from './Product.js';

const Container=styled.div`
padding:20px;
display: flex;
flex-wrap: wrap;
background-color: #E1E5EA;
`;

const Products = () => {
  return (
    <Container>
    {popularProducts.map((item)=>(
        <Product item={item} key={item.id}/>
    ))}
    </Container>
    );
  
};

export default Products
