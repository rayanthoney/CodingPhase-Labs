let tl = gsap.timeline()
tl.fromTo('.logo', {
    x: -200,
    opacity: 0,
},
{
    x: 0,
    opacity: 1,
    delay: .5,
    duration: 1.3,
}
).fromTo('.menu', {
    x: 200,
    opacity: 0,
},
{
    x: 0,
    opacity: 1,
    delay: .5,
    duration: 1.3,
},
    ">-1.8"
)
.fromTo('.girl', {
    height: 0,
},
{
    height: 600,
    duration: 1.4,
    ease: Power2.inOut
}
);