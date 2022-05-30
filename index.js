/*
-webkit-filter: grayscale(1);
    filter: grayscale(1);
*/


function grayscale(element) {
    if (element.style.webkitFilter == "grayscale(1)") {
        element.style.webkitFilter = "grayscale(0)";
        element.style.filter = "grayscale(0)";
    } else {
        element.style.webkitFilter = "grayscale(1)";
        element.style.filter = "grayscale(1)";
    }
}

var intervalId = setInterval(function() {
    dead = 0;
    allImages = document.getElementsByClassName("pic");
    for (let index = 0; index < allImages.length; index++) {
        dead += allImages[index].style.webkitFilter == "grayscale(1)";
    }
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/status?" + document.URL.toString().slice(document.URL.lastIndexOf("sala=")));
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.getElementsByClassName("numDead")[0].innerHTML = "O seu oponente ainda tem: " + xhr.responseText;
        }
    };

    let data = allImages.length - dead;

    xhr.send(data);
  }, 1000);