// Работа с элементом input


// такой вариант с innerHTML передает не только текст, но и html-код и js-скрипты
btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
inputElement = document.querySelector(".name");

btnElement.addEventListener("click", function() {
    resultElement.innerHTML = inputElement.value;
});


// Если нужно вставить обычный текст, используется textContent
btnElement2 = document.querySelector(".btn2");
resultElement2 = document.querySelector(".result2");
inputElement2 = document.querySelector(".name2");

btnElement2.addEventListener("click", function() {
    resultElement2.textContent = inputElement2.value;
});


// Проверка введенных значений
btnElement3 = document.querySelector(".btn3");
resultElement3 = document.querySelector(".result3");
inputElement3 = document.querySelector(".name3");

btnElement3.addEventListener("click", function() {
    if (inputElement3.value === "") {
        inputElement3.style.borderColor = "red";
        resultElement3.textContent = "";
    }
    else {
        inputElement3.style.borderColor = "green";
        resultElement3.textContent = inputElement3.value;
    }
});

inputElement3.addEventListener("click", function() {
    inputElement3.style.borderColor = "grey";
});


// Вычисление суммы двух значений
function btnClickHandler() {
    res.textContent = parseInt(firstnumber.value) + parseInt(secondnumber.value);
};
btn.addEventListener("click", btnClickHandler);
