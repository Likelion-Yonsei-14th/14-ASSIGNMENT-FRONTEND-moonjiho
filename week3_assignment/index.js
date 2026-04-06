const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const detail = document.getElementById('detail');
const intro = document.getElementsByClassName('Intro')[0];
const myName = '문지호';

nameForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const name = nameInput.value.trim();
    
    if (name === myName) {
        detail.classList.remove('hidden');
        intro.classList.toggle('hidden');
        alert('정답입니다! 우측 상단을 확인해주세요!');
    } else {
        alert('오답입니다! 좌측 상단을 확인해주세요!')
    }
})