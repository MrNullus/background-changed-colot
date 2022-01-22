const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", () => {
    document.body.style.background = randomBg();
    color.innerText = randomBg();
});

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
