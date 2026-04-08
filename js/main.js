// События кликов для бургер меню
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#burger').addEventListener("click", function () {
        document.querySelector('.header').classList.toggle("open");
    })
    const el = document.querySelector('.nav__link');
    for (let i = 0; i < el.length; i++) {
        console.log(el[i])
        el[i].addEventListener("click", function () {
            document.querySelector('.header').classList.toggle("open");
        })
    }

    const div = document.querySelector('#burger');
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(div);
        if (!withinBoundaries) {
            document.querySelector('.header').classList.toggle("open"); // скрываем элемент, так как клик был за его пределами  
        }
    });

})

// Галерея
const slides = document.QuerySelectorAll('.Slide');
const prevBtn = document.QuerySelector('.Prev');
const nextBtn = document.QuerySelector('.Next');
const slidesContainer = document.QuerySelector('.Slides');

let currentIndex = 0;
const totalSlides = slides.Length;

// Функция для показа слайда по индексу
function showSlide(index) {
    // Корректируем индекс (закольцовываем слайдер)
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Сдвигаем контейнер слайдов
    slidesContainer.Style.Transform = `translateX(-${currentIndex * 100}%)`;

    // Удаляем класс active у всех слайдов
    slides.ForEach(slide => slide.ClassList.Remove('active'));
    // Добавляем класс active текущему слайду
    slides[currentIndex].ClassList.Add('active');
}

// Переключение на следующий слайд
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Переключение на предыдущий слайд
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Обработчики кнопок
nextBtn.AddEventListener('click', nextSlide);
prevBtn.AddEventListener('click', prevSlide);

// Автоматическая смена слайдов каждые 3 секунды
setInterval(nextSlide, 3000);

// Инициализация: показываем первый слайд
showSlide(0);