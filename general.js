// GENERAL APP SCRIPT

// CHANGE IMAGE + CAPTION + continue on the map
function changeImage() {
    if (image.getAttribute('src') == "./icons/begin_phone.svg") {
        image.src = "./icons/begin_map.svg";
        document.getElementById("caption").innerHTML="<h3>Starting</h3><p>To start, search on the map <br> the locations near you</p>";
    } else if (image.getAttribute('src') == "./icons/begin_map.svg") {
        image.src = "./icons/begin_eye.svg";
        document.getElementById("caption").innerHTML="<h3>Viewing</h3><p>Once you've reached the near location, <br> open the view page from the menu</p>";
    } else if (image.getAttribute('src') == "./icons/begin_eye.svg") {
        image.src = "./icons/begin_rocket.svg";
        document.getElementById("caption").innerHTML="<h3>Departure</h3><p>You are now ready to start seeing things <br> from another point of view</p>";
    } else {
        window.location="./map.html";
    }
}


