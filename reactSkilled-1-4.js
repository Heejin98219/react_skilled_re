// useEffect
// useEffect (() => {})
// 컴포넌트가 렌더링 된 이후마다
// 특정 작업을 수행하게 하는 훅
// import 해야함
// 어떤 동작에 대한 트리거(trigger) 존재
// 컴포넌트가 보일 때, 보이지 않을 때,
// 계속 동작을 하기 때문에
// 컴포넌트의 라이프 사이클과 굉장한 밀접한 연관이 있음

// 의존성 배열
// 배열에 값을 넣으면 그 값이 변경될 때마다 useEffect 실행

// 클린 업(clean up) 함수
//  리소스를 정리할 때 사용
// 불필요한 메모리 누수를 방지하기 위해서 사용
// return문 다음에 함수를 넣어주면 됨
// const [value, setValue] = useState("");
// const [count, setCount] = useState(0);

// useEffect(() => {
//   console.log("hello useEffect");
// }, [count]);
// 이렇게 입력하면
// 아무리 인풋에 값을 입력해도
// 콘솔에 hello useEffect 라고 찍히지 않지만

// useEffect(() => {
//   console.log("hello useEffect");
// }, [count]);
// 라고 입력하면
// 배열에 들어간 값이 변경될 때 렌더링이 일어나기 때문에
// value가 바뀌었을 때는 아니지만
// count가 바뀌었을 때는 useEffect이 로직이 실행되어
// 콘솔창에 hello useEffect라고 찍히게 된다.

// useEffect는 배열에 들어간 값이 변경될 때마다 렌더링이 발생하고
// 배열 안에 state명이 있어서 변수명은 필요없다.
