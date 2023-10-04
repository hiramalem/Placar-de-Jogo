let countElBan = document.getElementById("resultadoB")

let countElOla = document.getElementById("resultadoO")

let countBan = 0
let countOla = 0


function golBan() {

    countBan += 1 
    countElBan.textContent = countBan
}

function golOla() {

    countOla += 1 
    countElOla.textContent = countOla
}

