import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {BsFillStarFill} from 'react-icons/bs'
import styled from 'styled-components'
import products1 from '../../img/produts/products1.webp'
import { useMutation, useQueryClient } from 'react-query'
import Cookies from 'universal-cookie'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { useParams } from 'react-router-dom'

const cookies = new Cookies();

function ReviewMap({comments}) {
  const params = useParams()
  const starsCount = +comments.reviewpoint; // 별점의 개수
  const emptystar = 5 - Math.round(starsCount)
  const stars = []
  const emptystars = []
  const token = cookies.get("token")
  const {nickname} = jwt_decode(token);
  for(let i = 0; i < Math.round(starsCount);i++) {
    stars.push(<BsFillStarFill key={i}/>)
  }
  for(let i = 0; i < emptystar;i++) {
    emptystars.push(<BsFillStarFill key={i}/>)
  }

  const qureyClient = useQueryClient();

  const { mutate : deleteproducts } = useMutation({
    mutationFn : async () => {
      // const data = await axios.post(`${process.env.REACT_APP_SERVER_KEY}/products/${+productId}/reviews/write`, {nickname,comment,reviewpoint}, {
        const data = await axios.delete(`${process.env.REACT_APP_SERVER_KEY}/products/${+params}/reviews/${comments.id}`, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      return data.status
    },

    onSuccess: (data) => {
      switch (data) {
        case 200 :
          alert("승인")
          qureyClient.invalidateQueries('productsreview')
          return 
        default :
          return  
      }
    },
    onError: (error) => {
      alert("에러 발생 ")
    }
  })



  return (
    <Layout>
      <PurchaseHistory>
        <div className="userprofile">
          <CgProfile />
        </div>
        <div>
          <p>{comments.nickname}</p>
          <p>
            <span className="star">{stars}</span>
            <span className="emptystars">
              {emptystars} {comments.createdAt.split(" ")[0]} • 오늘의 집 구매
            </span>
          </p>
        </div>
        {nickname === 'ed' && (
          <div className="editebtns">
            <button>수정하기</button>
            <button onClick={() => deleteproducts()}>삭제하기</button>
          </div>
        )}
      </PurchaseHistory>
      <PuductsName>{comments.name}</PuductsName>
      <p>
        <img
          src={products1}
          alt=""
          width="100"
          style={{ borderRadius: "10px" }}
        />
      </p>
      <p>{comments.comment}</p>
    </Layout>
  );
}

export default ReviewMap;

const Layout = styled.div`
  border-top: 1px solid lightgray;
  padding: 30px 10px;
`

const PurchaseHistory = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
  .userprofile {
    max-height: 40px;
    font-size: 2.5rem;
    color: lightgray;
  }
  p {
    margin: 0;
  }
  .star {
    color: skyblue;
  }
  .emptystars {
    color: lightgray;
  }
  .editebtns {
    position: absolute;
    top:5px;
    right: 5px;
    display: flex;
    gap: 5px;

    button:nth-child(1) {
      border: 1px solid #34C5F0;
      border-radius: 10px;
      background-color: transparent;
    }

    button:nth-child(2) {
      border: none;
      border-radius: 10px;
      color:white;
      background-color: #34C5F0;
      &:hover {
        background-color: #019FCE;
      }
    }

  }
`;

const PuductsName = styled.p`
  border-left: 5px solid lightgray;
  padding-left: 10px;
`