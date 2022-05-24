let map;
let poly;
// let lines = []
const removeMarker = document.querySelector('.remove');
const allClear = document.querySelector('.all-clear');


//placeMarker
function placeMarker(location) {
  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

//map
function initMap() {
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
  });

  //lines
  poly = new google.maps.Polyline({
    strokeColor: "#000000",
    strokeOpacity: 1.0,
    strokeWeight: 3,
  });
  poly.setMap(map);
  // Add a listener for the click event
  map.addListener("click", addLatLng);
}
// Handles click events on a map, and adds a new point to the Polyline.
function addLatLng(event) {
  const path = poly.getPath();
  path.push(event.latLng);

 
  
  // Add a new marker at the new plotted point on the polyline.
  new google.maps.Marker({
    position: event.latLng,
    title: "#" + path.getLength(),
    map: map,
  });

  //placeMarker
  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
  });

  //removeMarker
allClear.addEventListener('click', (e) => {
   path.pop();
   
  // console.log(path)
});

  
}




window.initMap = initMap();


//gigachad
const easterEgg = document.querySelector(".easterEgg");
const easterTxt = document.querySelector(".easterTxt");
const easterEgg2 = document.querySelector(".easterEggSec");
easterEgg.addEventListener("click", (e) => {
  easterTxt.innerHTML = "Alexandru";
  easterEgg2.src = "img/drianmalcolm-696x442.png"
})
