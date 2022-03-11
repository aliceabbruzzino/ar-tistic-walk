var id, target, options;

function success(pos) {
  var crd = pos.coords;
  var ARobjects = [
    "<a-entity gltf-model='#Living_bridge' gps-entity-place='latitude:52.676577; longitude:-8.570377;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity gltf-model='#Library' gps-entity-place='latitude:52.673542; longitude:-8.572933;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity gltf-model='#HS_building' gps-entity-place='latitude:52.678524; longitude:-8.568776;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity gltf-model='#Foundation_building' gps-entity-place='latitude:52.674187; longitude:-8.573059;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity gltf-model='#CSIS_building' gps-entity-place='latitude:52.674083; longitude:-8.575815;' scale='50 50 50' animation-mixer animation-loop> </a-entity>"
  ]

  ARobjects.forEach((htmlString, index) => {
    if(target[index].latitude === crd.latitude && target[index].longitude === crd.longitude){

    document.getElementById("livingBridge").outerHTML = htmlString;
    document.getElementById("library").outerHTML = htmlString;
    document.getElementById("hsBuilding").outerHTML = htmlString;
    document.getElementById("foundationBuilding").outerHTML = htmlString;
    document.getElementById("csisBuilding").outerHTML = htmlString;

    }
  })
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = [
  {latitude: 52.676577, longitude: -8.570377},
  {latitude:52.673542, longitude:-8.572933},
  {latitude:52.678524, longitude:-8.568776},
  {latitude:52.674187, longitude:-8.573059},
  {latitude:52.674083, longitude:-8.575815}];

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);






/*window.onload = () => {
    // setTimeout(() => {
    let places = staticLoadPlaces();
    return renderPlaces(places);
    // }, 3000)

    function staticLoadPlaces() {
      return [{
        name: "CSIS",
        location: {
          lat: 52.674083, // change here latitude if using static data
          lng: -8.575815, // change here longitude if using static data
        }
      }];
    }

    function renderPlaces(places) {
      let scene = document.querySelector('a-scene');

      places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // add place name
        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', 'assets/CSIS_building/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '50 50 50');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
      });
    }
  }
  */