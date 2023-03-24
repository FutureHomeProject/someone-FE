import React from 'react'


//하단 Footer 만들떄 <footer> 태그 사용 태그 안에 <section>,<article>사용
function Footer() {
  return (
    <footer>
      <div>
        <div>고객센터영역
          <div>고객센터 > </div>
          <div>
            <a href='tel:1670-0876'>1670-0876</a>
            <time dateTime='9:00'>09:00</time>
            ~
            <time dateTime='18:00'>18:00</time>
          </div>
          <div>
            <p>평일: 전체문의 상담 가능</p>
            <p>주말,공휴일: 오늘의집 직접배송, 이사/시공/수리 문의 상담 가능</p>
          </div>
          <div>
            <button>카톡 상담 (평일 9:00~18:00)</button>
            <button>이메일 문의</button>
          </div>
        </div>
        <div>
          <a href="https://www.bucketplace.com">회사소개</a>
          <a href="https://www.bucketplace.com/careers">채용정보</a>
          <a href="https://ohou.se/usepolicy">이용약관</a>
          <a href="https://ohou.se/customer_notices">공지사항</a>
          <a href="https://ohou.se/privacy">개인정보 처리방침</a>
          <a href="https://sites.google.com/bucketplace.net/safety/%ED%99%88">안전거래센터</a>
          <a href="https://www.partnerbucketplace.com/ecd6b28c-88fb-4d8d-b69b-c2a100114ecb">입점신청</a>
          <a href="https://ohou.se/contacts/new?type=request">제휴/광고 문의</a>
          <a href="https://ohou.se/contacts/b2b">사업자 구매 회원</a>
          <a href="https://pro.ohou.se/?utm_source=ohouse&utm_medium=web&utm_campaign=prosignup&utm_content=footer">시공파트너 안내</a>
          <a href="https://ohouse-ad.oopy.io">상품광고 소개</a>
          <a href="https://ohou.se/contacts/new">고객의 소리</a>
        </div>
        <hr/>
        <div>회사 정보  영역</div>
      </div>
    </footer>
  )
}

export default Footer

