var playlist = [
  {
    title: "Música 1",
    mp3: "msc/Magic-Coldplay.mp3"
  },
  {
    title: "Música 2",
    mp3: "msc/Alright Afrodite - Peach Pit.mp3"
  },
  {
    title: "Música 3",
    mp3: "msc/Orgasm of Death - The Growlers.mp3"
  },
  {
    title: "Música 4",
    mp3: "msc/Out Like a Light 2 -  The Honeysticks.mp3"
  },
  {
    title: "Música 5",
    mp3: "/msc/Show me How - Men I Trust.mp3"
  },
  {
    title: "Música 6",
    mp3: "/msc/"
  },
  {
    title: "Música 7",
    mp3: "/msc/"
  },
  {
    title: "Música 8",
    mp3: "/msc/"
  },
  {
    title: "Música 9",
    mp3: "/msc/"
  },
  {
    title: "Música 10",
    mp3: "/msc/"
  },
  
];


var currentSongIndex = 0;
var sound;

function loadSong(index) {
  if (sound) {
    sound.stop();
  }
  
  var currentSong = playlist[index];
  console.log("Carregando música:", currentSong.title);
  
  sound = new Howl({
    src: [currentSong.mp3],
    html5: true,
    onloaderror: function() {
      console.log("Erro ao carregar a música:", currentSong.title);
    }
  });
}

function togglePlay() {
  if (sound && sound.playing()) {
    sound.pause();
  } else {
    sound.play();
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(currentSongIndex);
  sound.play();
}

function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentSongIndex);
  sound.play();
}

loadSong(currentSongIndex);