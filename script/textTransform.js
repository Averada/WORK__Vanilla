document.querySelectorAll(".services__item").forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
        let services = item.children
        TweenMax.to((services[0]), .2, { css: { fontSize: "3.56666vw", color: "orange" } });
        TweenMax.to((services[1]), .2, { css: { display: "flex" } });
        TweenMax.to((services[2]), .2, { css: { fontSize: "3.56666vw", color: "orange" } });
    });
    item.addEventListener("mouseout", (e) => {
        let services = item.children
        TweenMax.to((services[0]), .2, { css: { fontSize: "2.7777vw", color: "var(--main-white-color)" } });
        TweenMax.to((services[1]), .2, { css: { display: "none" } });
        TweenMax.to((services[2]), .2, { css: { fontSize: "2.7777vw", color: "var(--main-white-color)" } });
    });
});

document.querySelectorAll(".client__container").forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
        let clients = item.children
        TweenMax.to((clients[2]), .2, { css: { fontSize: "5.16111111111vw", color: "orange" } });
    });
    item.addEventListener("mouseout", (e) => {
        let clients = item.children
        TweenMax.to((clients[2]), .2, { css: { fontSize: "4.86111111111vw", color: "var(--main-white-color)" } });
    });
});