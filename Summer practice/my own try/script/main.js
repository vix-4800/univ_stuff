/*
[1, 65], // default
    [
        [65, 1],
        [129, 1],
        [193, 1],
        [257, 1],
        [321, 1],
        [385, 1],
        [449, 1],
        [513, 1],
    ], //up
    [
        [1, 129],
        [65, 129],
        [129, 129],
        [193, 129],
        [257, 129],
        [321, 129],
        [385, 129],
        [449, 129],
        [513, 129],
    ], // down
    [
        [1, 193],
        [65, 193],
        [129, 193],
        [193, 193],
        [257, 193],
        [321, 193],
        [385, 193],
        [449, 193],
        [513, 193],
    ], // right
    [
        [1, 65],
        [65, 65],
        [129, 65],
        [193, 65],
        [257, 65],
        [321, 65],
        [385, 65],
        [449, 65],
        [513, 65],
    ], // left
*/

const canvas = document.getElementById("cnv"),
    ctx = canvas.getContext("2d");

document.getElementById("start-btn").addEventListener("click", init);
document.getElementById("reset-btn").addEventListener("click", reset);

const background = new Image(),
    playerModel = new Image(),
    enemyModel = new Image(),
    arrowModel = new Image();

background.src = "img/background.png";
playerModel.src = "img/player.png";
enemyModel.src = "img/mage.png";
arrowModel.src = "img/arrow.png";

const spriteSize = 62;
let in_X = 350;
let in_Y = 250;
let isActive = false;
let playerState = "left";
let c = 0;
let frameX = 0;
let gameFrame = 0;
const staggerFrame = 5;
let score = 0;

const moves = {
    left: [1, 65],
    right: [1, 193],
    up: [1, 1],
    down: [1, 129],
};

const attacks = {
    up: [
        [1, 833],
        [65, 833],
        [129, 833],
        [193, 833],
        [257, 833],
        [321, 833],
        [385, 833],
        [449, 833],
        [513, 833],
        [577, 833],
        [641, 833],
        [705, 833],
        [769, 833],
    ],
    down: [
        [1, 961],
        [65, 961],
        [129, 961],
        [193, 961],
        [257, 961],
        [321, 961],
        [385, 961],
        [449, 961],
        [513, 961],
        [577, 961],
        [641, 961],
        [705, 961],
        [769, 961],
    ],
    left: [
        [1, 897],
        [65, 897],
        [129, 897],
        [193, 897],
        [257, 897],
        [321, 897],
        [385, 897],
        [449, 897],
        [513, 897],
        [577, 897],
        [641, 897],
        [705, 897],
        [769, 897],
    ],
    right: [
        [1, 1025],
        [65, 1025],
        [129, 1025],
        [193, 1025],
        [257, 1025],
        [321, 1025],
        [385, 1025],
        [449, 1025],
        [513, 1025],
        [577, 1025],
        [641, 1025],
        [705, 1025],
        [769, 1025],
    ],
};

const magePositions = {
    left: [
        [50, 35],
        [75, 100],
        [40, 175],
        [23, 272],
        [34, 376],
        [64, 493],
    ],
    right: [
        [700, 45],
        [673, 115],
        [650, 190],
        [714, 265],
        [691, 390],
        [637, 500],
    ],
};

class Mage {
    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.direction = d;
    }

    spawn() {
        if (this.direction == "l") {
            ctx.drawImage(
                enemyModel,
                385,
                1,
                spriteSize,
                spriteSize,
                this.x,
                this.y,
                spriteSize - 5,
                spriteSize - 5,
            );
        } else if (this.direction == "r") {
            ctx.drawImage(
                enemyModel,
                321,
                1,
                spriteSize,
                spriteSize,
                this.x,
                this.y,
                spriteSize - 5,
                spriteSize - 5,
            );
        }
    }
}

const enemies = [
    new Mage(magePositions.left[0][0], magePositions.left[0][1], "l"),
    new Mage(magePositions.left[1][0], magePositions.left[1][1], "l"),
    new Mage(magePositions.left[2][0], magePositions.left[2][1], "l"),
    new Mage(magePositions.left[3][0], magePositions.left[3][1], "l"),
    new Mage(magePositions.left[4][0], magePositions.left[4][1], "l"),
    new Mage(magePositions.left[5][0], magePositions.left[5][1], "l"),
    // -------------------------------------------------------------- //
    new Mage(magePositions.right[0][0], magePositions.right[0][1], "r"),
    new Mage(magePositions.right[1][0], magePositions.right[1][1], "r"),
    new Mage(magePositions.right[2][0], magePositions.right[2][1], "r"),
    new Mage(magePositions.right[3][0], magePositions.right[3][1], "r"),
    new Mage(magePositions.right[4][0], magePositions.right[4][1], "r"),
    new Mage(magePositions.right[5][0], magePositions.right[5][1], "r"),
];

function init() {
    if (isActive == false) {
        setInterval(window.requestAnimationFrame(start), 10);
    } else {
        reset();
        setInterval(window.requestAnimationFrame(start), 10);
    }
    isActive = true;
}

function start() {
    draw();

    window.onkeydown = keyPress;
}

function drawPlayer(dir) {
    switch (dir) {
        case "left":
            ctx.drawImage(
                playerModel,
                moves.left[0],
                moves.left[1],
                spriteSize,
                spriteSize,
                in_X,
                in_Y,
                spriteSize,
                spriteSize,
            );
            break;
        case "right":
            ctx.drawImage(
                playerModel,
                moves.right[0],
                moves.right[1],
                spriteSize,
                spriteSize,
                in_X,
                in_Y,
                spriteSize,
                spriteSize,
            );
            break;
        case "up":
            ctx.drawImage(
                playerModel,
                moves.up[0],
                moves.up[1],
                spriteSize,
                spriteSize,
                in_X,
                in_Y,
                spriteSize,
                spriteSize,
            );
            break;
        case "down":
            ctx.drawImage(
                playerModel,
                moves.down[0],
                moves.down[1],
                spriteSize,
                spriteSize,
                in_X,
                in_Y,
                spriteSize,
                spriteSize,
            );
            break;
    }
}

function keyPress(e) {
    // console.log(e.keyCode);

    switch (e.keyCode) {
        case 39: //right arrow key
            if (in_X >= 800 - spriteSize + 10) {
                playerState = "right";
            } else {
                in_X += 5;
                playerState = "right";
            }
            break;
        case 37: //left arrow key
            if (in_X == 0 - 10) {
                playerState = "left";
            } else {
                in_X -= 5;
                playerState = "left";
            }
            break;
        case 38: //up arrow key
            if (in_Y == 0 - 10) {
                playerState = "up";
            } else {
                in_Y -= 5;
                playerState = "up";
            }
            break;
        case 40: //down arrow key
            if (in_Y >= 600 - spriteSize - 5) {
                playerState = "down";
            } else {
                in_Y += 5;
                playerState = "down";
            }
            break;
        case 32: //space key
            playerAttack();
            break;
    }

    draw();
}

function draw() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.drawImage(background, 0, 0);
    drawPlayer(playerState);

    spawnEnemies();
}

function playerAttack() {
    if (c == 13) {
        c = 0;

        draw();

        return;
    } else {
        ctx.clearRect(0, 0, 800, 600);
        ctx.drawImage(background, 0, 0);

        if (playerState == "left") {
            ctx.drawImage(
                playerModel,
                attacks.left[c][0],
                attacks.left[c][1],
                spriteSize,
                spriteSize,
                in_X,
                in_Y,
                spriteSize,
                spriteSize,
            );
        } else if (playerState == "right") {
            ctx.drawImage(
                playerModel,
                attacks.right[c][0],
                attacks.right[c][1],
                spriteSize,
                spriteSize,
                in_X,
                in_Y,
                spriteSize,
                spriteSize,
            );
        } else if (playerState == "up") {
            ctx.drawImage(
                playerModel,
                attacks.up[c][0],
                attacks.up[c][1],
                spriteSize,
                spriteSize,
                in_X,
                in_Y,
                spriteSize,
                spriteSize,
            );
        } else if (playerState == "down") {
            ctx.drawImage(
                playerModel,
                attacks.down[c][0],
                attacks.down[c][1],
                spriteSize,
                spriteSize,
                in_X,
                in_Y,
                spriteSize,
                spriteSize,
            );
        }

        if (gameFrame % staggerFrame == 0) {
            c++;
        }
        gameFrame++;

        spawnEnemies();

        requestAnimationFrame(playerAttack);
    }
}

function spawnEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].spawn();
    }
}

function reset() {}
