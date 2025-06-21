document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');
  const darkToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // 📱 Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // 📍 Close menu when a nav link is clicked (for mobile)
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // 🌙 Load saved dark mode state from localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.setAttribute('data-theme', 'dark');
    darkToggle.textContent = '☀️';
  } else {
    body.removeAttribute('data-theme');
    darkToggle.textContent = '🌙';
  }

  // 🌗 Dark mode toggle
  darkToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';

    if (isDark) {
      body.removeAttribute('data-theme');
      localStorage.setItem('darkMode', 'disabled');
      darkToggle.textContent = '🌙';
    } else {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkMode', 'enabled');
      darkToggle.textContent = '☀️';
    }
  });
});
