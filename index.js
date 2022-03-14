
var id, target, options;

function success(pos) {
  var crd = pos.coords;
  var ARObjects = [
    "<a-entity gltf-model='#Living_bridge' gps-entity-place='latitude:52.676577; longitude:-8.570377;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity gltf-model='#Library' gps-entity-place='latitude:52.673542; longitude:-8.572933;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity gltf-model='#HS_building' gps-entity-place='latitude:52.678524; longitude:-8.568776;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity gltf-model='#Foundation_building' gps-entity-place='latitude:52.674187; longitude:-8.573059;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity gltf-model='#CSIS_building' gps-entity-place='latitude:52.6740671; longitude:-8.575271;' scale='50 50 50' animation-mixer animation-loop> </a-entity>"

  ]

  // latitude: 52.674083, longitude: -8.575815

  ARObjects.forEach((htmlString, index) => {
    if ((target[index].latitude <= (crd.latitude + 0.0001) && target[index].latitude >= (crd.latitude - 0.0001)) && (target[index].longitude <= (crd.longitude + 0.0001) && target[index].longitude >= (crd.longitude - 0.0001))) {

      document.getElementById("renderer").outerHTML = htmlString;
      return;
    }
  });
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = [
  { latitude: 52.676577, longitude: -8.570377 },
  { latitude: 52.673542, longitude: -8.572933 },
  { latitude: 52.678524, longitude: -8.568776 },
  { latitude: 52.674187, longitude: -8.573059 },
  { latitude: 52.6740671, longitude: -8.575271 }
];

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);