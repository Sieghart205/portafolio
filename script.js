let tween = gsap.from(".text",{
    duration:0.5,
    y:200,
    scale:0,
    stagger:0.25,
    delay:0.5,
})

gsap.from(".hero",{
    backgroundColor:"#615B6B",
    duration:2
})

gsap.to(".hero",{
    backgroundColor:"#8267AB",
    duration:2,
    ease:"linear"
})

gsap.to("#img",{
    boxShadow:"1rem 1rem .5rem rgba(0,0,0,0.3)",
    duration:5,
    
})

const ws = document.getElementById("whatsapp");

ws.addEventListener("click",()=>{
    window.open("https://wa.me/573226508681")
})