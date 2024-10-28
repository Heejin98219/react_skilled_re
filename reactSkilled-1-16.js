// react-router-dom
// 설치 방법
// 터미널에 yarn add react-router-dom 입력
// 브라우저에 url을 입력하고
// 원하는 페이지 컴포넌트로 이동하게 만드는 부분
// url 한 개당 페이지 컴포넌트를 매칭
// 한 개의 url을 Route라고 함

// 계층 구조
{
  /* <BrouserRouter>
  <Routes>{/* Route */
} /*</Routes>
/*</BrouserRouter>; */ /*}*/

// 라우트 (Route)
// 별도로 닫는 태그가 없음
// /> 이렇게 닫아주면 됨
// import 해야함

// path
// 첫 브라우저 뒤부터 싲가하는 경로를 명시

// useNavigate
// 다른 페이지로 이동시키고자 할 때 사용
// navigate(’url’)
// 훅은 아님

// Link
// a 태그의 기능을 대체하는 API

// 사용하는 이유
// (a 태그를 사용하면)
// 페이지를 이동하면서 브라우저가 새로고침되기 때문
// 리덕스나 useState를 통해 메모리상에 구축해놓은 모든 상태값이 초기화되기 때문
// 성능에 악역향을 줄 수 있기 때문
// 불필요한 움직이기 발생하기 때문
