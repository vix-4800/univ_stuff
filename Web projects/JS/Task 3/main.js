let arr1 = new Array(10, 20, 30, 40, 50, 60, 70); // Способ 1
let arr2 = ["10", "20", "30", "40", "50", "60", "70"]; // Способ 2

// alert(arr1[4]);
arr1[4] = 51;

function hoverMe() {
	// alert(arr1.length);
}

const arrContentDisplay = document.getElementById("arrContent");
function displayArr() {
	arrContentDisplay.insertAdjacentText("afterbegin", arr1 + " ");
	alert(arr1);
}

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = arr3.concat(arr4);
// alert(arr5);

// let tmp = arr5.pop();
// alert(tmp);

// arr5.unshift(0);
// alert(arr5);

// ------------- Создать массив с данными, полученными от пользователя -------------

function sqrtArr() {
	let arrSize = prompt("Введите длину вашего массива");
	if (arrSize === null) {
		return;
	} else {
		arrSize = parseInt(arrSize);
		let arrToSqrt = new Array(arrSize);
		for (let i = 0; i < arrSize; i++) {
			arrToSqrt[i] = prompt(
				"Введите элемент массива номер " + (i + 1) + ":"
			);
			if (arrToSqrt[i] === null || arrToSqrt[i] == "") {
				alert("Пустое значение будет заменено на 0!");
				arrToSqrt[i] = 0;
			} else if (isNaN(arrToSqrt[i])) {
				while (isNaN(arrToSqrt[i])) {
					alert("Введите число ещё раз:");
					arrToSqrt[i] = prompt(
						"Введите элемент массива номер " + (i + 1) + ":"
					);
				}
				arrToSqrt[i] = parseInt(arrToSqrt[i]);
			} else {
				arrToSqrt[i] = parseInt(arrToSqrt[i]);
			}
		}
	}
}

// ------------- Получить сегодняшнюю дату и вывести её на экран -------------

let today = new Date();
today = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
// alert(today);

// ------------- Вывести сегодняшнюю дату в формате 11 ноября 2016 года -------------

const todayNew = new Date();
const todayNewFormatted = todayNew.toLocaleString("ru-RU", { month: "long" });
// alert(
// 	todayNew.getDate() +
// 		" " +
// 		todayNewFormatted +
// 		" " +
// 		todayNew.getFullYear() +
// 		" года"
// );

const todayDay = todayNew.getDate();
const todayYear = todayNew.getFullYear();
// switch (todayNew.getMonth()) {
// 	case 0:
// 		alert(todayDay + " января " + todayYear + " года");
// 		break;
// 	case 1:
// 		alert(todayDay + " февраля " + todayYear + " года");
// 		break;
// 	case 2:
// 		alert(todayDay + " марта " + todayYear + " года");
// 		break;
// 	case 3:
// 		alert(todayDay + " апреля " + todayYear + " года");
// 		break;
// }

// ------------- Написать функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50 -------------

function randMult() {
	const a = Math.floor(Math.random() * 51);
	const b = Math.floor(Math.random() * 51);
	return a * b;
}
