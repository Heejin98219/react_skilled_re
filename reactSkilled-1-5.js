// useRef
// const ref = useRef(초기값);
// 렌더링이 발생하지 않음
// current를 가지고 있는 객체
// 컴포넌트가 계속 렌더링 돼도 값을 유지함
// useState처럼 저장 공간의 역할을 함
// 선언한 값은 DOM요소에 접근하는 역할을 함
// current를 통해서 접근

{
  /* <div>
        state 영역입니다. {count} <br />
        <button onClick={plusStateCountBtnHandler}>state증가</button>
      </div>
      <div>
        ref 영역입니다. {countRef.current} <br />
        <button onClick={plusRefCountBtnHandler}>ref 증가</button>
      </div>
    </div> */
}

// ref버튼을 아무리 클릭해도
// ref의 숫자는 변하지 않지만
// state의 버튼을 클릭하면
// state의 숫자가 1로 변하면서 ref숫자도 변한다.
