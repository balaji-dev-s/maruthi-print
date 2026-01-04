gsap.registerPlugin(ScrollTrigger);

gsap.from(".feature-container", {
    scaleX: 0,
    opacity: 0.1,
    transformOrigin: "center center",
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".feature-main-container",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});
