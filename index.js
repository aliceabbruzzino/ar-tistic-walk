// GEOLOCATION AND MODELS SCRIPT

var id, target, options;

// compares the coordinates and displays the correspondant model through id
function success(pos) {
  var crd = pos.coords;
  var ARObjects = [
    "<a-entity id='rederer' position='0 0 0' scale='0.5 0.5 0.5' gltf-model='#livingBridge' animation-mixer></a-entity>",
    "<a-entity id='rederer' position='0 0 0' scale='0.5 0.5 0.5' gltf-model='#library' animation-mixer></a-entity>",
    "<a-entity id='rederer' position='0 0 0' scale='0.5 0.5 0.5' gltf-model='#amBuilding' animation-mixer></a-entity>",
    "<a-entity id='rederer' position='0 0 0' scale='0.5 0.5 0.5' gltf-model='#csisBuilding' animation-mixer></a-entity>",
    "<a-entity id='rederer' position='0 0 0' scale='0.5 0.5 0.5' gltf-model='#foundationBuilding' animation-mixer></a-entity>",
    "<a-entity id='rederer' position='0 0 0' scale='0.5 0.5 0.5' gltf-model='#rsBuilding' animation-mixer></a-entity>"]

// displays the model with a 1s delay if the user is in a 11.1m range around the model's position
  ARObjects.forEach((htmlString, index) => {
    setTimeout(() => {
      if ((target[index].latitude <= (crd.latitude + 0.01) && target[index].latitude >= (crd.latitude - 0.01)) && (target[index].longitude <= (crd.longitude + 0.001) && target[index].longitude >= (crd.longitude - 0.001))) {

        document.getElementById("renderer").outerHTML = htmlString;
        document.getElementById("renderer").setAttribute("visibility", true);
      } else {
        document.getElementById("renderer").setAttribute("visibility", false);
      }
    }, 1000)
  });
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = [
  // real living bridge { latitude: 52.676577, longitude: -8.570377 },
  { latitude: 52.679236, longitude: -8.577019 },
  { latitude: 52.673542, longitude: -8.572933 }, // library
  { latitude: 52.678524, longitude: -8.568776 }, // amBuilding
  { latitude: 52.674187, longitude: -8.573059 }, // fBuilding
  { latitude: 52.674083, longitude: -8.575815 }  // csisBuilding
];


options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
