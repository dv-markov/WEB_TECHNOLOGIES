// Обработичики событый


// 1 - назначение обработчика через атрибут html, например, onclick
function myFunction() {
    alert("Вы нажали на кнопку!");
    document.body.style.background = 'red'; // сделать фон красным
    setTimeout(() => document.body.style.background = '', 3000); // вернуть назад
};


// 2 - using DOM attribute onlick
document.querySelector(".btn").onclick = function() {
    alert("Привет!");
};


// Первые два способа позволяют повесить только 1 обработчик на 1 событие
// 3 - eventListener
// eventListener - позволяет навесить несколько обработчиков на одно событие, добавляет событие.
// element.addEventListener(event, handler, [options]);
// аналог lambda-функции
document.querySelector(".btn2").addEventListener("click", () =>
    alert("1")
);
document.querySelector(".btn2").addEventListener("click", () =>
    alert("2")
);

// removeEventListener - удаляет событие
// element.removeEventListener(event, handler, [options]);
function handler() {
    alert( 'Спасибо!' );
  }
  
elem.addEventListener("click", handler);
// ....
elem.removeEventListener("click", handler);


///







