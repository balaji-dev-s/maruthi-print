gsap.registerPlugin(ScrollTrigger);

// --- Logo Resize on Scroll ---
gsap.to(".logo-lg", {
  width: 120,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "nav",
    start: "top top",
    end: "+=200",
    scrub: true
  }
});

// --- Feature Container Animation ---
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

// --- Vision Section Animation ---
let visionTween;

function animateVision() {
  const visionContainer = document.querySelector(".vision-container");
  const imgWrapper = document.querySelector(".img-clip-wrapper");
  if (!visionContainer || !imgWrapper) return;

  const containerWidth = visionContainer.offsetWidth;

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

  // Kill only previous vision tween if exists
  if (visionTween) {
    visionTween.scrollTrigger.kill();
    visionTween.kill();
  }

  // Set initial state
  gsap.set(visionContainer, { x: startX, opacity: 0 });

  // Create tween
  visionTween = gsap.to(visionContainer, {
    x: -moveDistance,
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

// Initialize on page load
window.addEventListener("load", animateVision);

// Refresh & recalc on resize (only this tween)
window.addEventListener("resize", () => {
  animateVision();
  ScrollTrigger.refresh();
});
