import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import products1 from '../img/produts/products1.webp'

function Products({id, img, title, name, sale, price, review}) {
  const navigete = useNavigate()
  return (
    <>
      <ProductsDiv key={id} onClick={()=>navigete(`/products/${id}`)}>
        <img src={img || products1} alt='products' width="100%"/>
        <SmallSpan>{title}</SmallSpan>
        <ProductsName>{name}</ProductsName>
        <div>
          <SaleSpan>{sale}</SaleSpan>
          <PriceSpan>{price}</PriceSpan>
        </div>
        <div>
          <SmallSpan>{review}</SmallSpan>
        </div>
      </ProductsDiv>
    </>
  )
}

export default Products


const ProductsDiv = styled.div`
  width: 255px;
  height: 350px;
  img {
    display: block;
  }
`

const SmallSpan = styled.p`
  margin: 3px 5px;
  font-size: .7rem;
  color: gray;
`

const ProductsName = styled.p`
  margin: 3px 5px;
  font-size: .9rem;
`
const SaleSpan = styled.span`
  color: #7FCCEF;
  font-size: 1.4rem;
  font-weight: 900;
`
const PriceSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 900;
`