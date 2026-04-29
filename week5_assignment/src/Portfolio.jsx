import { useState } from 'react';
import babyLion from './assets/babylion.avif'
import yonsei from './assets/yonsei.png'
import contact from './assets/contact.jpg'
import laptop from './assets/laptop.png'
import github from './assets/github.svg'
import IntroEditor from './IntroEditor'

function Portfolio() {
  // 상태를 만들어 현재 탭을 기억하세요
  const [tab, setTab] = useState('about'); // 초기값은 'about'

  return (
    <div>
      {/* 버튼을 누르면 탭 상태를 변경하세요 */}
      <div className='Title'>
        <span className='MainTitle'>문지호</span>
        <div className='SubTitle'>
            <button onClick={() => setTab('about')}>About</button>
            <button onClick={() => setTab('projects')}>Projects</button>
        </div>
      </div>
      <IntroEditor></IntroEditor>

      {/* 현재 탭에 따라 다른 내용을 보여주세요 */}
      {/* 예: tab이 'about'이면 소개 내용 표시 */}
      {/* 예: tab이 'projects'면 프로젝트 내용 표시 */}
      {tab == 'about' && (
        <>
        <div className="Container">
            <div className="Likelion">
                <img src={babyLion} />
                <div>
                <p>14기 아기사자<br></br>프론트엔드</p>
                </div>
            </div>
            <div className="Yonsei">
                <img src={yonsei} />
                <div>
                <p>연세대학교 컴퓨터과학과<br></br>2023148085</p>
                </div>
            </div>
            <div className="Contact">
                <img src={contact} />
                <div>
                <p>Tel: 010-2933-5563<br></br>Email: moonjiho0706@yonsei.ac.kr<br></br>Instagram: <a href="https://www.instagram.com/jiho_76/">@jiho_76</a></p>
                </div>
            </div>
            <div className="Interested">
                <img src={laptop} />
                <div>
                <p>[관심분야]<br></br>프론트엔드 개발<br></br>AI<br></br>스포츠 데이터 분석</p>
                </div>
            </div>
        </div>
        </>
      )}
      {tab == 'projects' && (
        <>
        <div class="Container">
            <div class="Github">
                <img src={github} />
                <div>
                <p><a href='https://github.com/j-hmoon'>github.com/j-hmoon</a></p>
                </div>
            </div>
        </div>
        </>
      )}
    </div>
  );
}

export default Portfolio;
