gsap.registerPlugin(ScrollTrigger);

const missionContainer = document.querySelector(".mission-container");

if (missionContainer) {
  gsap.fromTo(missionContainer, 
    {
      y: 100,    
      opacity: 0 
    },
    {
      y: 0,  
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".mission-section",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,    
        invalidateOnRefresh: true
      }
    }
  );
}
