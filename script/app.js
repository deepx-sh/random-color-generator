let btn = document.querySelector("button");
let box = document.querySelector(".generated");
let h1 = document.querySelector("h1");

btn.addEventListener("click", randomColor);

function randomColor() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;

  box.style.backgroundColor = `rgb(${r},${g},${b})`;
    h1.innerText = `rgb(${r},${g},${b})`;
    
    let lightText = (r * 299 + g * 587 + b * 114) / 1000;
    let p = document.querySelector('p');
    p.style.color = lightText > 125 ? "#000" : "#fff";
}
