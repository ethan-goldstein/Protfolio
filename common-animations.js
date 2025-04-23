// Common animations for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Navbar animation
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
            navbar.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Add glow effect to links on hover
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.textShadow = '0 0 10px rgba(0, 234, 255, 0.8)';
            link.style.color = '#00eaff';
            link.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.textShadow = 'none';
            if (!link.classList.contains('active')) {
                link.style.color = '';
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
});

// Add this CSS to your styles.css or inline in the head
document.head.insertAdjacentHTML('beforeend', `
<style>
.reveal-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.revealed {
    opacity: 1;
    transform: translateY(0);
}
</style>
`);