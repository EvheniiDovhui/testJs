// Відкриття/закриття меню на малих екранах
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
});

// Активний пункт меню при кліку
const navLinks = document.querySelectorAll('.sidebar nav ul li a');
const tabs = document.querySelectorAll('.section-tab');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const target = this.getAttribute('href').replace('#', '');
        tabs.forEach(tab => {
            if (tab.id === target) {
                tab.style.display = '';
            } else {
                tab.style.display = 'none';
            }
        });
    });
});

// Фільтрація робіт (імітація)
const filterButtons = document.querySelectorAll('.works-filter button');
const workCards = document.querySelectorAll('.work-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.textContent.trim();

        workCards.forEach(card => {
            if (filter === 'Всі' || card.querySelector('span').textContent.trim() === filter) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Додаємо після завантаження DOM
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.sidebar nav');
    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
    // Закривати меню при кліку на пункт
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
});