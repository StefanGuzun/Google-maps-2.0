let map;

function placeMarker(location) {
  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
}


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
  });

  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
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
