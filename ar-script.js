window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
 return [
     {
         name: 'Tree',
         location: {
             lat: 52.679039,
             lng: -8.576036,
         }
     },
 ];
}

function renderPlaces(places) {
 let scene = document.querySelector('a-scene');

 places.forEach((place) => {
     let latitude = place.location.lat;
     let longitude = place.location.lng;

     let model = document.createElement('a-entity');
     model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
     model.setAttribute('gltf-model', 'assets/low_poly_pine/scene.gltf');
     model.setAttribute('rotation', '0 180 0');
     model.setAttribute('animation-mixer', '');
     model.setAttribute('scale', '0.5 0.5 0.5');

     model.addEventListener('loaded', () => {
         window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
     });

     scene.appendChild(model);
 });
}