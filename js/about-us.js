document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    const duration = 1500;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));

    function animateCounter(el) {
        const end = parseInt(el.dataset.target, 10);
        if (!end || end <= 0) return;

        let startTime = null;

        function update(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            el.textContent = Math.floor(progress * end);

            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = end; 
        }

        requestAnimationFrame(update);
    }
});
