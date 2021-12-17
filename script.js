//px - не указываются в свойствах ниже по коду!
console.dir(window);
console.dir(screen);
console.dir(document);

const btn = document.querySelector("btn");
const block = document.querySelector(".block");

const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;

console.log("clientHeight", height);
console.log("clientWidth", width);

//Обработчик события resize
window.addEventListener("resize", () => {
    const height = document.documentElement.clientHeight;
    const width = document.documentElement.clientWidth;

    console.log("clientHeight", height);
    console.log("clientWidth", width);
});

//Обработчик события scroll
window.addEventListener("scroll", () => {
    const top = document.documentElement.scrollTop;
    const left = document.documentElement.scrollLeft;

    console.log("top", top);
    console.log("left", left);
});

//Получаем событие по клику, прокрутка вниз
btn.addEventListener("click", () => {
    document.documentElement.scrollTop = 100;
});

//получение блока
console.dir(block);
const clientHeight = block.clientHeight;
const clientWidth = block.clientWidth;

console.log("clientHeight", clientHeight);
console.log("clientWidth", clientWidth);

console.log(400 - 17 + 1 + 1);
//или просто прописать в css: border box он говорит браузеру сжимать все содержимое контента, чтобы блок неувеличивал свои характеристики

//получение блока с учетом полосы прокрутки border
const offsetHeight = block.offsetHeight;
const offsetWidth = block.offsetWidth;

console.log("offsetHeight", offsetHeight);
console.log("offsetWidth", offsetWidth);

console.log(400 - 17 + 1 + 1);

//получение полной ширины блока с НЕ учитывая полосу прокрутки
const scrollHeight = block.scrollHeight;
const scrollWidth = block.scrollWidth;

console.log("scrollHeight", scrollHeight);
console.log("scrollWidth", scrollWidth);

console.log(400 - 17 + 1 + 1);

//изминения высоты и ширины БЛОКА (17-ширина scrolbar, 2px)
btn.addEventListener("click", () => {
    block.style.height = `${block.scrollHeight + 17 + 2}px`;
    block.style.width = `${block.scrollWidth + 17 + 2}px`;

    console.log(block.scrollTo);
    console.log(block.scrollLeft);
    //block.scrollTop += 10;
    //block.scrollLeft += 10;

    block.scrollTop(0, 100); //имеет только один переход, дальше не двигается

    //ПОЛУЧЕНИЕ КООРДИНАТЫ ОПРЕДЕЛЕННЫХ ЭЛЕМЕНТОВ ОТНОСИТЕЛЬНО НАШЕЙ СТРАНИЦЫ
    const elemRect = block.getBoundingClientRect();
    console.log(elemRect.top);
    console.log(elemRect.left);
});