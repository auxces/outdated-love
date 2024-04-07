let x = document.getElementById("shine");
let y = document.getElementById("peace");
let z = 0;
let vol = 1

function starter(){
  x.volume = vol;
  y.volume = vol;
  x.play();
  y.play();
  document.getElementById('maincontent').className = 'slidein';
  document.getElementById('angels').className = 'slidein';
  document.getElementById('toxic').className = 'revslidein';
  document.getElementById('sins').className = 'revslidein';
}

function playAudio() {
  x.volume = vol;
  y.volume = vol;
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
  if (x.volume > 0){
    x.volume = 0;
  } else {
    x.volume = vol;
  }
}

function muteVideo(){
  if (y.volume > 0){
    y.volume = 0;
  } else {
    y.volume = vol;
  }
}

  //disable right click just cause y not 
document.addEventListener('contextmenu', event => event.preventDefault());

let main = document.getElementById("maincontent");
let gif = document.getElementById("toxic");
let quote = document.getElementById("angels");
let splash = document.getElementById("sins");
let hidden = 0;


function hideForeground(){
  if(hidden == 0){
    main.style.display = 'none';
    gif.style.display = 'none';
    quote.style.display = 'none';
    splash.style.display = 'none';
    y.style.opacity = "1";
    hidden = 1
  }
  else{
    main.style.display = 'flex';
    gif.style.display = 'inline';
    quote.style.display = 'flex';
    splash.style.display = 'inline';
    y.style.opacity = "0.27";
    hidden = 0
  }
}