document.querySelectorAll('.transition-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 2000);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

const scrollText = document.querySelector('.scroll-text');

window.addEventListener('scroll', () => {
  const rect = scrollText.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    scrollText.classList.add('visible');
  }
});
