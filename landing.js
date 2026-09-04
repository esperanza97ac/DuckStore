document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const items = track.children;

    let currentIndex = 0;

    // Obtener cuántos elementos se ven en pantalla según el tamaño
    function getVisibleItems() {
        if (window.innerWidth >= 640) { // Pantallas sm (640px) o mayores
            return 3;
        }
        return 1; // Pantallas móviles
    }

    function updateCarousel() {
        const visibleItems = getVisibleItems();
        const totalItems = items.length;
        const maxIndex = totalItems - visibleItems;

        // Limitar el índice entre 0 y el máximo permitido
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex > 0 ? maxIndex : 0;

        // Calcular desplazamiento
        const itemWidth = items[0].getBoundingClientRect().width;
        const gap = 16; // Corresponde al gap-4 de Tailwind (1rem = 16px)
        const moveAmount = (itemWidth + gap) * currentIndex;

        track.style.transform = `translateX(-${moveAmount}px)`;
    }

    // Eventos de los botones
    nextBtn.addEventListener('click', () => {
        const visibleItems = getVisibleItems();
        if (currentIndex < items.length - visibleItems) {
            currentIndex++;
            updateCarousel();
        } else {
            currentIndex = 0; // Vuelve al principio si llega al final
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else {
            currentIndex = items.length - getVisibleItems(); // Va al final si está al inicio
            updateCarousel();
        }
    });

    // Recalcular posición si el usuario cambia el tamaño de la ventana
    window.addEventListener('resize', updateCarousel);
});