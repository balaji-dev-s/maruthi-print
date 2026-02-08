document.addEventListener("DOMContentLoaded", function () {

    const counter = document.getElementById("count");
    const start = 0;
    const end = 20;
    const duration = 1500;

    let hasStarted = false;

    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && !hasStarted) {
            hasStarted = true;
            startCounter();
            observer.disconnect();
        }
    }, { threshold: 0.6 });

    observer.observe(counter);

    function startCounter() {
        let current = start;
        const stepTime = duration / (end - start);

        const timer = setInterval(function () {
            current++;
            counter.textContent = current;

            if (current >= end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

});
