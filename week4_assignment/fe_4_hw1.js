const title = document.getElementById('title');
const select = document.getElementById("colorSelect");
select.addEventListener('change', ()=> {
    const color = select.value;
    title.style.color = color;
});
