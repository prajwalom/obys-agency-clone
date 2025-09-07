gsap.from(".line h1", {
    y:100,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
})


//

let h5Timer = document.getElementById("loader-h5")
let increase = 0
setInterval(function() {
    if(increase<100) {
        h5Timer.innerHTML = increase++
    } else

    h5Timer.innerHTML = increase

}, 35)