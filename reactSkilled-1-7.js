// 리렌더링의 발생 조건
// 1.컴포넌트의 state가 변경됐을 때
// 2.컴포넌트가 내려받은 props가 변경됐을 때
// 3.부모 컴포넌트가 리렌더링 된 경우 모든 자식 컴포넌트

// 최적화
// 리렌더링이 빈번하게 일어난다는 것은 좋은 것이 아님

// 리렌더링이 발생하지 않도록 최적화 하는 방법
// memo 사용법
// 1.memo(React.memo): 컴포넌트를 캐싱
// 2.useCallback: 함수를 캐싱
// 3 useMemo: 값을 캐싱

// memo(React.memo)
// 1.React.memo(컴포넌트명)
// 2.memo를 임포트해서 사용할 수 있음
// 3.부모가 리렌더링 되면 자식이 리렌더링 됨

// useCallback
// 1.const 함수명 = useCallback()) => {}
// 2.hook임
// 3.컴포넌트를 memoization 하는 것이 아님
// 4.함수 자체를 기억하는 것임

// as-is
// const value = 반환할_함수();

// // to-be
// const value = useMemo(() => {
//   return 반환할_함수();
// }, [dependencyArray]);
// dependencyArray의 값이 변경될 때만
// 반환할_함수()가 호출된다.
// 그 외에는 memoization 해놨던 값을 가져온다.
