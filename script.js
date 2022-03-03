let firstLoc = true;

window.onload = () => {
    const camera = document.querySelector('a-camera');
    window.addEventListener("gps-camera-update-position", e => {
        if(firstLoc) {
			firstLoc = false;
            alert(`Got GPS: you are at: ${e.detail.position.longitude} ${e.detail.position.latitude}`);
            setPos(e.detail.position.longitude, e.detail.position.latitude);
        }
    });    
};

function setPos(longitude,latitude) {
        const box = document.createElement("a-box");
        box.setAttribute('scale', {
            x: 10, 
            y: 10,
            z: 10
        });
        box.setAttribute('material', {
            color: 'red'
        });
        box.setAttribute('gps-projected-entity-place', {
            latitude: latitude+0.0006,
            longitude: longitude-0.0005
        });
        const box2 = document.createElement("a-box");
        box2.setAttribute('scale', {
            x: 10, 
            y: 10,
            z: 10
        });
        box2.setAttribute('material', {
            color: 'yellow'
        });
        box2.setAttribute('gps-projected-entity-place', {
            latitude: latitude+0.0004,
            longitude: longitude-0.0001
        });
        const sceneEl = document.querySelector("a-scene");
        sceneEl.appendChild(box);
        sceneEl.appendChild(box2);
}