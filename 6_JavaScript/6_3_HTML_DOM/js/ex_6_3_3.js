btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
inputElement = document.querySelector(".name");

btnElement.addEventListener("click", function() {
    resultElement.innerHTML = inputElement.value;
});