let result = +prompt("Введите число от 1 до 100: ");

if (result > 100) {
    console.log("Некорректный ввод, число больше 100");
}
else if (result == 100) {
    console.log("Вы ввели число 100");
}
else if (result > 9) {
    console.log("Вы ввели двузначное число");
}
else if (result >= 0) {
    console.log("Вы ввели цифру");
}
else {
    console.log("Ошибка ввода");
}


let login = prompt("Введите логин");
let password = prompt("Введите пароль:");
if ((login == 'admin' && password == '1234') || (login == 'user' && password == '1111')) {
    alert("Вход разрешен ╰(*°▽°*)╯");
} else {
    alert("Вход запрещен 🤐");
}


let a = 50;
let b = 70;
if (a > 10 && b > 70){
  a = a + 10;
  b = b * 2;
  console.log(a + b);
} else if (a > 40 && b > 40){
  a = a + 50;
  b = a * b;
  console.log(b);
} else {
  console.log(0);
}


