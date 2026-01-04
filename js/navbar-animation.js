gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo-lg", {
  width: 120,     
  ease: "power1.out",
  scrollTrigger: {
    trigger: "nav",     // or any element near top you want to start trigger
    start: "top top",   // when top of viewport hits top of trigger
    end: "+=200",       // over 200px scroll distance
    scrub: true,        // smooth scrubbing
  }
});
