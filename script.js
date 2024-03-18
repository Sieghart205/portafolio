let tween = gsap.from(".text",{
    duration:0.5,
    y:200,
    x:-5,
    opacity:0,
    stagger:0.25,
    delay:0.5,
    ease:"in",
})

gsap.from("#nombre",{
    scale:0,
    y:-400,
    duration:0.5,
})

gsap.from("#img",{
    scale:0,
    duration:0.5,
})

gsap.from(".hero",{
    backgroundColor:"#615B6B",
    duration:2,
    delay:0.5,
})

gsap.to(".hero",{
    backgroundColor:"#8267AB",
    duration:2,
    ease:"linear",
    delay:0.5,
})

gsap.to("#img",{
    boxShadow:"1rem 1rem .5rem rgba(0,0,0,0.3)",
    duration:5,
    delay:0.5,
})

const f = document.getElementById("facebook");
const x = document.getElementById("x");
const p = document.getElementById("pinterest");

f.addEventListener("click",()=>{
    window.open("https://www.facebook.com/profile.php?id=100075133152053");
})

x.addEventListener("click",()=>{
    window.open("https://twitter.com/JeissonBenitez3")
})

p.addEventListener("click",()=>{
    window.open("https://co.pinterest.com/benitezortegajeisson/_created/")
})

window.addEventListener("scroll",()=>{
    let header = document.getElementById("header");
    header.classList.toggle("abajo",window.scrollY>0);
})