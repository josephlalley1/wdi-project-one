const holes = document.querySelectorAll('.hole');
const moleScoreBoard = document.querySelector('.moleScore');
const moles = document.querySelectorAll('.mole');
const moleStartButton = document.getElementById('moleStartButton');
let timeRanOut = false;
let lastHole;

moleStartButton.addEventListener('click', startGame);

function setPopupInterval(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function chooseRandomHole(holes) {
  const i = Math.floor(Math.random() * holes.length);
  const chosenHole = holes[i];
  console.log(chosenHole);

  if (chosenHole === lastHole) {
    console.log('The same hole was chosen for this run of the function');
    return chooseRandomHole(holes);
  }
  lastHole = chosenHole;
  return chosenHole;
}

function makeMolePopup() {
  const molePopupInterval = setPopupInterval(200,1000);
  const holeToPopupIn = chooseRandomHole(holes);
  holeToPopupIn.classList.add('up');
  setTimeout(() => {
    holeToPopupIn.classList.remove('up');
    if (!timeRanOut) makeMolePopup();
  }, molePopupInterval);
}

function startGame() {
  moleScoreBoard.textContent = 0;
  makeMolePopup();
}

function moleGotSmacked(event) {
  console.log(event);
  moleScoreBoard.textContent++;
}

moles.forEach(mole => mole.addEventListener('click', moleGotSmacked));
