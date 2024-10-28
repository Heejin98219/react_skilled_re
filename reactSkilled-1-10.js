// redux (1)
// 전역 상태 라이브러리
// useContext와 유사
// useContext보다 더 많은 이점을 가짐
// 전역상태를 사용할 수 있음
// (전체 영역의 특정 경로나 위치에 있는
// store라는 개념에서 부터 데이터를 공유받음)

// 설치 방법
// yarn add redux react-redux
// yarn add redux 와
// yarn add react-redux와 같은 의미

// 지역 상태 (Local State)
// useState를 이용해 생성한 state
// 좁은 범위 안에서 생성된 state

// 전역 상태 (Global state)
// 컴포넌트에서 생성되지 않음
// 중앙화 된 특별한 곳에서 state들이 생성
// 중앙 state관리소
// 중앙 state관리소에서 state를 생성하고
// (만약 어떤 컴포넌트에서 state가 필요하다면
// 컴포넌트가 어디에 위치하고 있던 상관없이
// state를 불러와서 사용할 수 있게 됨)

// 사용 순서
// 1. rootReducer를 만들거예요.
// const rootReducer = combineReducers({});
// // 2. store을 생성
// const store = createStore(rootReducer);
// // 3. 만든 store을 내보낼거에요.
// export default store;

// 폴더 구조 생성하는 방법
// src폴더 안에 redux 폴더 생성
// redux 폴더 안에 config, modules 폴더 생성
// config폴더 안에 configStore.js 파일 생성

// 각 파일의 역할
// redux: 리덕스와 관련된 코드를 모두 모아 놓을 폴더
// config: 리덕스 설정과 관련된 파일들을 놓을 폴더
// configStore: “중앙 state 관리소" 인 Store를 만드는 설정 코드들이 있는 파일
// modules: 우리가 만들 State들의 그룹이라고 생각하면 됩니다.
// 예를 들어 `투두리스트`를 만든다고 한다면,
// 투두리스트에 필요한 `state`들이 모두 모여있을 `todos.js`를 생성하게 되텐데요,
//  이  `todos.js` 파일이 곧 하나의 모듈이 됩니다.
