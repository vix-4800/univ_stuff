// Создать объект "студент" 2 разными способами
// добавить объекту 2 метода на выбор (например, сказать имя, посчитать возраст)
// Using an Object Literal
const student1 = {
	firstName: "Антон",
	lastName: "Гордиенко",
	city: "Саратов",
	lang: ["русский", "английский"],
	univ: "СГТУ",
	specialty: "ИФСТ",

	introduceSelf: function () {
		alert(
			"Привет, меня зовут " +
				this.firstName +
				" " +
				this.lastName +
				", я из города " +
				this.city +
				"."
		);
	},

	currDegree: function () {
		alert(
			"Я учусь в " +
				this.univ +
				" на специальности " +
				this.specialty +
				"."
		);
	},
};

// Using the JavaScript Keyword new
const student2 = new Object();
student2.firstName = "Мария";
student2.lastName = "Белова";
student2.city = "Волгоград";
student2.univ = "ВолгГТУ";
student2.lang = ["русский", "испанский"];
student2.introduceSelf = function () {
	alert(
		"Привет, меня зовут " +
			this.firstName +
			" " +
			this.lastName +
			", я из города " +
			this.city +
			"."
	);
};
student2.currDegree = function () {
	alert("Я учусь в " + this.univ + ".");
};

// JavaScript Object Constructors

function Student(sfirstName, sLastName, sCity, sUniv) {
	this.firstName = sfirstName;
	this.lastName = sLastName;
	this.city = sCity;
	this.univ = sUniv;

	this.introduceSelf = function () {
		alert(
			"Привет, меня зовут " +
				this.firstName +
				" " +
				this.lastName +
				", я из города " +
				this.city +
				"."
		);
	};

	this.currDegree = function () {
		alert("Я учусь в " + this.univ + ".");
	};
}

student3 = new Student(
	"Шелдон",
	"Купер",
	"Пасадина (Калифорния)",
	"California Institute of Technology"
);

student4 = new Student(
	"Генриетта",
	"Коулз",
	"Рестон (Виргиния)",
	"Reston High School"
);
