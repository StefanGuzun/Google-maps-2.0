// This example requires the Drawing library. Include the libraries=drawing
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing">

let map;
let polygonsCoords = [];
const remove = document.querySelector('.remove');
const allClear = document.querySelector('.all-clear');

const easterEgg = document.querySelector(".easterEgg");
const easterTxt = document.querySelector(".easterTxt");
const easterEgg2 = document.querySelector(".easterEggSec");

const initMap = () => {

  const centerOfMap = new google.maps.LatLng(46.93542736234682, 28.935191192528553);
  const options = {
    center: centerOfMap,
    zoom: 8
  };

  map = new google.maps.Map(document.querySelector('#map'), options);

 let drawingManager = new google.maps.drawing.DrawingManager({
      drawingControl: true,
      drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.POLYGON,
          ],

      },
  });
  drawingManager.setMap(map);


//push 1 figure in an array
  google.maps.event.addListener(drawingManager, 'overlaycomplete', (event) => {
    polygonsCoords.push(event.overlay);
});


//clear one figure
allClear.addEventListener('click', () => {
  const lastOverlay = polygonsCoords.shift();
  if (lastOverlay) lastOverlay.setMap(null);
});

//remove line 
remove.addEventListener('click', () => {
  
});


}

window.initMap = initMap();

//gigachad
easterEgg.addEventListener("click", (e) => {
  easterTxt.innerHTML = "Alexandru";
  easterEgg2.src = "img/drianmalcolm-696x442.png"
})