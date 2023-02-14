console.clear();
console.log("------------------------------------------");
console.log("Типы данных");
console.log("------------------------------------------");

// В JavaScript есть 8 основных типов данных.

// Семь из них называют «примитивными» типами данных:
// number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
// bigint для целых чисел произвольной длины.
// Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала:
// символ "n" в конце означает, что это BigInt  // const bigInt = 1234567890123456789012345678901234567890n;
// string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// boolean для true/false.
// null для неизвестных значений – отдельный тип, имеющий одно значение null.
// undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// symbol для уникальных идентификаторов.
// И один не является «примитивным» и стоит особняком:
// object для более сложных структур данных.
// Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

// Имеет две формы: typeof x или typeof(x).
// Возвращает строку с именем типа. Например, "string".
// Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.

console.log("--- Number ---");
let num1 = 123;
let num2 = 0.0001;

console.log(num1);
console.log(num2);
console.log(num1 + num2);


console.log('--- String ---');
let age = 18;
let userName = "Max";
let text = `${userName} is ${age} years old`;
console.log(text);

console.log("--- Boolean ---");
console.log(age == userName);

console.log("--- Object ---");
let user = {
    name: "Иван",
    surname: "Иванов",
    age: 25
};
console.log(user)
console.log(user.name)
console.log(user.surname)
console.log(user.age)

user.name = "Петр";
console.log(user.name)

// выыедет тип объекта
alert(user)
