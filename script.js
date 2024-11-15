// Inizializzazione AOS
AOS.init({
    duration: 1000,
    once: true
});

// Parallax Effect
document.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});

// Particles Animation
function createParticles() {
    const particles = document.querySelector('.particles');
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 2 + 1) + 's';
        particle.style.animationDelay = Math.random() + 's';
        particles.appendChild(particle);
    }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation con Animazione
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn');
    btn.classList.add('sending');
    // Simula invio
    setTimeout(() => {
        btn.classList.remove('sending');
        btn.classList.add('sent');
    }, 2000);
});