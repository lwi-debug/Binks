function play(idPlayer) {

  let player = document.querySelector('#' + idPlayer);

  if(player.paused){
    player.play();
  }
  else{
    player.pause();
  }
}

function resume(idPlayer) {

    let player = document.querySelector('#' + idPlayer);

    player.currentTime = 0;
    player.pause();
}

document.addEventListener('play', function(e){
    let audios = document.getElementsByTagName('audio');
    for(let i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){audios[i].pause();}}}, true);

function update(player) {

  let barre = player.parentNode;

  let duree = player.duration;
  let temps = player.currentTime;
  let fraction = temps/duree;
  let pourcentage = fraction*100;

  barre.style.width = pourcentage + '%';

  timer = document.getElementById('progression');

  var mins = Math.floor(player.currentTime / 60);
  var secs = Math.floor(player.currentTime % 60);
  if (secs < 10) {
      secs = '0' + String(secs);
  }
  timer.innerHTML = mins + ':' + secs;
}