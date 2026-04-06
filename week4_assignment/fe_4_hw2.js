const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const greetingText = document.getElementById('greetingText');

nameForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const name = nameInput.value;
    greetingText.innerText = `Welcome ${name}`;
})