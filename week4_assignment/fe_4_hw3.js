const toggleBtn = document.getElementById('toggleBtn');
const contentBox = document.getElementById('contentBox');

toggleBtn.addEventListener('click', ()=>{
    contentBox.classList.toggle('hidden');

    if (contentBox.classList.contains('hidden')) {
        toggleBtn.innerText = 'Show Content';
    } else {
        toggleBtn.innerText = 'Hide Content';
    }
});