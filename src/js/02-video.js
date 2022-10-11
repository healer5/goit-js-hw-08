import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PLAYER_CURENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(timeUpDate, 1000));
function timeUpDate(data) {
  localStorage.setItem(PLAYER_CURENT_TIME, data.seconds);
}

player.setCurrentTime(localStorage.getItem(PLAYER_CURENT_TIME));
