let songs=[
    {
        title:"Song One",file:"songs/Nijamellam Maranthu Pochu - MassTamilan.mp3",cover:"images/sk movie.webp"
    },

    {
        title:"Song Two",file:"songs/The One - Retro - MassTamilan.mp3",cover:"images/retro.webp"
    },

    {
        title:"song Three",file:"songs/Yean - MassTamilan.mp3",cover:"images/96.webp"
    }    
];
let current=0;
let isPlaying=false;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const playButton = document.querySelector(".controls button:nth-child(2)");

function loadSong(index) {
  title.textContent = songs[index].title;
  audio.src = songs[index].file;
  cover.src = songs[index].cover;
}

function playPause() {
  if (isPlaying) {
    audio.pause();
    playButton.textContent = "▶️";
  } else {
    audio.play();
    playButton.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  current = (current + 1) % songs.length;
  loadSong(current);
  if (isPlaying) audio.play();
}

function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  if (isPlaying) audio.play();
}

// Load the first song on page load
loadSong(current);