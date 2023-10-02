const board = document.querySelector("#board");
const SQUARS_NUMBER = 2000;

for (let i = 0; i < SQUARS_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  board.append(square);
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
}

function setColor(square) {
  let color = getRandomColor(colors);
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(square) {
  square.style.backgroundColor = "#1d1d1d";
   square.style.boxShadow = "0 0 2px #000";
}

function getRandomColor(colors) {
  let IndexOfColor = Math.floor(Math.random()*colors.length);
  return colors[IndexOfColor];
}


function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colors = [];
for (let i = 0; i < 200; i++) {
  const randomColor = generateRandomColor();
  colors.push(randomColor);
}

console.log(colors);
