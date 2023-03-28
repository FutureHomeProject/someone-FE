import React from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { BsSymmetryHorizontal } from 'react-icons/bs'
import styled from 'styled-components'
import { BsEmojiSmile } from 'react-icons/bs'

const HouseDetail = () => {
  const { id } = useParams()
  console.log('ID -> ', id)

  const { data } = useQuery(['GET_HOUSE', id], async () => {
    const response = await axios.get(`http://43.201.116.11:8080/houses/${id}`)
    console.log('data-->', data)
    return response.data
  })

  console.log('data', data)

  return (
    <>
      <Header />
      <div>
        <img src={data?.image} alt={data?.image} />
        <ExDiv>
          <h3>온라인 집들이</h3>
          <h1>{data?.title}</h1>
          <ProfileDiv>
            <div>
              <BsEmojiSmile />
            </div>
            <div>{data?.nickname}</div>
          </ProfileDiv>
          <DeDiv>
            <div>{data?.dwellingtype}</div>
            <div>{data?.average}</div>
            <div>{data?.region}</div>
          </DeDiv>
          <div>{data?.contents}</div>
        </ExDiv>
      </div>
      <Footer />
    </>
  )
}

export default HouseDetail

const ExDiv = styled.div`
  margin: auto;
  width: 60%;
`
const ProfileDiv = styled.div`
  display: flex;
  gap: 10px;
  size: 20px;
`
const DeDiv = styled.div`
  margin-top: 30px;
  background-color: #f6f7f9;
  display: flex;
`
