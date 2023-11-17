let x = document.getElementById("shine");
let y = document.getElementById("peace")

function playAudio() {
    x.volume = 0.1;
    x.play();
    y.play();
  }
  
  function pauseAudio() {
    x.pause();
    y.pause();
  }

  function muteAudio(){
    if (x.volume == 0.1){
      x.volume = 0;
    } else {
      x.volume = 0.1;
    }
  }
