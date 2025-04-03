const scroller = document.getElementById('scroller');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const scrollAmount = 200; // Ширина ячейки + доп. длина перехода (200 + 0)

// Функция проверки
function checkScroll() {
    leftArrow.classList.toggle('disabled', scroller.scrollLeft <= 0);
    rightArrow.classListt.toggle('disabled', scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1)

}

// Влево
leftArrow.addEventListener('click', () => {
    scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Вправо
rightArrow.addEventListener('click', () => {
    scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Проверка положения
scroller.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);