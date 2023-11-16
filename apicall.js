//TEMPLATE

document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    if (!event.target.matches("#splashscreen")) return;

fetch("https://www.steamwebapi.com/steam/api/profile?key=OMCUEBR0GGTB6XAD&id=coenum&no_cache=1")
.then((response) => response.json())
.then((data) => renderProfile(data))
.catch(() => renderError());
});

function renderProfile(data) {
// Get text elements
const personaname = document.getElementById("namesteam");
const personastate = document.getElementById("statussteam");
const avatarfull = avafull;
document.getElementById("davi").src = avafull;
const error = document.getElementById("error");

error.innerHTML = "";
setup.innerHTML = data.setup;
punchline.innerHTML = data.punchline;
}

function renderError() {
const error = document.getElementById("error");
error.innerHTML = "Whoops, something went wrong. Please try again later!";
}