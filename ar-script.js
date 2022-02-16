
window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};


// INSERT LOCATION INFORMATION HERE
function staticLoadPlaces() {
    return [
        {
            name: 'House',
            location: {
                lat: 52.679236,
                lng: -8.577019,
            }
        },
        {
            name: 'CSIS',
            location: {
                lat: 52.674151,
                lng: -8.575839,
            }
        }
    ];
}

// Populate a-scene in A-Frame HTML
function renderPlaces(places) {
    // create assets section
    let scene = document.querySelector('a-scene');
    let assets = document.createElement('a-assets');
    let assetItem1 = document.createElement('a-asset-item');
    let assetItem2 = document.createElement('a-asset-item');

    // if session storage has been set
    if (window.sessionStorage.getItem('librarybin') != null) {
        // read bin string from session storage and save as file
        const binStr = window.sessionStorage.getItem('librarybin');
        let binSeq = [];
        binSeq.push(binStr);
        const binFile = new File(binSeq, 'b.bin', {type: 'text/plain'});
        assetItem2.setAttribute('src',  URL.creategltfectURL(binFile));
    }

    if (window.sessionStorage.getItem('librarygltf') != null) {
        // read gltf string from session storage and save as file
        const gStr = window.sessionStorage.getItem('librarygltf');
        let gSeq = [];
        gSeq.push(gStr);
        const gFile = new File(gSeq, 'g.gltf', {type: 'text/plain'});
        assetItem1.setAttribute('src',URL.creategltfectURL(gFile));
    }

    // if session storage has failed to be set for some reason
    if (window.sessionStorage.getItem('librarybin') === null) {
        assetItem2.setAttribute('src',  'assets/library_3/library.bin');
    }

    if (window.sessionStorage.getItem('librarygltf') === null) {
        assetItem1.setAttribute('src',  'assets/library_3/library.gltf');
    }

    assetItem1.setAttribute('id', 'gltf');
    assetItem1.setAttribute('crossOrigin', 'anonymous');

    assetItem2.setAttribute('id', 'bin');
    assetItem2.setAttribute('crossOrigin', 'anonymous');

    assets.appendChild(assetItem1);
    assets.appendChild(assetItem2);
    scene.appendChild(assets);

    // create entity section
    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);


        model.setAttribute('gltf-model', "gltf: #gltf; bin: #bin");
        model.setAttribute('rotation', "0 310 0");


        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}