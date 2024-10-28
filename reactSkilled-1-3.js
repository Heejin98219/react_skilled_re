// useState
// const [상태 변수, 상태 변경 함수] = useState(초기 값);
// 함수형 컴포넌트에서 가변적인 상태를 가지게 함

// 함수형 컴포넌트
// setCount(() => {})
// 상태 변경 함수( = 함수)로 값을 변경시킬 수 있음
// 함수의 인자(매개변수)에는 현재 state를 가져올 수 있음
// 중괄호에는 변경할 코드를 입력하면 됨
// 반복적인 욘청을 실행해야 할 때 사용하는 것이 좋음

// 배치 업데이트 (Batch Update):
// 더 나은 성능을 위해 여러 state 업데이트를
// 하나의 리렌더링으로 묶는 것

// 배치 업데이트는
// const [count, setCount] = useState(0);
// <button
//   onClick={() => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   }}
// >
//   증가
// </button>;
// 이 코드들은 동일 요청으로 판단되어
// 한 번만 실행된다.
// 그래서 100번, 1000번 입력해도 한 번 실행하지만

// 함수형 업데이트로
{
  /* <button
  onClick={() => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }}
>
  증가
</button>; */
}
// 이렇게 (함수형 업데이트로) 입력한다면
// 순차적으로 명령을 실행하게 된다.
// (prev는 초기값이고
// 이름은 prev가 아니어도 된다.)
// 순서는
// 맨 처음 prev값이 0인데
// prev + 1을 통과해 1이 된다.
// 그럼 1이 그대로 두번째 prev로 내려가 prev + 1을 통과해
// 2가 되고 또 prev + 1을 만나 3이 되어 return이 되는 것이다.
