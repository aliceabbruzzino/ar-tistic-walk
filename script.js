window.onload = () => {
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