// console.log(true + false); // 1
// console.log(12 / "6"); // 2
// console.log("number" + 15 + 3); // number153
// console.log(15 + 3 + "number"); // 18number
// console.log("1" > null); // true
// console.log("foo" + + "bar"); // fooNaN
// console.log("true" == true); // false
// console.log(false == "false"); // false
// console.log(null == ""); // false

// создать переменную, узнать ее тип, добавить вывод на экран текста,
// в зависимости от значения (if else)

const num = 65;
if (isNaN(num)) {
    alert("Это не число, тип этой переменной: " + typeof num);
} else {
    alert("Это число");
}

// ------------------------------ 1 ---------------------------------- //
// запросить у пользователя знак зодиака, и в зависимости от ответа выдать всплывающее окно приветствия

function getZodiacSign() {
    const zodiacInput = document
        .getElementById("zodiacSignInput")
        .value.toLowerCase();
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

    let usrSign;
    switch (zodiacInput) {
        case zodiacSignsArr[0]:
            usrSign = zodiacSignsArr[0];
            break;
        case zodiacSignsArr[1]:
            usrSign = zodiacSignsArr[1];
            break;
        case zodiacSignsArr[2]:
            usrSign = zodiacSignsArr[2];
            break;
        case zodiacSignsArr[3]:
            usrSign = zodiacSignsArr[3];
            break;
        case zodiacSignsArr[4]:
            usrSign = zodiacSignsArr[4];
            break;
        case zodiacSignsArr[5]:
            usrSign = zodiacSignsArr[5];
            break;
        case zodiacSignsArr[6]:
            usrSign = zodiacSignsArr[6];
            break;
        case zodiacSignsArr[7]:
            usrSign = zodiacSignsArr[7];
            break;
        case zodiacSignsArr[8]:
            usrSign = zodiacSignsArr[8];
            break;
        case zodiacSignsArr[9]:
            usrSign = zodiacSignsArr[9];
            break;
        case zodiacSignsArr[10]:
            usrSign = zodiacSignsArr[10];
            break;
        case zodiacSignsArr[11]:
            usrSign = zodiacSignsArr[11];
            break;
        case zodiacSignsArr[12]:
            usrSign = zodiacSignsArr[12];
            break;
        default:
            alert("Такого знака зодиака нет\nПопробуйте ещё раз");
            return 1;
    }

    alert("Ваш знак зодиака - " + usrSign + ".");
}

// ------------------------------ 2 ---------------------------------- //
// вывести все числа от 1 до 40, с использованием 3-х разных циклов

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
// создайте вирусную страницу с постоянно повторяющемся сообщением

function spamThisPageToDeath() {
    while (true) {
        alert("Купи!!!!!");
    }
}

// ------------------------------ 4 ---------------------------------- //
// запросите у пользователя 3 числа, отсортируйте эти числа по возрастанию

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

function insersionSort(input1, input2, input3, arrSize) {
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
    const inputArray = [usrNum1, usrNum2, usrNum3];
    inputArray.sort(function (a, b) {
        return a - b;
    });
    alert("Your numbers are now sorted! Look: " + inputArray);

    // -----------using my own function-----------
    // sortArr(usrNum1, usrNum2, usrNum3);

    // ----using my own function but this one is way better---
    // insersionSort(usrNum1, usrNum2, usrNum3, 3);
}

// ------------------------------ 5 ---------------------------------- //
// напишите код для цикла, который будет повторять числа от 0 до 15.
// Для каждой итерации он будет проверять, является ли текущее число нечетным или четным,
// и отображать сообщение на экране

function evenNotEvenLoop() {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            alert(i + " - чётное число");
        } else {
            alert(i + " - нечётное число");
        }
    }
}

// ------------------------------ 6 ---------------------------------- //
// Запросить у пользователя любое число больше 5,
// в случае правильного ответа выдать окошко с поздравлением,
// в случае неправильного ответа вывести повторное окно с вопросом

function biggerThanFive(tryCount) {
    let guess;
    if (tryCount === 0) {
        guess = prompt("Ваше число?");
    } else {
        guess = prompt("Ваше новое предположение:");
    }

    if (guess === null) {
        return;
    } else {
        guess = parseInt(guess);
        if (guess > 5) {
            alert("Вы угадали!");
        } else {
            alert("Вы не угадали\nПопробуйте ещё раз");
            biggerThanFive(1);
        }
    }
}

// ------------------------------ 7 ---------------------------------- //
// выведите четные числа от 8 до 20

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
// Выведите сумму всех чисел кратных либо 3, либо 5(числа в диапазоне от 0 до 1000)

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
// Используя циклы проверьте, является ли заданное число из 3 цифр числом Армстронга

function armstrongNumberCheck() {
    let usrNum = prompt("Число: ");

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
            alert("Это число Армстронга");
        } else {
            alert("Это не число Армстронга");
        }
    } else {
        alert("Неверный ввод!\nЧисло должно быть в диапазоне от 100 до 1000");
    }
}

// ------------------------------ 10 --------------------------------- //
// используя циклы получите след изображение в консоли
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

document.getElementById("printStarsBtn").addEventListener("click", (e) => {
    for (let i = 1; i <= 5; i++) {
        console.log("*".repeat(i));
    }
});
