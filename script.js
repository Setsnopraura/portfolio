// Inizializza AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true
    });

    // Rimuovi il loader
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 1500);

    // Mobile menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form handling
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aggiungi qui la tua logica per l'invio del form
            alert('Messaggio inviato!');
            form.reset();
        });
    }

    // Animazione contatori statistiche
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            let count = 0;
            const duration = 2000; // 2 secondi
            const increment = target / (duration / 16);

            const updateCount = () => {
                if(count < target) {
                    count += increment;
                    stat.textContent = Math.floor(count);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target;
                }
            };

            updateCount();
        });
    }

    // Intersection Observer per le statistiche
    const statsSection = document.querySelector('.statistics');
    if(statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(statsSection);
    }

    // Smooth reveal per timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = `translateY(50px)`;

        setTimeout(() => {
            item.style.transition = 'all 0.8s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 * index);
    });
});