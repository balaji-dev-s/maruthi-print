gsap.registerPlugin(ScrollTrigger);

let visionTween; // store tween globally

function animateVision() {
  const visionContainer = document.querySelector(".vision-container");
  const imgWrapper = document.querySelector(".img-clip-wrapper");

  if (!visionContainer || !imgWrapper) return;

  const containerWidth = visionContainer.offsetWidth;

  // Determine responsive stop distance
  let moveDistance;
  if (window.innerWidth >= 992) {
    moveDistance = containerWidth * 0.7;
  } else if (window.innerWidth >= 768) {
    moveDistance = containerWidth * 0.3;
  } else if (window.innerWidth >= 400) {
    moveDistance = containerWidth * 0.1;
  } else {
    moveDistance = containerWidth * 0.05;
  }

  const startX = containerWidth;

  // Kill previous tween if exists
  if (visionTween) visionTween.kill();

  // Set initial state
  gsap.set(visionContainer, { x: startX, opacity: 0 });

  // Create tween
  visionTween = gsap.to(visionContainer, {
    x: startX - moveDistance - startX, // keep your current calculation
    opacity: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".vision-section",
      start: "top 80%",
      end: "bottom 50%",
      scrub: true,
      invalidateOnRefresh: true
    }
  });
}

// Initialize after page load
window.addEventListener("load", animateVision);

// Refresh and recalc on resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
  animateVision(); // recalc moveDistance and tween
});
