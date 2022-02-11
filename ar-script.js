/*window.onload = () => {                       
    navigator.geolocation.getCurrentPosition((position) => {
    document.querySelector('a-text').setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
  });
 }*/

 window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
      {
          name: 'yellow-thomond',
          location: {
              lat: 52.679039,
              lng: -8.576036,
          }
      },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector('a-box');

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    /*let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);*/
    
      let box = document.createElement('a-box');
          box.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
          box.setAttribute('a-box');
          box.setAttribute('material', 'yellow');
          box.setAttribute('rotation', '0 180 0');
          box.setAttribute('animation-mixer', '');
          box.setAttribute('scale', '1 1 1');

          box.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
          });

          scene.appendChild(box);      

    });
}