const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const detail = document.getElementById('detail');
const intro = document.getElementById('intro');
const greetingText = document.getElementById('greetingText');
const myName = '문지호';

nameForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const name = nameInput.value.trim();
    
    if (name === myName) {
        detail.classList.remove('hidden');
        intro.classList.toggle('hidden');
        greetingText.innerText = '정답입니다!\n우측 상단을 확인해주세요!';
    } else {
        alert('오답입니다!\n(Hint: 좌측 상단)')
    }
})