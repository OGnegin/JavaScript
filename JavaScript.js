// Операторы, значения, переменные
// Задание 1

var name = prompt('Введите ваше имя');
console.log('Привет,' + name)

//Задание 2

const input = prompt('Введите вашу температуру в цельсиях');
const celsiy = parseFloat(input);
far = (celsiy * (9/5)) + 32
console.log(celsiy + "градусов по Цельсию равны" + far + "градусов по Фаренгейту")

// Задание 3

const input = prompt('Введите число');
const x = parseFloat(input);
let y = 0;
y = ((4 * (x * x)) + 18 - (23 * x)) / (((5/9) * x) + (18 * (((x * x * x) / 33) * x))) + (x * (15 / 12))
console.log(y)

// Задание 4

a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5'

at = typeof a === 'number'; // true
bt = typeof b === 'string'; // false, а нужно чтобы все были true
ct = typeof c === 'boolean';
dt = typeof d === 'object';
et = typeof e === 'undefined';
ft = typeof f === 'symbol';
gt = typeof g === 'string';
ht = typeof h === 'undefined';
it = typeof i === 'string';
jt = typeof j === 'undefined';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);

// Задание 5

const NDS = 0.20;
const NDFL = 0.13;
const EXCISE = 0.1;
const RENT = 40000;
const FOOD = 15000;
const OTHER = 15000;
const MY_SALARY = 120000;
let ndflTax = 0;
let mySalaryNet = 0;
let otherTaxes = 0;
let totalAvailable = 0;
let totalAvailable = 0;

ndflTax = MY_SALARY * NDFL;
mySalaryNet = MY_SALARY - ndflTax;
otherTaxes = mySalaryNet * (NDS + EXCISE);
totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')

// Условия
// Задание 1

var input = prompt('Введите катет А');
var a = parseFloat(input);
var input = prompt('Введите катет B');
var b = parseFloat(input);
var input = prompt('Введите гипотенузу С');
var c = parseFloat(input);
var result;
var intermediate;
var gip;

if (gip == intermediate) {
  intermediate = (a * a) + (b * b);
  gip = c * c
  result = "Это прямоугольный треугольник!";
} else {
  result = "Это не прямоугольный треугольник!"
}

console.log(result)

// Задание 2

var input = prompt('Введите первое число');
var a = parseFloat(input);
var input = prompt('Введите второе число');
var b = parseFloat(input);
var input = prompt('Введите третье число');
var c = parseFloat(input);
var result;

if (a > b && a > c) {
	result = a
} else if(b > a && b > c) {
	result = b
} else {
	result = c
}
console.log(result)

// Задание 3

var input = prompt('Введите число');
var N = parseFloat(input);

if (N % 2 === 0) {
	console.log("Число " + N + " четное!")
} else {
  console.log("Число " + N + " нечетное!")
}

// Циклы
// Задание 1

for (let i = 1; i <= 11; i += 2) {
	if (i > 5) {
	  console.log(i - 1);
  } else {
    console.log(i)
  }
}

// Задание 2
var sum = 0;
var number;
do {
  number = prompt("Введите любое число. Но как вы введете 0, вы получите сумму всех предыдущих чисел")
  sum += +number
} while(number != 0)
alert(sum)

// Задание 3

let neededNumber = 10;
let currentNumber;

do {
  while(currentNumber != neededNumber) {
    currentNumber = prompt('Введите число ' + neededNumber);
  }
  neededNumber *= 2;
} while (currentNumber < 100);
alert('Спасибо!')