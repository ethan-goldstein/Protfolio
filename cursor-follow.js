// Cursor particles follow effect
document.addEventListener('DOMContentLoaded', function() {
    // Create canvas element for cursor particles
    const canvas = document.createElement('canvas');
    canvas.id = 'cursor-particles-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    // Get canvas context
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Mouse position
    let mouse = {
        x: undefined,
        y: undefined,
        radius: 150
    };

    // Update mouse position on mousemove
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    // Particles array
    let particlesArray = [];
    const numberOfParticles = 30;

    // Create Particle class
    class Particle {
        constructor() {
            // Initial position
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            // Size
            this.size = Math.random() * 5 + 1;
            // Store original position
            this.baseX = this.x;
            this.baseY = this.y;
            // Density for movement calculation
            this.density = (Math.random() * 30) + 1;
            // Color - cyan/blue theme
            this.color = `rgba(0, ${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 100) + 155}, ${Math.random() * 0.5 + 0.5})`;
        }

        // Method to draw particle
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        // Method to update particle position
        update() {
            // Calculate distance between mouse and particle
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Move particles towards mouse if within radius
            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = mouse.radius;
                const force = (maxDistance - distance) / maxDistance;
                const directionX = forceDirectionX * force * this.density;
                const directionY = forceDirectionY * force * this.density;
                
                this.x += directionX;
                this.y += directionY;
            } else {
                // Return particles to original position
                if (this.x !== this.baseX) {
                    const dx = this.x - this.baseX;
                    this.x -= dx / 10;
                }
                if (this.y !== this.baseY) {
                    const dy = this.y - this.baseY;
                    this.y -= dy / 10;
                }
            }
        }
    }

    // Function to create particles
    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    // Function to animate particles
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        
        // Connect particles with lines
        connectParticles();
        
        requestAnimationFrame(animate);
    }

    // Function to connect particles with lines
    function connectParticles() {
        const maxDistance = 100;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 210, 255, ${1 - distance/maxDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    // Initialize and start animation
    init();
    animate();
});
