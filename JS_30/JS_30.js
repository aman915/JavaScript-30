const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelectorAll(".score");
const moles = document.querySelectorAll(".mole");
let timeup = false;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randHole(holes) {
  const idx = Math.round(Math.random() * holes.length);
  const hole = holes[idx];
  return hole;
}

function peep() {
  const time = randTime(200, 1000);
  const hole = randHole(holes);
  hole.classList.add("up");
  setTimeout(function() {
    hole.classList.remove("up");
    if(!timeup)
    peep();
  }, time);
}
