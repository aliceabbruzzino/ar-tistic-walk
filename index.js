var id, target, options;

function success(pos) {
  var isRendered = false;
  var crd = pos.coords;
  var coords= [];
  // var ARobjects = [
  //   "<a-entity gltf-model='#Living_bridge' gps-entity-place='latitude:52.679; longitude:-8.577;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
  //   "<a-entity gltf-model='#Library' gps-entity-place='latitude:52.673542; longitude:-8.572933;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
  //   "<a-entity gltf-model='#HS_building' gps-entity-place='latitude:52.678524; longitude:-8.568776;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
  //   "<a-entity gltf-model='#Foundation_building' gps-entity-place='latitude:52.674187; longitude:-8.573059;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
  //   "<a-entity gltf-model='#CSIS_building' gps-entity-place='latitude:52.674083; longitude:-8.575815;' scale='50 50 50' animation-mixer animation-loop> </a-entity>"
  // ]
 var ARTags = document.getElementsByTagName("a-entity");
//  console.log(ARTags);
 for(let tag of ARTags){
   coords.push(tag.getAttribute('gps-entity-place'));
 }
  coords.forEach((target, index) => {
     var distance = Math.sqrt(Math.pow((target.latitude - crd.latitude),2)+ Math.pow((target.longitude - crd.longitude),2));
      distance*=111111;
       
     if(distance <=10){
       ARTags[index].setAttribute("visible",true);
       }
       else ARTags[index].setAttribute("visible",false);
     });


    // }
    // console.log(distance*111111);
  // })
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

// target = [
 
//   { latitude: 52.6740806, longitude: -8.5753032 },
//   { latitude: 52.673542, longitude: -8.572933 },
//   { latitude: 52.678524, longitude: -8.568776 },
//   { latitude: 52.674187, longitude: -8.573059 },
//   { latitude: 52.674083, longitude: -8.575815 }];

options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);





/*
var id, target, options;

function success(pos) {
  var crd = pos.coords;
  var ARObjects = [
    "<a-entity id='renderer' gltf-model='#Living_bridge' gps-projected-entity-place='latitude: 52.679236; longitude: -8.577019;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity id='renderer' gltf-model='#Library' gps-projected-entity-place='latitude:52.673542; longitude:-8.572933;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity id='renderer' gltf-model='#HS_building' gps-projected-entity-place='latitude:52.678524; longitude:-8.568776;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity id='renderer' gltf-model='#Foundation_building' gps-projected-entity-place='latitude:52.674187; longitude:-8.573059;' scale='50 50 50' animation-mixer animation-loop> </a-entity>",
    "<a-entity id='renderer' gltf-model='#CSIS_building' gps-projected-entity-place='latitude:52.674083; longitude:-8.575815;' scale='50 50 50' animation-mixer animation-loop> </a-entity>"
  ]

  ARObjects.forEach((htmlString, index) => {
    if ((target[index].latitude <= (crd.latitude + 0.001) && target[index].latitude >= (crd.latitude - 0.001)) && (target[index].longitude <= (crd.longitude + 0.001) && target[index].longitude >= (crd.longitude - 0.001))) {

      document.getElementById("renderer").outerHTML = htmlString;
      document.getElementById("renderer").setAttribute("visibility", true);
    } else {
      document.getElementById("renderer").setAttribute("visibility", false);
    }
  });
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = [
  //{ latitude: 52.676577, longitude: -8.570377 },
  { latitude: 52.679236, longitude: -8.577019 },
  { latitude: 52.673542, longitude: -8.572933 },
  { latitude: 52.678524, longitude: -8.568776 },
  { latitude: 52.674187, longitude: -8.573059 },
  { latitude: 52.674083, longitude: -8.575815 }
];

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
*/