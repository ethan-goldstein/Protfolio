// Skills page animations
document.addEventListener('DOMContentLoaded', function() {
    // Create animated skill bars
    const skillsSection = document.querySelector('.skills-container');
    
    if (skillsSection) {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const targetWidth = progressBar.getAttribute('data-progress') + '%';
                    
                    setTimeout(() => {
                        progressBar.style.width = targetWidth;
                    }, 300);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        skillBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'width 1.5s cubic-bezier(0.1, 0.5, 0.1, 1)';
            observer.observe(bar);
        });
        
        // Animate skill cards
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }
});