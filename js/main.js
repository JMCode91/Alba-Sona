document.addEventListener('DOMContentLoaded', function () {
    // JS global unificado para el proyecto
    // Aquí puedes poner funciones compartidas: menú responsive, validaciones, animaciones, etc.

    console.log('main.js cargado correctamente.');
});
// --- SLIDER DE TESTIMONIOS ---
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.testimonio-slide');
    const dots = document.querySelectorAll('.dot'); // 🔥 Capturamos los puntos
    
    if (slides.length === 0) return; 

    let currentSlide = 0;

    function nextSlide() {
        // 1. Apagamos el slide y el punto actual
        slides[currentSlide].classList.remove('activo');
        if (dots.length > 0) dots[currentSlide].classList.remove('activo');
        
        // 2. Calculamos el siguiente
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 3. Encendemos el nuevo slide y su punto correspondiente
        slides[currentSlide].classList.add('activo');
        if (dots.length > 0) dots[currentSlide].classList.add('activo');
    }

    setInterval(nextSlide, 6000);
});