import React from 'react'
import { styled } from 'styled-components'
const Container =styled.div`
    height:30px;
    background-color: salmon;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:14px;
    font-weight:500;
`
const Announcement = () => {
  return (
    <Container>Discover Your Natural Glow!</Container>
  )
}

export default Announcement