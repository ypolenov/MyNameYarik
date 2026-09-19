const hour = new Date().getHours();
const greeting = document.getElementById('greeting');

greeting.textContent = hour < 12 ? 'Доброе утро!' : hour < 18 ? 'Добрый день!' : 'Добрый вечер!';

const cards = document.querySelectorAll('.card');
cards.forEach(card => card.classList.add('is-hidden'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.remove('is-hidden'), index * 120);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
