// getElementById
let elem = document.getElementById('btn');
// elem.style.background = 'red';
elem.style.background = '#009688';
elem.style.fontSize = '24px';
elem.style.color = '#fff';
elem.innerHTML = 'Другой текст';
elem.classList.add('border');


// getElementsByClassName
let elem2 = document.getElementsByClassName('btn2');
elem2[0].style.background = '#000';
elem2[0].style.fontSize = '16px';
elem2[0].style.color = '#abc';
elem2[0].innerHTML = 'Привет как дела';
elem2[0].classList.add('border');

// querySelector()
// Метод возвращает первый элемент с заданным селектором. Возвращаются данные типа NodeList.
// Каким образом указывать значение:
// querySelector('#example')- первый элемент с id="example"
// querySelector('.example')- первый элемент с классом class="example"
// querySelector('a[href="site.com"]')- первый элемент a c атрибутом href="site.com"
// querySelector('p.example') - первый элемент p с классом example
// и другие существующие варианты селекторов.
// Часто используется  в работе.

let elem3 = document.querySelector('.btn3')
elem3.style.background = 'dimgray';
elem3.style.fontSize = '20px';
elem3.style.color = '#000';
elem3.innerHTML = 'Тест querySelector';
elem3.classList.add('border');

// querySelectorAll()
let elems = document.querySelectorAll('.btn4');

// Ниже аналогичный код с функцией forEach
// for (let i=0; i<elems.length; i++) {
//     element.style.background = '#5a5';
//     element.style.fontSize = '32px';
//     element.style.color = '#fff';
//     element.innerHTML = "Press ME!";
//     element.classList.add('border2');
// }

elems.forEach(element => {
    element.style.background = '#5a5';
    element.style.fontSize = '32px';
    element.style.color = '#fff';
    element.innerHTML = "Press ME!";
    element.classList.add('border2');
});

