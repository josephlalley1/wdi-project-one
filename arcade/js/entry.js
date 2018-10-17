const snakeContent = document.getElementsByClassName('hideSnakeContent')[0];
const moleContent = document.getElementsByClassName('hideMoleContent')[0];
const entryContent = document.getElementsByClassName('hideEntryContent')[0];
const moleContentButton = document.getElementById('wamButton');
const snakeContentButton = document.getElementById('snakeButton');
const audio = document.getElementById('audio');

entryContent.style.display = 'block';

moleContent.style.display = 'none' ;

snakeContent.style.display = 'none';

function showMoleContent() {
  audio.src = './sounds/powerup.wav';
  audio.play();
  entryContent.classList.add('bounceOut');
  setTimeout(function() {
    entryContent.style.display = 'none';
    moleContent.style.display = 'block';
  }, 700);
}

moleContentButton.addEventListener('click', showMoleContent);

function showSnakeContent() {
  audio.src = './sounds/powerup.wav';
  audio.play();
  entryContent.classList.add('bounceOut');
  setTimeout(function() {
    entryContent.style.display = 'none';
    snakeContent.style.display = 'block';
  }, 700);
}

snakeContentButton.addEventListener('click', showSnakeContent);
