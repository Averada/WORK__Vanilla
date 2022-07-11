gsap.registerPlugin(ScrollTrigger)

// background shadows

gsap.to(".parallax__layer__one", {
    y: 600,
    duration: 3,
    ease: "none",
    scrollTrigger: {
        trigger: ".parallax__layer__one",
        start: "top bottom",
        scrub: true
    },
});

// group one

gsap.to(".circle__hollow__large", {
    y: -800,
    ease: "none",
    scrollTrigger: {
        trigger: ".circle__hollow__large",
        start: "bottom bottom",
        scrub: true
    },
});

gsap.to(".circle__hollow__small", {
    y: -800,
    ease: "none",
    scrollTrigger: {
        trigger: ".circle__hollow__large",
        start: "bottom bottom",
        scrub: true
    },
});

gsap.to(".vector__diagonal__one", {
    y: -800,
    ease: "none",
    scrollTrigger: {
        trigger: ".circle__hollow__large",
        start: "bottom bottom",
        scrub: true
    },
});

gsap.to(".vector__diagonal__two", {
    y: -800,
    ease: "none",
    scrollTrigger: {
        trigger: ".circle__hollow__large",
        start: "bottom bottom",
        scrub: true
    },
});

// group two

gsap.to(".circle__hollow__medium", {
    y: -800,
    ease: "none",
    scrollTrigger: {
        trigger: ".circle__hollow__medium",
        start: "bottom bottom",
        scrub: true
    },
});

gsap.to(".vector__diagonal__three", {
    y: -800,
    ease: "none",
    scrollTrigger: {
        trigger: ".circle__hollow__medium",
        start: "bottom bottom",
        scrub: true
    },
});

// group three

gsap.to(".circle__hollow__half", {
    y: -800,
    ease: "none",
    scrollTrigger: {
        trigger: ".circle__hollow__half",
        start: "bottom bottom",
        scrub: true
    },
});

// client blog

gsap.to(".circle__hollow__half", {
    y: -800,
    ease: "none",
    scrollTrigger: {
        trigger: ".circle__hollow__half",
        start: "top top",
        scrub: true
    },
});

gsap.to(".bat__logo", {
    scale: 1.2,
    scrollTrigger: {
        trigger: ".bat__logo",
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        scrub: true
    }
})

gsap.to(".beluga__logo", {
    scale: 1.2,
    scrollTrigger: {
        trigger: ".beluga__logo",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
})

gsap.to(".mini__logo", {
    scale: 1.2,
    scrollTrigger: {
        trigger: ".mini__logo",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
})