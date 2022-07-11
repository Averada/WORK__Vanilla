let mArea = document.querySelectorAll('.magnetic__area__circle');


mArea.forEach((area) => {
    function magnetic(e, target, movement = 1) {
        let boundingRect = area.getBoundingClientRect();
        let relX = e.pageX - boundingRect.left;
        let relY = e.pageY - boundingRect.top;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        gsap.to(target, {
            x: (relX - boundingRect.width / 2) * movement,
            y: (relY - boundingRect.height / 2 - scrollTop) * movement,
            ease: "power1",
            duration: 0.6
        });
    }

    function callMagnetic(e) {
        magnetic(e, area.firstElementChild);
    }

    area.addEventListener('mousemove', function(e) {
        callMagnetic(e);
    });

    area.addEventListener('mouseleave', function(e) {
        gsap.to(area.firstElementChild, {
            scale: 1,
            x: 0,
            y: 0,
            ease: "power3",
            duration: 0.6
        });
    });
})