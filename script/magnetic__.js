let mArea = document.querySelector('.magnetic__area__circle');

function parallaxIt(e, target, movement = 1) {
    let boundingRect = mArea.getBoundingClientRect();
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

function callParallax(e) {
    parallaxIt(e, '.magnetic__content');
}


mArea.addEventListener('mousemove', function(e) {
    callParallax(e);
});

mArea.addEventListener('mouseleave', function(e) {
    gsap.to('.magnetic__content', {
        scale: 1,
        x: 0,
        y: 0,
        ease: "power3",
        duration: 0.6
    });
});