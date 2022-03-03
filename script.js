function getLocation() {
  if (navigator.geolocation) {
    function renderPlaces(places) {
      let scene = document.querySelector('a-scene');

      places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // add place name
        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${52.6740563}; longitude: ${-8.575226};`);
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
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
  