const button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    document.body.style.backgroundColor = randomColorGenerator();
});

function randomColorGenerator () {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}