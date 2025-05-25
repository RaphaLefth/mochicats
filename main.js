document.addEventListener('DOMContentLoaded', function() {
    // Inicializar carrusel
    const initCarousel = function() {
        const carouselEl = document.getElementById('hero-carousel');
        if (!carouselEl) return;
        
        // Si Bootstrap está cargado, usamos su Carousel
        if (typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
            const carousel = new bootstrap.Carousel(carouselEl, {
                interval: 5000,
                wrap: true,
                touch: true
            });
            
            // Pausar al hacer hover
            carouselEl.addEventListener('mouseenter', () => {
                carousel.pause();
            });
            
            carouselEl.addEventListener('mouseleave', () => {
                carousel.cycle();
            });
        } else {
            // Fallback básico si Bootstrap no está cargado
            console.warn("Bootstrap no está cargado. El carrusel puede no funcionar correctamente.");
        }
    };
    
    initCarousel();
    
    // Resto de tu código JavaScript...
});