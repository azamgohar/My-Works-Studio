function loading() {
    var tl = gsap.timeline()

    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    })
    tl.from("#yellow2", {
        top: "100%",
        delay: 0.25,
        duration: 0.7,
        ease: "expo.out"
    }, "anim")
    tl.to("#loader h1", {
        delay: 0.02,
        duration: 0.02,
        color: "black"
    }, "anim")
    tl.to("#loader", {
        display: "none"
    }, "anim")
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function loco() {

    document.querySelector("#footer #back_to_top").addEventListener("click", () => {
        scroll.scrollTo(0)
    })


    var elems = document.querySelectorAll(".elem")
    var page2 = document.querySelector("#page2")
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgimg = ele.getAttribute("data-img")
            page2.style.backgroundImage = `url(${bgimg})`
        })
    })
}

loco();

