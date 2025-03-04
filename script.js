function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    const numberOfStars = 20; // Уменьшили количество звезд

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Случайные координаты для звезд
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // Случайная задержка анимации
        const delay = Math.random() * 3; // Уменьшили задержку
        star.style.animationDelay = `${delay}s`;

        // Случайная скорость вращения
        const rotationDuration = 4 + Math.random() * 4; // От 4 до 8 секунд
        star.style.animationDuration = `${rotationDuration}s`;

        starsContainer.appendChild(star);
    }
}

// Создаем звезды при загрузке страницы
window.addEventListener('load', createStars);

// Логика для скролла
window.addEventListener('scroll', function() {
    const intro = document.getElementById('intro');
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 30) {
        // Черный экран исчезает
        intro.style.opacity = 0;
        intro.style.pointerEvents = 'none'; // Отключаем взаимодействие

        // Хедер появляется
        header.classList.add('scrolled');
    } else {
        // Черный экран возвращается
        intro.style.opacity = 1;
        intro.style.pointerEvents = 'auto';

        // Хедер скрывается
        header.classList.remove('scrolled');
    }
});