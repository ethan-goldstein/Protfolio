document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    const timeline = document.querySelector('.timeline-line');
    let timelineVisible = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Show timeline when first card becomes visible
                if (!timelineVisible) {
                    timeline.classList.add('visible');
                    timelineVisible = true;
                }
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));
});
