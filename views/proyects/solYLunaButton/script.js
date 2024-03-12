const esfera = document.querySelector(".esfera");

let fondo = document.querySelector(".background")
let estrella = document.querySelector(".estrella");
let nube = document.querySelector(".nube")
let fondoEsfera = document.querySelector(".fondoEsfera");
let luna = document.querySelector(".luna")

esfera.addEventListener("click",()=>{
    fondo.classList.toggle("black");
    estrella.classList.toggle("newstar");
    nube.classList.toggle("down");
    fondoEsfera.classList.toggle("rigth")
    luna.classList.toggle("center");
})