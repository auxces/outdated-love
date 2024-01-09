let x = document.getElementById("shine");
let y = document.getElementById("peace");
let z = 0;

function playAudio() {
    x.volume = 0.1;
    y.volume = 0.1;
    x.play();
    y.play();
  }
  
  function pauseAudio() {
    if (z == 0){
      x.pause();
      y.pause();
      z = 1;
    }
    else{
      x.play();
      y.play();
      z = 0;
    }
    
  }

  function muteAudio(){
    if (x.volume == 0.1){
      x.volume = 0;
    } else {
      x.volume = 0.1;
    }
  }

  function muteVideo(){
    if (y.volume == 0.1){
      y.volume = 0;
    } else {
      y.volume = 0.1;
    }
  }
  
  //disable right click just cause y not 
 // document.addEventListener('contextmenu', event => event.preventDefault());