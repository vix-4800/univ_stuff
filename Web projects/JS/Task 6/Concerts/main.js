// ----------------------------------------- Смена темы -----------------------------------
let darkThemeStatus = false;
function changeTheme() {
	const body = document.querySelector(".light-theme");
	body.classList.toggle("dark-theme");
	if (darkThemeStatus === false) {
		document
			.getElementById("theme-icon-path")
			.setAttribute("fill", "black");
		darkThemeStatus = true;
	} else {
		document
			.getElementById("theme-icon-path")
			.setAttribute("fill", "white");
		darkThemeStatus = false;
	}
}

// ----------------------- Выбор города в зависимости от выбора страны -----------------------

// Массив с городами (в-основном - 5 наибольших по населению городов на страну,
// отсортированных по алфавиту)
const cities = {
	Австралия: ["Аделаида", "Брисбен", "Мельбурн", "Перт", "Сидней"],
	Австрия: ["Вена", "Грац", "Зальцбург", "Инсбрук", "Линц"],
	Бельгия: ["Антверпен", "Брюссель", "Гент", "Льеж", "Шарлеруа"],
	Великобритания: [
		"Бирмингем",
		"Ливерпуль",
		"Лидс",
		"Лондон",
		"Манчестер",
		"Шеффилд",
	],
	Германия: [
		"Берлин",
		"Гамбург",
		"Дюссельдорф",
		"Кёльн",
		"Мюнхен",
		"Штутгарт",
	],
	Дания: [
		"Копенгаген",
		"Оденсе",
		"Ольборг",
		"Орхус",
		"Фредериксберг",
		"Эсбьерг",
	],
	Ирландия: [
		"Брей",
		"Голуэй",
		"Дандолк",
		"Дроэда",
		"Дублин",
		"Корк",
		"Лимерик",
		"Уотерфорд",
	],
	Исландия: [
		"Акюрейри",
		"Кеблавик",
		"Коупавогюр",
		"Рейкьявик",
		"Хабнарфьордюр",
	],
	Испания: ["Барселона", "Валенсия", "Мадрид", "Сарагоса", "Севилья"],
	Италия: ["Милан", "Неаполь", "Палермо", "Рим", "Турин"],
	Канада: ["Калгари", "Монреаль", "Оттава", "Торонто", "Эдмонтон"],
	Мексика: [
		"Агуаскальентес",
		"Гвадалахара",
		"Леон",
		"Мехико",
		"Сан-Луис-Потоси",
	],
	Нидерланды: ["Амстердам", "Гаага", "Роттердам", "Утрехт", "Эйндховен"],
	"Новая Зеландия": [
		"Веллингтон",
		"Крайстчерч",
		"Окленд",
		"Центральный Окленд",
		"Южный Окленд",
	],
	Норвегия: ["Акерсхус", "Осло", "Ругаланн", "Сёр-Трёнделаг", "Хордаланн"],
	Португалия: ["Амадора", "Вила-Нова-ди-Гая", "Лиссабон", "Лореш", "Порту"],
	Россия: [
		"Волгоград",
		"Воронеж",
		"Екатеринбург",
		"Казань",
		"Красноярск",
		"Москва",
		"Нижний Новгород",
		"Новосибирск",
		"Омск",
		"Пермь",
		"Ростов-на-Дону",
		"Самара",
		"Санкт-Петербург",
		"Саратов 👋",
		"Уфа",
		"Челябинск",
	],
	Сингапур: ["Сингапур"],
	Словения: ["Копер", "Крань", "Любляна", "Марибор", "Целе"],
	"Соединенные Штаты Америки": [],
	Турция: ["Адана", "Анкара", "Бурса", "Измир", "Стамбул"],
	Финляндия: ["Вантаа", "Тампере", "Турку", "Хельсинки", "Эспоо"],
	Франция: ["Лион", "Марсель", "Ницца", "Париж", "Тулуза"],
	Чехия: ["Брно", "Либерец", "Острава", "Пльзень", "Прага"],
	Швейцария: ["Базель", "Берн", "Женева", "Лозанна", "Цюрих"],
	Швеция: ["Вестерос", "Гётеборг", "Мальмё", "Стокгольм", "Уппсала"],
	Эстония: ["Кохтла-Ярве", "Нарва", "Пярну", "Таллин", "Тарту"],
	"Южная Корея": ["Инчхон", "Пусан", "Сеул", "Тэгу", "Тэджон"],
	Япония: ["Йокогама", "Нагоя", "Осака", "Саппоро", "Токио"],
};

// Если выбранная страна - США, то открывается выбор штатов
const usaStates = {
	Вашингтон: ["Белвью", "Ванкувер", "Сиэтл", "Спокан", "Такома"],
	Виргиния: [
		"Верджиния-Бич",
		"Норфолк",
		"Ньюпорт-Ньюс",
		"Ричмонд",
		"Чесапик",
	],
	Джорджия: ["Атенс", "Атланта", "Коламбус", "Огаста", "Саванна"],
	Иллинойс: ["Джолиет", "Нейпервилл", "Орора", "Рокфорд", "Чикаго"],
	Калифорния: [
		"Лос-Анджелес",
		"Сан-Диего",
		"Сан-Франциско",
		"Сан-Хосе",
		"Фресно",
	],
	Мичиган: [
		"Детройт",
		"Макино-Айленд",
		"Макино-Сити",
		"Сент-Игнас",
		"Франкенмус",
	],
	"Нью-Джерси": ["Джерси-Сити", "Ньюарк", "Патерсон", "Эдисон", "Элизабет"],
	"Нью-Йорк": ["Буффало", "Йонкерс", "Нью-Йорк", "Рочестер", "Сиракьюс"],
	Огайо: ["Акрон", "Кливленд", "Колумбус", "Толидо", "Цинциннати"],
	Пенсильвания: ["Аллентаун", "Питтсбург", "Рединг", "Филадельфия", "Эри"],
	"Северная Дакота": [
		"Бисмарк",
		"Гранд-Форкс",
		"Майнот",
		"Уэст-Фарго",
		"Фарго",
	],
	"Северная Каролина": [
		"Гринсборо",
		"Дарем",
		"Роли",
		"Уинстон-Сейлем",
		"Шарлотт",
	],
	Техас: ["Даллас", "Остин", "Сан-Антонио", "Форт-Уэрт", "Хьюстон"],
	Флорида: ["Джэксонвилл", "Майами", "Орландо", "Сент-Питерсберг", "Тампа"],
};

// Список всех городов всех стран
function Concert(
	cSity,
	blues,
	jazz,
	classical,
	metal,
	pop,
	r_n_B,
	rock,
	hip_hop,
	chanson,
	electro
) {
	this.concertCity = cSity;
	this.concerts_blues = blues;
	this.concerts_jazz = jazz;
	this.concerts_classical = classical;
	this.concerts_metal = metal;
	this.concerts_pop = pop;
	this.concerts_r_n_B = r_n_B;
	this.concerts_rock = rock;
	this.concerts_hip_hop = hip_hop;
	this.concerts_chanson = chanson;
	this.concerts_electro = electro;
}

let concertList = [223];
let j = 0;
for (const key in cities) {
	for (i = 0; i < cities[key].length; i++) {
		concertList[j] = cities[key][i];
		j++;
	}
}
for (const key in usaStates) {
	for (i = 0; i < usaStates[key].length; i++) {
		concertList[j] = usaStates[key][i];
		j++;
	}
}
const jazz_concerts = ["бар острые косырьки", "бар бешеных собак"];
const adelaida = new Concert(
	"Аделаида",
	jazz_concerts,
	jazz_concerts,
	jazz_concerts,
	jazz_concerts,
	jazz_concerts,
	jazz_concerts,
	jazz_concerts,
	jazz_concerts,
	jazz_concerts,
	jazz_concerts
);
console.log(adelaida);

// Переменные всех полей ввода и полей выбора
const countrySel = document.getElementById("country");
const citySel = document.getElementById("city");
const stateSel = document.getElementById("state");
const genreSel = document.getElementById("genre");
const dateInpt = document.getElementById("date");

for (let key in cities) {
	countrySel.innerHTML =
		countrySel.innerHTML + "<option>" + key + "</option>";
}
for (let key in usaStates) {
	stateSel.innerHTML = stateSel.innerHTML + "<option>" + key + "</option>";
}

countrySel.addEventListener("change", function updateCityList(e) {
	if (countrySel.value === "Соединенные Штаты Америки") {
		document
			.getElementById("state_label")
			.setAttribute("style", "display:block;");
		stateSel.setAttribute("style", "display:block;");
		stateSel.addEventListener("change", function updateStateList(event) {
			citySel.innerHTML = "";

			let item = event.target.value;
			if (item in usaStates) {
				for (i = 0; i < usaStates[item].length; i++) {
					citySel.innerHTML =
						citySel.innerHTML +
						"<option>" +
						usaStates[item][i] +
						"</option>";
				}
			}
		});
	} else {
		document
			.getElementById("state_label")
			.setAttribute("style", "display:none;");
		stateSel.setAttribute("style", "display:none;");
	}

	citySel.innerHTML = "";

	let item = e.target.value;
	if (item in cities) {
		for (i = 0; i < cities[item].length; i++) {
			citySel.innerHTML =
				citySel.innerHTML + "<option>" + cities[item][i] + "</option>";
		}
	}
});

// ------------------------------- Поиск подходящего фильма --------------------------------
const resultsDiv = document.querySelector(".result");
let resultsShown = false;
document
	.getElementById("find-results-btn")
	.addEventListener("click", function findResults() {
		if (resultsShown === false) {
			resultsShown = true;
			resultsDiv.setAttribute("data-visible", true);
			resultsDiv.setAttribute("style", "display:block");
		}

		const selectedCountry =
			countrySel.options[countrySel.selectedIndex].value;
		const selectedCity = citySel.options[citySel.selectedIndex].value;
		if (countrySel.value === "Соединенные Штаты Америки") {
			const selectedState =
				stateSel.options[stateSel.selectedIndex].value;
		}
		const dateSelected = dateInpt.value;
	});
