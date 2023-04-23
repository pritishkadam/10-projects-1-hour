const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
const cancelNav = document.getElementById('cancelBtn');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

cancelNav.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});