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

  const { data1 } = useQuery(['GET_HOUSE', id], async () => {
    const response = await axios.get(`http://43.201.116.11:8080/houses/${id}/comments/write`)
    console.log('data-->', data)
    return response.data
  })

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
      <div style={{ border: '0.5px solid #d0d5d8', width: '64%', margin: '0px auto' }}></div>
      <div style={{ marginTop: '40px' }}>
        <div>
          <div style={{ width: '60%', margin: 'auto' }}>댓글</div>
          <InputDiv>
            <input placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)" />
            <button>입력</button>
          </InputDiv>
        </div>
        <div>
          {data1?.map((house) => {
            return (
              <>
                <div key={house.id}>
                  <div>{house.comment}</div>
                </div>
              </>
            )
          })}
        </div>
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
`
const DeDiv = styled.div`
  margin-top: 30px;
  background-color: #f6f7f9;
  display: flex;
`
const InputDiv = styled.div`
  display: flex;
  margin: 20px auto;
  padding: 4px;
  justify-content: space-between;
  width: 60%;
  border: 1px solid #d0d5d8;
  border-radius: 4px;
  :focus-within {
    border-color: #2fbdee;
  }
  :hover {
    background-color: #f6f8f9;
  }
  input {
    border: none;
    width: 90%;
    height: 30px;
    font-size: 14px;
    outline: none;
    background-color: transparent;
    ::placeholder {
      color: #d0d5d8;
    }
  }
  button {
    background-color: transparent;
    border: none;
    color: #d0d5d8;
  }
`
