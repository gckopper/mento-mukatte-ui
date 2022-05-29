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