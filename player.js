let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let progress = document.getElementById("progress");

/* Check whether it's the "Play" icon or the "Pause" icon */
function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    /* Control changes the icon to "Play" */
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    /* Control changes the icon to "Pause" */
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
}

/* Update the song's progress value when it's loaded */
song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = 0;
};

/* Update the song's progress value continuously */
song.ontimeupdate = function() {
  progress.value = song.currentTime;
};

/* Update the song's current time when the progress bar is changed */
progress.oninput = function() {
  song.currentTime = progress.value;
};

/* Pause the song and reset the progress when it ends */
song.onended = function() {
  song.pause();
  song.currentTime = 0;
  ctrlIcon.classList.remove("fa-pause");
  ctrlIcon.classList.add("fa-play");
};