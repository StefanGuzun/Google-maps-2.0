let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.010452, lng: 28.863810 },
    zoom: 8,
  });
}

window.initMap = initMap();

const easterEgg = document.querySelector(".easterEgg");
const easterTxt = document.querySelector(".easterTxt");
const easterEgg2 = document.querySelector(".easterEggSec");

easterEgg.addEventListener("click", (e) => {
  easterTxt.innerHTML = "Alexandru";
  easterEgg2.src = "img/drianmalcolm-696x442.png"
})
