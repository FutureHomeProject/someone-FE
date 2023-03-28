import React from 'react'
import styled from 'styled-components'
import {BsFillStarFill} from 'react-icons/bs'

function ProgressBar({ percent }) {
  return (
    // <div style={{ width: '100%', height: '20px', backgroundColor: 'lightgray', padding:0 , }}> {/*   borderRadius:"10px" , display: "flex", justifyContent: "center", alignItems: "center" */}
    //   <div style={{ width: `${percent}%`, height: '1px', backgroundColor: 'skyblue', margin:"0", marginRight: "auto"}} /> {/* , borderRadius:"10px" */}
    // </div>
      <div style={{ width: '100%', height: '20px', backgroundColor: 'lightgray',  borderRadius:"10px" }}>
       <div style={{ width: `${percent}%`, height: '100%', backgroundColor: 'skyblue',  borderRadius:"10px" }} />
     </div>
  );
}

function ReviewBox({onClick}) {
  const starsCount = 3.4; // 별점의 개수
  const emptystar = 5 - Math.round(starsCount)
  const stars = []
  const emptystars = []
  for(let i = 0; i < Math.round(starsCount);i++) {
    stars.push(<BsFillStarFill key={i}/>)
  }
  for(let i = 0; i < emptystar;i++) {
    emptystars.push(<BsFillStarFill key={i}/>)
  }

  return (
    <ReviewWrap>
      <div className="topdiv">
        <div>
          리뷰 <span>753</span>
        </div>
        <div onClick={onClick}>리뷰쓰기</div>
      </div>
      <div className="bodydiv">
        <div className='first'>
          <p>
          <span className='star'>{stars}</span><span className='emptystars'>{emptystars}</span>
          <span className='starsCount'> {starsCount}</span>
          </p>
        </div>

        <div className='starpersent'>
          <div className='starcomment'>
            <div>5점</div>
            <div><ProgressBar percent={93} /></div>
            <div>714</div>
          </div>
          <div className='starcomment'>
            <div>4점</div>
            <div><ProgressBar percent={7} /></div>
            <div>37</div>
          </div>
          <div className='starcomment'>
            <div>3점</div>
            <div><ProgressBar percent={0} /></div>
            <div>2</div>
          </div>
          <div className='starcomment'>
            <div>2점</div>
            <div><ProgressBar percent={0} /></div>
            <div>0</div>
          </div>
          <div className='starcomment'>
            <div>1점</div>
            <div><ProgressBar percent={0} /></div>
            <div>0</div>
          </div>
        </div>
      </div>
    </ReviewWrap>
    
  );
}

export default ReviewBox

const ReviewWrap = styled.div`
  width: 100%;
  min-height: 300px;

  .topdiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-weight: 900;
    margin: 30px 0;

    div:nth-child(1) {
      text-align: left;
      font-size: 1.2rem;

      span {
        color: skyblue;
        font-size: 1rem;
      }
    }
    div:nth-child(2) {
      text-align: right;
      color: skyblue;
    }
  }

  .bodydiv {
    border: none;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
    min-height: 300px;
    height: 300px;
    background: rgba(110, 110, 110, 0.074);
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 10px;

    .first {
      border-right: 3px solid #c9c9c978;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      .star {
        font-size: 3rem;
        color: skyblue;
      }
      .emptystars {
        font-size: 3rem;
        color: lightgray;
      }

      .starsCount {
        font-size: 5rem;
      }
    }
    .starpersent {
      padding: 20px;
      margin: auto 0;
      justify-content: center;
      align-items: center;

      .starcomment {
        margin: 10px 0;
        display: grid;
        grid-template-columns: 50px 1fr 50px;
        gap: 10px;
      }
    }
  }
`;