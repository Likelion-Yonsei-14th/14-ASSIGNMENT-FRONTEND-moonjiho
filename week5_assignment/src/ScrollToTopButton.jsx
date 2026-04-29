import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트를 추가해서 스크롤 위치를 감지하세요
    // 스크롤 위치가 300px을 넘으면 show를 true로 설정하세요
    // 깨끗하게 이벤트를 정리(clean-up)하는 것도 잊지 마세요
    const onScroll = () => {
        setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    // 화면을 맨 위로 부드럽게 이동시키세요
    window.scrollTo({top:0, behavior:'smooth'});
  };

  return (
    // show가 true일 때만 버튼을 보여주세요
    // 버튼을 누르면 scrollToTop 함수가 실행되어야 합니다
    <>
    {show && (<button onClick={scrollToTop}>ScrollToTop</button>)}
    </>
  );
}

export default ScrollToTopButton;
