document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
      let touchStartX = 0;
      let touchEndX = 0;

      carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });

      carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe(carousel);
      });

      function handleSwipe(carouselElement) {
        const scrollAmount = carouselElement.querySelector('.carousel-item')?.offsetWidth || 300;

        if (touchEndX < touchStartX - 50) {
          // Swipe left
          carouselElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else if (touchEndX > touchStartX + 50) {
          // Swipe right
          carouselElement.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    });
  });


