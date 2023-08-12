// script.js
const songList = document.getElementById("songList");
const audioPlayer = document.getElementById("audioPlayer");

songList.addEventListener("click", playSong);

function playSong(event) {
  const target = event.target;
  if (target.tagName === "LI") {
    const songSrc = target.getAttribute("data-src");
    audioPlayer.src = songSrc;
    audioPlayer.play();
  }
}
