import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from '../components/CommenButton'
import { HeaderDiv, NavTop } from '../css/commenCss.jsx'
import Footer from '../components/Footer'
import { useQuery } from 'react-query'
import axios from 'axios'

function House() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['GET_HOUSES'],
    queryFn: async () => {
      const data = await axios.get('http://43.201.116.11:8080/houses')
      console.log('data', data.data)
      return data.data
    },
  })

  const navigate = useNavigate()
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
      <ContentDiv>
        {data?.map((house) => {
          return (
            <>
              <ListDiv key={house.id} onClick={() => navigate(`/houses/${house.id}`)}>
                <Img src={house.imageUrl} alt={house.title} />
                <div>{house.title}</div>
                <div>{house.nickname}</div>
              </ListDiv>
            </>
          )
        })}
      </ContentDiv>
      <Footer />
    </>
  )
}

export default House

const ContentDiv = styled.div`
  margin: 50px auto;
  width: 100%;
  display: flex;

  flex-wrap: wrap;
`
const ListDiv = styled.div`
  width: 30%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Img = styled.img`
  width: 30vh;
  height: 18h;
  border-radius: 10px;
`
