// бургер-меню
const burger = document.getElementById('burgerBtn');
const nav = document.getElementById('navMenu');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// закрытие при клике на ссылку (мобилка)
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});