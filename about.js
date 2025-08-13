// About Me page animations
document.addEventListener('DOMContentLoaded', function() {
    // Fade in cyber card content
    const cyberCard = document.querySelector('.cyber-card');
    if (cyberCard) {
        cyberCard.style.opacity = '0';
        cyberCard.style.transform = 'translateY(30px)';
        cyberCard.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            cyberCard.style.opacity = '1';
            cyberCard.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Animate glow buttons
    const glowButtons = document.querySelectorAll('.glow-on-hover');
    glowButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        button.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 200 * index);
    });
    
    // Add typing effect to the heading
    const heading = document.querySelector('.home-text');
    if (heading) {
        const text = heading.textContent;
        heading.textContent = '';
        heading.style.borderRight = '0.15em solid #00eaff';
        heading.style.animation = 'blink-caret 0.75s step-end infinite';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                heading.style.borderRight = 'none';
            }
        };
        
        setTimeout(typeWriter, 500);
    }
});

// Add this CSS to your styles.css or inline in the head
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #00eaff }
}
</style>
`);