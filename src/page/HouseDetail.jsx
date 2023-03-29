import React, { useState } from 'react'
import axios from 'axios'
import { HeaderDiv, NavTop } from '../css/commenCss.jsx'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../components/CommenButton'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import { BsSymmetryHorizontal } from 'react-icons/bs'
import styled from 'styled-components'
import { BsEmojiSmile } from 'react-icons/bs'
import Cookies from 'universal-cookie'

export const cookies = new Cookies()

const HouseDetail = () => {
  const { id } = useParams()
  console.log('ID -> ', id)

  const navigate = useNavigate()

  const { data } = useQuery(['GET_HOUSE', id], async () => {
    const response = await axios.get(`http://43.201.116.11:8080/houses/${id}`)
    return response.data
  })
  console.log(data)
  // const { data1 } = useQuery(['GET_COMMENTS', id], async () => {
  //   const response = await axios.get(`http://43.201.116.11:8080/houses/${id}`)
  //   console.log('data22-->', response.commentList)
  //   return response.data.commentList
  // })

  const [isComment, setIsComment] = useState({
    comment: '',
  })

  const changeCommentHandler = (event) => {
    const { value } = event.target
    setIsComment((pre) => ({ ...pre, comment: value }))
  }

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async (payload, id) => {
      await axios.post(`${process.env.REACT_APP_SERVER_KEY}/houses/${payload.id}/comments/write`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    },
    onSuccess: () => {
      window.alert('추가 성공 !')
    },
  })
  const token = cookies.get('token')

  return (
    <>
      <HeaderDiv onClick={() => navigate('/house/write')}>
        <NavTop>
          <div className="logo">누군가의집</div>
          <div>
            <StyledButton width="150px" height="40px" color="white" innerText="발행" navigate />
          </div>
        </NavTop>
      </HeaderDiv>
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
            <input
              placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
              type="text"
              value={isComment.comment}
              name="comment"
              onChange={changeCommentHandler}
            />
            <button
              disabled={isLoading}
              onClick={() => {
                mutate({ id: data.id, comment: isComment.comment })
                setIsComment({ comment: '' })
              }}
            >
              {isLoading ? '등록' : '입력'}
            </button>
          </InputDiv>
        </div>
        {data &&
          data.commentList &&
          data.commentList.map((house) => {
            return (
              <CommentDiv key={house?.id}>
                <NickDiv>{house?.nickname}</NickDiv>
                <div>{house?.comment}</div>
                <div>
                  <button>수정</button>
                  <span>·</span>
                  <button>삭제</button>
                </div>
              </CommentDiv>
            )
          })}
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
    font-size: 14px;
    background-color: transparent;
    border: none;
    color: #2fbdee;
    cursor: pointer;
  }
`
const CommentDiv = styled.div`
  width: 60%;
  margin: 20px auto;
  div {
    margin: 10px auto;
    display: flex;
    gap: 0px;
  }
  span {
    color: #d0d5d8;
  }
  button {
    font-size: 14px;
    background-color: transparent;
    border: none;
    color: #2fbdee;
    cursor: pointer;
  }
`

const NickDiv = styled.div`
  font-weight: 900;
`
