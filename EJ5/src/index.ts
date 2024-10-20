
const scrollToTopBtn = document.getElementById('scrollToTopBtn') as HTMLButtonElement;

// Mostrar u ocultar el botón según el scroll
window.onscroll = () => {
  const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollPosition > 100) {
    scrollToTopBtn.classList.add('visible');
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.remove('visible');
    scrollToTopBtn.classList.add('hidden');
  }
};

// Al hacer clic en el botón, desplazar suavemente hacia arriba
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
