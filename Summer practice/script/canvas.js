//selecting canvas
const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");

//selecting buttons and adding event listeners to them
const startBtn = document
	.getElementById("start-btn")
	.addEventListener("click", startGame);
const resetBtn = document
	.getElementById("reset-btn")
	.addEventListener("click", resetGame);

//main function that starts the game
function startGame() {}

//resets the game
function resetGame() {}

var lastTime;
function main() {
	var now = Date.now();
	var dt = (now - lastTime) / 1000.0;

	update(dt);
	render();

	lastTime = now;
	requestAnimFrame(main);
}

// Game state
var player = {
	pos: [0, 0],
	sprite: new Sprite("img/archer.png", [0, 0], [39, 39], 16, [0, 1]),
};

var arrows = [];
var enemies = [];

var lastFire = Date.now();
var gameTime = 0;
var isGameOver;
var terrainPattern;

// The score
var score = 0;
var scoreEl = document.getElementById("score");
