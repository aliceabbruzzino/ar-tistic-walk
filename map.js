// MAP SCRIPT

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpY2VhYmJydXp6aW5vIiwiYSI6ImNrejAwajB5ZTB6bGsyb212NzNlNDQwenQifQ.iLWCm0d4W6_5wycJ2S7WRg';

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapboxgl.accessToken
});

var myIcon = L.icon({
    iconUrl: './icons/location1.svg',
    shadowUrl: './icons/location2.svg',

    iconSize:     [60, 95], // size of the icon
    shadowSize:   [80, 95], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [10, 62], // the same for the shadow
    popupAnchor:  [8, -73]  // point from which the popup should open relative to the iconAnchor
});

var myIconLocation = L.icon({
    iconUrl: './icons/location3.svg',
    shadowUrl: './icons/location2.svg',

    iconSize:     [60, 95], // size of the icon
    shadowSize:   [80, 95], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [10, 62], // the same for the shadow
    popupAnchor:  [8, -73]  // point from which the popup should open relative to the iconAnchor
});

var hsBuilding      = L.marker([52.678524, -8.568776], {icon: myIcon}).bindPopup('Art and Music Building'),
    livingBridge    = L.marker([52.676577, -8.570377], {icon: myIcon}).bindPopup('Living Bridge'),
    csBuilding      = L.marker([52.674083, -8.575815], {icon: myIcon}).bindPopup('Computer Science Building'),
    rsBuilding      = L.marker([52.673199, -8.577315], {icon: myIcon}).bindPopup('Rober Shuman Building'),
    fBuilding       = L.marker([52.674187, -8.573059], {icon: myIcon}).bindPopup('Foundation Builing'),
    library         = L.marker([52.673542, -8.572933], {icon: myIcon}).bindPopup('Glucksman Library');

var markers = L.layerGroup([hsBuilding, livingBridge, csBuilding, rsBuilding, fBuilding, library]);

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale = L.tileLayer(mbUrl, {id: 'mapbox/dark-v10', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
var streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
var satellite = L.tileLayer(mbUrl, {id: 'mapbox/satellite-streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

var map = L.map('map', {
    zoom: 15, 
    layers: [grayscale, markers]
});

map.locate({setView: true, maxZoom: 16});

var baseLayers = {
    'Grayscale': grayscale,  
    'Streets': streets,
    'Satellite': satellite    
};

var overlays = {
    'Markers': markers
};

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng, {icon: myIconLocation}).addTo(map).bindPopup("You are here").openPopup();
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);