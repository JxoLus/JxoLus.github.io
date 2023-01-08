let isPlayingNow = false;

const audio = new Audio("../mp3/Disfigure - Blank.mp3");

function musicPlay() {
  if (isPlayingNow === true) {
    audio.pause();
    document
      .querySelector(".main-tabs__music")
      .classList.remove("music-tab-background");
    isPlayingNow = false;
  } else {
    audio.play();
    document
      .querySelector(".main-tabs__music")
      .classList.add("music-tab-background");
    isPlayingNow = true;
  }
}

document
  .querySelector(".main-tabs__music")
  .addEventListener("click", musicPlay);
