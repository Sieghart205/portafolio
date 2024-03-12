ruta = "../../img";

gsap.from(".texto",{
    scale:0,
    duration:2,
})

let tween= gsap.from(".tecno",{
    duration:0.5,
    y:200,
    x:-5,
    opacity:0,
    stagger:0.25,
    delay:0.5,
    ease:"in",
})
