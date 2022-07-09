
for (const iterator of document.getElementsByClassName("nome-char")) {
    iterator.innerHTML = iterator.innerHTML.slice(0, -4);
}

for (const iterator of document.getElementsByClassName("restart")) {
    iterator.onclick = async function () {
        await fetch(location + "&delete=yes").then((params) => {
            if (params.status == 200) {
                window.location.reload(true)
            } else {
                alert("Erro: não deu para deletar sua sala")
                params.text().then((text) => {
                    alert(text)
                })
            }
        })

    }
}

ws = new WebSocket("ws://"+window.location.host + "/status" + window.location.search); 
ws.onmessage = function(e) { 
    document.getElementsByClassName("numDead")[0].innerHTML = "O seu oponente ainda tem: " + atob(e.data);
}

for (const iterator of document.getElementsByClassName("pic")) {
    iterator.onclick = function () {
        if (iterator.style.webkitFilter == "grayscale(1)") {
            iterator.style.webkitFilter = "grayscale(0)";
            iterator.style.filter = "grayscale(0)";
        } else {
            iterator.style.webkitFilter = "grayscale(1)";
            iterator.style.filter = "grayscale(1)";
        }
        ws.send(btoa(function () {
            let count = 0;
            for (const iterator of document.getElementsByClassName("pic")) {
                if (iterator.style.filter == "grayscale(1)") {
                    count = count + 1;
                }
            }
            return document.getElementsByClassName("pic").length - count
        }()));
    };
}

