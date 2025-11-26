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
