import { useRef, useState } from 'react';

function IntroEditor() {
  // input 요소를 기억할 ref를 만드세요
  const inputRef = useRef(null);
  const [intro, setIntro] = useState('');

  const focusInput = () => {
    // 버튼을 누르면 input에 커서를 놓는 함수를 작성하세요
    inputRef.current.focus();
  };

  return (
    <div>
      {/* input의 값은 intro 상태와 연결되어야 합니다 */}
      {/* 입력이 바뀔 때 intro 상태를 업데이트하세요 */}
      <input
        ref={inputRef}
        value={intro}
        onChange={(e) => {setIntro(e.target.value)}}
        placeholder="한 줄 소개를 입력하세요"
      />
      <button onClick={focusInput}>입력창으로 이동</button>

      {/* 입력한 자기소개를 여기 출력하세요 */}
      <p>자기소개: {intro}</p>
    </div>
  );
}

export default IntroEditor;
