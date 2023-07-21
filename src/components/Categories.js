import React from 'react'
import { styled } from 'styled-components'
import { categories } from '../data.js';
import CategoryItem from './CategoryItem.js';

const Container=styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background-color: black;
`;
const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories
