// Resume page animations
document.addEventListener('DOMContentLoaded', function() {
    const resumeContainer = document.querySelector('.container');
    
    if (resumeContainer) {
        // Fade in animation for the resume container
        resumeContainer.style.opacity = '0';
        resumeContainer.style.transform = 'translateY(20px)';
        resumeContainer.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            resumeContainer.style.opacity = '1';
            resumeContainer.style.transform = 'translateY(0)';
        }, 300);
        
        // Add a loading animation for the PDF
        const embedElement = document.querySelector('embed');
        if (embedElement) {
            const loadingOverlay = document.createElement('div');
            loadingOverlay.style.position = 'absolute';
            loadingOverlay.style.top = '0';
            loadingOverlay.style.left = '0';
            loadingOverlay.style.width = '100%';
            loadingOverlay.style.height = '100%';
            loadingOverlay.style.background = 'rgba(10, 10, 10, 0.8)';
            loadingOverlay.style.display = 'flex';
            loadingOverlay.style.justifyContent = 'center';
            loadingOverlay.style.alignItems = 'center';
            loadingOverlay.style.zIndex = '10';
            
            const spinner = document.createElement('div');
            spinner.classList.add('loading-spinner');
            spinner.style.width = '50px';
            spinner.style.height = '50px';
            spinner.style.border = '5px solid rgba(0, 234, 255, 0.3)';
            spinner.style.borderTop = '5px solid #00eaff';
            spinner.style.borderRadius = '50%';
            spinner.style.animation = 'spin 1s linear infinite';
            
            loadingOverlay.appendChild(spinner);
            
            const embedParent = embedElement.parentElement;
            embedParent.style.position = 'relative';
            embedParent.appendChild(loadingOverlay);
            
            // Add the spinner animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            
            // Remove the loading overlay after the PDF loads
            embedElement.addEventListener('load', () => {
                loadingOverlay.style.opacity = '0';
                loadingOverlay.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    loadingOverlay.remove();
                }, 500);
            });
        }
    }
});