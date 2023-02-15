let N = +prompt("Введите кол-во товаров:", 0); 
let price = 0; //обнуляем начальное значение
let total = 0; //обнуляем начальное значение

for (let i=0; i < N; i++) {
    price = +prompt("Введите стоимость товара:", 0); //записали очередное значение цены в price
    total = total + price;         //к total прибавляем стоимость товара
}

alert(`Общая сумма покупки: ${total}`) //выводим результат


let i = 0;
while (i < 3) {
    console.log(`i = ${i}`);
    i++;
}


let n = 6;
let s = 10;
for (let i=0; i<n; i++) {
    s = s + i;
}
console.log(s)


n = 6
let p = 1
for (let i=0; i<n; i++) {
    p = p*i;
}
console.log(p)