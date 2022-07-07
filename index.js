
for (const iterator of document.getElementsByClassName("nome-char")) {
    iterator.innerHTML = iterator.innerHTML.slice(0, -4);
}

window.alive = document.getElementsByClassName("nome-char").length - 1;
ws = new WebSocket("ws://"+window.location.host + "/status" + window.location.search); 
ws.onmessage = function(e) { 
    document.getElementsByClassName("numDead")[0].innerHTML = "O seu oponente ainda tem: " + atob(e.data);
}

for (const iterator of document.getElementsByClassName("pic")) {
    iterator.onclick = function () {
        ws.send(btoa(window.alive--));
        if (iterator.style.webkitFilter == "grayscale(1)") {
            iterator.style.webkitFilter = "grayscale(0)";
            iterator.style.filter = "grayscale(0)";
        } else {
            iterator.style.webkitFilter = "grayscale(1)";
            iterator.style.filter = "grayscale(1)";
        }
    };
}

