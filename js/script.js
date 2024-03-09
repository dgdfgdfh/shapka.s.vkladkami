// getComputedStyle(element) - позволяет получить значение люболго CSS свойства элемента(element), даже из CSS файла
const tabList = document.querySelector('#tabList');
const tabContent = document.querySelectorAll('.tabcontent');
const tabLinks = document.querySelectorAll('.tablink');

const defaultOpen = document.querySelector('#defaultOpen');
const tabActive = document.querySelector('.tabcontent.active');

//для кнопки по умолчанию установить такой же цвет как в активной вкладке с контентом
defaultOpen.style.backgroundColor = getComputedStyle(tabActive).backgroundColor;

tabList.addEventListener('click', (e) => {
    //Выведем в консоль значение дата атрибута кнопки по кторой кликнул
    console.log(e.target.dataset.city)

    let targetBtn = e.target;
    let dataCity = targetBtn.dataset.city;

    for (let tab of tabContent) {
        //Скрыть все вкладки
        tab.classList.remove('active');

        //если идентификатор вкладки равен дата атрибуту кнопки на котрой кликнули равен индентификатору вкладки то:
        if (dataCity === tab.id) {
            for (
                let tablink of tabLinks) {
                tablink.style.backgroundColor = '';
            }
            // установить для это вкладки класс active 
            tab.classList.add('active')
            targetBtn.style.backgroundColor = getComputedStyle(tab).backgroundColor
        }
    }
})