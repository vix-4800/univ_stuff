// console.log(true + false); // 1
// console.log(12 / "6"); // 2
// console.log("number" + 15 + 3); // number153
// console.log(15 + 3 + "number"); // 18number
// console.log("1" > null); // true
// console.log("foo" + "bar"); // foobar
// console.log("true" == true); // false
// console.log(false == "false"); // false
// console.log(null == ""); // false

const num = 65;
// alert(typeof num);

// ------------------------------ 1 ---------------------------------- //

function getZodiacSign() {
	let zodiacInput = document.getElementById("zodiacSignInput").value;
	zodiacInput = zodiacInput.toLowerCase();
	const zodiacSignsArr = [
		"овен",
		"телец",
		"близнецы",
		"рак",
		"лев",
		"дева",
		"весы",
		"скорпион",
		"змееносец",
		"стрелец",
		"козерог",
		"водолей",
		"рыбы",
	];

	switch (zodiacInput) {
		case zodiacSignsArr[0]:
			alert("");
			break;
		case zodiacSignsArr[1]:
			alert("");
			break;
		case zodiacSignsArr[2]:
			alert("");
			break;
		case zodiacSignsArr[3]:
			alert("");
			break;
		case zodiacSignsArr[4]:
			alert("");
			break;
		case zodiacSignsArr[5]:
			alert("");
			break;
		case zodiacSignsArr[6]:
			alert("");
			break;
		case zodiacSignsArr[7]:
			alert("");
			break;
		case zodiacSignsArr[8]:
			alert("");
			break;
		case zodiacSignsArr[9]:
			alert("");
			break;
		case zodiacSignsArr[10]:
			alert("");
			break;
		case zodiacSignsArr[11]:
			alert("");
			break;
		case zodiacSignsArr[12]:
			alert("");
			break;
		default:
			alert("wrong input\ntry again");
			return 1;
	}
}

// ------------------------------ 2 ---------------------------------- //

function printLoopFor() {
	const printResult = document.getElementById("loopResult");
	for (let i = 1; i <= 40; i++) {
		printResult.insertAdjacentText("beforeend", i + " ");
	}
}
function printLoopWhile() {
	const printResult = document.getElementById("loopResult");
	let i = 1;
	while (i <= 40) {
		printResult.insertAdjacentText("beforeend", i + " ");
		i++;
	}
}
function printLoopDoWhile() {
	const printResult = document.getElementById("loopResult");
	let i = 1;
	do {
		printResult.insertAdjacentText("beforeend", i + " ");
		i++;
	} while (i <= 40);
}

document.getElementById("clearBtn").addEventListener("click", () => {
	document.getElementById("loopResult").innerHTML = "";
});

// ------------------------------ 3 ---------------------------------- //

function spamThisPageToDeath() {
	while (true) {
		alert("Купи!!!1!");
	}
}

// ------------------------------ 4 ---------------------------------- //

function sortArr(input1, input2, input3) {
	let first, second, third;
	if (input1 < input2 && input1 < input3) {
		first = input1;
		if (input2 < input3) {
			second = input2;
			third = input3;
		} else {
			second = input3;
			third = input2;
		}
	} else if (input2 < input3 && input2 < input1) {
		first = input2;
		if (input1 < input3) {
			second = input1;
			third = input3;
		} else {
			second = input3;
			third = input1;
		}
	} else {
		first = input3;
		if (input1 < input2) {
			second = input1;
			third = input2;
		} else {
			second = input2;
			third = input1;
		}
	}

	let sortedArr = [first, second, third];
	alert("Your numbers are now sorted! Look: " + sortedArr);
}

function coolSortArr(input1, input2, input3, arrSize) {
	let sortedArr = [input1, input2, input3];
	let min = 0;
	let buf = 0;

	for (let i = 0; i < arrSize; i++) {
		min = i;
		for (let j = i + 1; j < arrSize; j++)
			min = sortedArr[j] < sortedArr[min] ? j : min;
		if (i != min) {
			buf = sortedArr[i];
			sortedArr[i] = sortedArr[min];
			sortedArr[min] = buf;
		}
	}

	alert("Your numbers are now sorted! Look: " + sortedArr);
}

function sortNums() {
	const usrNum1 = parseInt(prompt("Enter your first number: "));
	const usrNum2 = parseInt(prompt("Now second number: "));
	const usrNum3 = parseInt(prompt("And the last one: "));

	// -----------using .sort() function-----------
	/*
	const inputArray = [usrNum1, usrNum2, usrNum3];
	inputArray.sort(function (a, b) {
		return a - b;
	});
	alert("Your numbers are now sorted! Look: " + inputArray);
	*/

	// -----------using my own function-----------
	// sortArr(usrNum1, usrNum2, usrNum3);

	// ----using my own function but this one is way better---
	coolSortArr(usrNum1, usrNum2, usrNum3, 3);
}

// ------------------------------ 5 ---------------------------------- //

function evenNotEvenLoop() {
	for (let i = 0; i <= 15; i++) {
		if (i % 2 === 0) {
			alert(i + " is even");
		} else {
			alert(i + " is not even");
		}
	}
}

// ------------------------------ 6 ---------------------------------- //

function biggerThanFive(tryCount) {
	let guess;
	if (tryCount === 0) {
		guess = prompt("What is your guess?");
	} else {
		guess = prompt("What is your new guess?");
	}

	if (guess === null) {
		return;
	} else {
		guess = parseInt(guess);
		if (guess > 5) {
			alert("Congrats my man!");
		} else {
			alert("You guessed wrong\nTry again");
			biggerThanFive(1);
		}
	}
}

// ------------------------------ 7 ---------------------------------- //

function evenfrom8To20() {
	const resPar = document.getElementById("from8To20Res");

	for (let i = 8; i <= 20; i++) {
		if (i % 2 === 0) {
			resPar.insertAdjacentText("beforeend", i + " ");
		}
	}
}

document.getElementById("clearEvenfrom8To20").addEventListener("click", (e) => {
	document.getElementById("from8To20Res").innerHTML = "";
});

// ------------------------------ 8 ---------------------------------- //

function multiplesFrom0To1000() {
	let sum = 0;

	for (let i = 0; i <= 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}

	alert("The sum is: " + sum);
}

// ------------------------------ 9 ---------------------------------- //

function armstrongNumberCheck() {
	let usrNum = prompt("Number: ");

	if (usrNum === null) {
		return;
	}
	usrNum = parseInt(usrNum);
	if (usrNum > 99 && usrNum < 1000) {
		let usrNumTmp = usrNum;
		let tmp = 0;

		for (let i = 0; i < 3; i++) {
			tmp += (usrNumTmp % 10) ** 3;
			usrNumTmp = parseInt(usrNumTmp / 10);
		}

		if (usrNum === tmp) {
			alert("This is an Armstrong Number");
		} else {
			alert("This is not an Armstrong Number");
		}
	} else {
		alert("Wrong input!\nThe number should be between 100 and 1000");
	}
}

// ------------------------------ 10 --------------------------------- //

document.getElementById("printStarsBtn").addEventListener("click", (e) => {
	for (let i = 1; i <= 5; i++) {
		console.log("*".repeat(i));
	}
});
