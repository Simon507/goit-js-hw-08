import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';
var throttle = require('lodash/throttle');

updateOutput();

function updateOutput() {
  const getTimeJSON = localStorage.getItem(TIME_KEY);
  try {
    const getTime = JSON.parse(getTimeJSON);
    if (!getTime) {
      return;
    }
    player.setCurrentTime(getTime);
  } catch (error) {
    // console.log(error.name); // "SyntaxError"
    // console.log(error.message); // Unexpected token W in JSON at position 0
  }
}

player.on(
  'timeupdate',
  throttle(PlayerDuration => {
    localStorage.setItem(TIME_KEY, JSON.stringify(PlayerDuration.seconds));
  }, 1000)
);
