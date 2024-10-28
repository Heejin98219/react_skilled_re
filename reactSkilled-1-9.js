// custom hooks
// (커스텀 훅의)함수 이름은 use로 시작하는 것이 좋음
// (커스텀 훅의) 파일 이름은 use로 시작할 필요는 없으며
// 원하는 대로 지정할 수 있음

// const App = () => {
//   // input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
//   const [title, setTitle] = useState("");
//   const onChangeTitleHandler = (e) => {
//     setTitle(e.target.value);
//   };

//   // input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
//   const [body, setBody] = useState("");
//   const onChangeBodyHandler = (e) => {
//     setBody(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="title"
//         value={title}
//         onChange={onChangeTitleHandler}
//       />
//       <input
//         type="text"
//         name="title"
//         value={body}
//         onChange={onChangeBodyHandler}
//       />
//     </div>
//   );
// };

//위의 코드는 input을 구현하고
// useState로 각 input의 value를 관리하는 코드 입니다.
// 하지만,
// input의 개수가 증가하면
// useState와 이벤트 핸들러도 같이 증가하고
// 그로 인해 코드의 중복이 생긴다는 점이다.
//  만약 input이 수십개가 되면
// 중복코드가 점점 더 많이 발생할 것이다.
