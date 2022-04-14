// Написать функцию для вывода на экран приветствия пользователю
const usrName = prompt("Давайте знакомиться.\nКак Вас зовут?");
if (usrName === null || usrName === "") {
	alert("Ну и ладно...");
}

// Запросить имя пользователя и приветствовать его по нажатию на любой элемент по Вашему выбору
function greetUsr() {
	if (usrName === null || usrName === "") {
		alert("Привет, Аноним!");
	} else {
		alert("Привет, " + usrName + "!");
	}
}
document.getElementById("greetingBtn").addEventListener("click", greetUsr);

// Напишите функцию min(a, b), которая возвращает меньшее из чисел a, b
function findMin(a, b) {
	if (parseInt(a) < parseInt(b)) {
		return a;
	} else {
		return b;
	}
}

// написать функцию "Решение квадратного уравнения".
// Добавьте в предыдущую функцию проверку на пустые значения,
// а также предусмотрите возможность нажатия кнопки "отмена".
// Кроме того, предусмотрите все возможные варианты значения дискриминанта (больше нуля, меньше нуля, равен нулю)
function squareEquation() {
	// Дискриминант меньше нуля: 3*x^2 - 4*x + 2 = 0
	// Дискриминант равен нулю: x^2 - 6*x + 9 = 0
	// Дискриминант больше нуля: x^2 - 4*x - 5 = 0

	const resDisplay = document.getElementById("square-equation-res");
	resDisplay.innerHTML = "=>";

	let num1, num2, num3, res;
	if (
		document.getElementById("value1").value.trim() &&
		parseInt(document.getElementById("value1").value.trim()) != 0
	) {
		num1 = parseInt(document.getElementById("value1").value);
	} else {
		res = "Это не квадратное уравнение!";
		resDisplay.insertAdjacentText("beforeend", " " + res);
		return;
	}

	if (document.getElementById("value2").value.trim()) {
		num2 = parseInt(document.getElementById("value2").value);
	} else {
		num2 = 0;
	}

	if (document.getElementById("value3").value.trim()) {
		num3 = parseInt(document.getElementById("value3").value);
	} else {
		num3 = 0;
	}

	let disc = num2 ** 2 - 4 * num1 * num3;

	if (disc < 0) {
		res = "Корней нет :(";
	} else if (disc === 0) {
		res = ((-1 * num2) / 2) * num1;
	} else {
		let res1 = ((-1 * num2 + Math.sqrt(disc)) / 2) * num1;
		let res2 = ((-1 * num2 - Math.sqrt(disc)) / 2) * num1;
		resDisplay.insertAdjacentText(
			"beforeend",
			" x1 = " + res1 + "; x2 = " + res2 + ";"
		);
		return;
	}

	resDisplay.insertAdjacentText("beforeend", " " + res);
}

function squareEquationClear() {
	document.getElementById("value1").value = "";
	document.getElementById("value2").value = "";
	document.getElementById("value3").value = "";
	document.getElementById("square-equation-res").innerHTML = "";
}

// --------------- Calculator --------------- //
// Создайте калькулятор, выполняющий простейшие арифметические действия
const display = document.querySelector(".display-context");
const currOperationDisplay = document.querySelector(".current-operation");
display.innerHTML = "";

function addToDisplay(num) {
	display.insertAdjacentText("beforeend", num);
}

function clearDisplay() {
	display.innerHTML = "";
}

function changeCurrOperation(symbol) {
	currOperationDisplay.innerHTML = symbol;
}

function calcMain() {
	let currNum = parseInt(display.textContent);
	let res;
	switch (currOperation) {
		case "+":
			break;
		case "-":
			break;
		case "x":
			break;
		case "÷":
			break;
	}
}
