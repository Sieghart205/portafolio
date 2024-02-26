const b = document.getElementById("barras");
const nav = document.getElementById("nav");

let ruta = "img"

b.addEventListener("click",()=>{
    b.classList.toggle("activate")
    if(b.classList.contains("activate")){
        b.setAttribute("src",ruta+"/x.png")
        nav.classList.toggle("active")
    } else {
        b.setAttribute("src",ruta+"/barras.png");
        nav.classList.toggle("active")
    }
    
})