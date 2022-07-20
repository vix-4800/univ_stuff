const playerImg = new Image(); // create player image
playerImg.src = "img/player.png";

const heartImg = new Image(); // create heart (heal) image
heartImg.src = "img/heart.png";

const arrowImg = new Image(); // create arrow (ammo) image
arrowImg.src = "img/arrows.png";

const wizardImg = new Image(); // create wizard (enemy) image
wizardImg.src = "img/wizard.png";

const lightImg = new Image(); // create light (attack) image
lightImg.src = "img/wizard.png";

const grassImg = new Image(); // create grass image
grassImg.src = "img/grass.png";

let canvasWidth = 600,
    canvasHeight = 500,
    direction = "left",
    arrowDirection = "",
    arrowSpeed = 7,
    wizardSpeed = 0.5,
    wizards = [],
    lights = [],
    arrows = [],
    health = 100,
    lastFire = Date.now(),
    score = 0,
    highScore = 0,
    countEnemies = 2,
    hearts = [],
    amos = [];

let stage = new Konva.Stage({
    container: "game",
    width: canvasWidth,
    height: canvasHeight,
});

let layer = new Konva.Layer();

const animationsLight = {
    light: [
        2, 405, 40, 39, 46, 405, 40, 39, 90, 405, 40, 39, 134, 405, 40, 39, 178,
        405, 40, 39, 222, 405, 40, 39, 266, 405, 40, 39, 310, 405, 40, 39, 354,
        405, 40, 39, 398, 405, 40, 39, 442, 405, 40, 39, 486, 405, 40, 39, 530,
        405, 40, 39,
    ],
};

const animationsWizard = {
    walkRight: [
        2, 131, 48, 49, 52, 131, 48, 49, 102, 131, 48, 49, 152, 131, 48, 49,
        202, 131, 48, 49, 252, 131, 48, 49, 302, 131, 48, 49, 352, 131, 48, 49,
        402, 131, 48, 49, 452, 131, 48, 49, 502, 131, 48, 49, 552, 131, 48, 49,
        602, 131, 48, 49, 652, 131, 48, 49, 702, 131, 48, 49, 752, 131, 48, 49,
        802, 131, 48, 49, 852, 131, 48, 49,
    ],
    walkLeft: [
        2, 191, 48, 49, 52, 191, 48, 49, 102, 191, 48, 49, 152, 191, 48, 49,
        202, 191, 48, 49, 252, 191, 48, 49, 302, 191, 48, 49, 352, 191, 48, 49,
        402, 191, 48, 49, 452, 191, 48, 49, 502, 191, 48, 49, 552, 191, 48, 49,
        602, 191, 48, 49, 652, 191, 48, 49, 702, 191, 48, 49, 752, 191, 48, 49,
        802, 191, 48, 49, 852, 191, 48, 49,
    ],
    idleRight: [
        2, 10, 48, 49, 52, 10, 48, 49, 102, 10, 48, 49, 152, 10, 48, 49, 202,
        10, 48, 49, 252, 10, 48, 49, 302, 10, 48, 49, 352, 10, 48, 49,
    ],
    idleLeft: [
        2, 72, 48, 49, 52, 72, 48, 49, 102, 72, 48, 49, 152, 72, 48, 49, 202,
        72, 48, 49, 252, 72, 48, 49, 302, 72, 48, 49, 352, 72, 48, 49,
    ],
    attackLeft: [
        25, 327, 48, 67, 123, 327, 48, 67, 221, 327, 48, 67, 319, 327, 48, 67,
        417, 327, 48, 67, 515, 327, 48, 67, 613, 327, 48, 67, 711, 327, 48, 67,
        809, 327, 48, 67, 907, 327, 48, 67, 1005, 327, 48, 67, 1103, 327, 48,
        67,
    ],
    attackRight: [
        25, 250, 48, 67, 123, 250, 48, 67, 221, 250, 48, 67, 319, 250, 48, 67,
        417, 250, 48, 67, 515, 250, 48, 67, 613, 250, 48, 67, 711, 250, 48, 67,
        809, 250, 48, 67, 907, 250, 48, 67, 1005, 250, 48, 67, 1103, 250, 48,
        67,
    ],
    die: [
        2, 460, 48, 50, 54, 460, 48, 50, 104, 460, 48, 50, 154, 460, 48, 50,
        204, 460, 48, 50, 254, 460, 48, 50,
    ],
};

const animationsPlayer = {
    idleRight: [1, 193, 62, 62],
    idleLeft: [1, 65, 62, 62],
    walkLeft: [
        1, 65, 62, 62, 65, 65, 62, 62, 129, 65, 62, 62, 193, 65, 62, 62, 257,
        65, 62, 62, 321, 65, 62, 62, 385, 65, 62, 62, 449, 65, 62, 62, 513, 65,
        62, 62,
    ],
    walkRight: [
        1, 193, 62, 62, 65, 193, 62, 62, 129, 193, 62, 62, 193, 193, 62, 62,
        257, 193, 62, 62, 321, 193, 62, 62, 385, 193, 62, 62, 449, 193, 62, 62,
        513, 193, 62, 62,
    ],
    attackRight: [
        1, 1025, 62, 62, 65, 1025, 62, 62, 129, 1025, 62, 62, 1025, 193, 62, 62,
        257, 1025, 62, 62, 321, 1025, 62, 62, 385, 1025, 62, 62, 449, 1025, 62,
        62, 513, 1025, 62, 62, 577, 1025, 62, 62, 641, 1025, 62, 62, 705, 1025,
        62, 62,
    ],
    attackLeft: [
        1, 897, 62, 62, 65, 897, 62, 62, 129, 897, 62, 62, 897, 193, 62, 62,
        257, 897, 62, 62, 321, 897, 62, 62, 385, 897, 62, 62, 449, 897, 62, 62,
        513, 897, 62, 62, 577, 897, 62, 62, 641, 897, 62, 62, 705, 897, 62, 62,
    ],
};

let player = new Konva.Sprite({
    x: 200,
    y: 150,
    image: playerImg,
    animation: "idleLeft",
    animations: animationsPlayer,
    frameRate: 18,
    frameIndex: 0,
});
player.speed = 1.5;
player.sizeX = 50;
player.sizeY = 50;
player.arrows = 5;

layer.add(player);

stage.add(layer);

player.start();

let gameInfo = new Konva.Text({
    x: 15,
    y: 15,
    text: "text",
    fontSize: 18,
    fill: "white",
});

layer.add(gameInfo);

let gameLoop = new Konva.Animation(function (frame) {
    handleInput();
    moveEnemies();

    moveBullet();

    actEnemies();

    gameInfo.setAttr(
        "text",
        "Health: " +
            Math.floor(health) +
            ", Arrows: " +
            player.arrows +
            ", Score: " +
            score,
    );

    checkCollisions();
    getHealth(0.05);
}, layer);

function gameOver() {
    gameLoop.stop();

    highScore = localStorage.getItem("High Score");
    if (highScore == null) {
        highScore = score;
    } else {
        if (score > highScore) {
            highScore = score;
        }
    }
    localStorage.setItem("High Score", highScore);

    document.getElementById("score").innerText = score;
    document.getElementById("high-score").innerText = highScore;
    document.getElementById("dead").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("controls").style.display = "none";
}

function handleInput() {
    if (
        player.attrs.animation == "attackRight" ||
        player.attrs.animation == "attackLeft"
    ) {
        animationAttack();
        return;
    }

    player.attrs.animation = "idleRight";
    if (direction == "left") {
        player.attrs.animation = "idleLeft";
    }

    if (input.isDown("DOWN") || input.isDown("s")) {
        if (player.attrs.y + player.speed < canvasHeight - player.sizeY) {
            player.attrs.animation = "walkRight";
            player.setY(player.attrs.y + player.speed);
            direction = "right";
        }
    }

    if (input.isDown("UP") || input.isDown("w")) {
        if (player.attrs.y - player.speed > 0) {
            player.attrs.animation = "walkLeft";
            player.setY(player.attrs.y - player.speed);
            direction = "left";
        }
    }

    if (input.isDown("LEFT") || input.isDown("a")) {
        if (player.attrs.x - player.speed > 0) {
            player.attrs.animation = "walkLeft";
            player.setX(player.attrs.x - player.speed);
            direction = "left";
        }
    }

    if (input.isDown("RIGHT") || input.isDown("d")) {
        if (player.attrs.x + player.speed < canvasWidth - player.sizeX) {
            player.attrs.animation = "walkRight";
            player.setX(player.attrs.x + player.speed);
            direction = "right";
        }
    }

    if (
        input.isDown("SPACE") &&
        Date.now() - lastFire > 500 &&
        player.arrows > 0
    ) {
        player.attrs.animation = "attackLeft";
        if (direction == "right") {
            player.attrs.animation = "attackRight";
        }
        player.frameIndex(0);
    }
}

function animationAttack() {
    if (player.frameIndex() >= 9) {
        makeBullet("arrow");
    }
}

function moveEnemies() {
    wizards.forEach(function (wizard) {
        if (wizard.action != "makeLight" && wizard.action != "die") {
            if (wizard.direction == "right") {
                wizard.attrs.animation = "idleRight";
            } else {
                wizard.attrs.animation = "idleLeft";
            }

            if (wizard.attrs.x < 30) {
                wizard.setX(wizard.attrs.x + wizardSpeed);
                wizard.attrs.animation = "walkRight";
                wizard.direction = "right";
                wizard.action = "go";
            }
            if (wizard.attrs.x > canvasWidth - 70) {
                wizard.setX(wizard.attrs.x - wizardSpeed);
                wizard.attrs.animation = "walkLeft";
                wizard.direction = "left";
                wizard.action = "go";
            }
        }
    });
}

function makeEnemy(type, x, y) {
    if (type == "wizard") {
        wizard = new Konva.Sprite({
            x: x,
            y: y,
            image: wizardImg,
            animation: "idleRight",
            animations: animationsWizard,
            frameRate: 7,
            frameIndex: 0,
        });
        wizard.direction = "right";
        wizard.action = "";
        wizard.mana = 0;

        wizards.push(wizard);
    }

    layer.add(wizard);
    stage.add(layer);
    wizard.start();
}

function makeObject(type, x, y) {
    let heart, amo, grass;

    if (type == "heart") {
        heart = new Konva.Image({
            x: x,
            y: y,
            image: heartImg,
            width: 35,
            height: 27,
        });

        hearts.push(heart);
        layer.add(heart);
        stage.add(layer);
    }

    if (type == "arrow") {
        amo = new Konva.Image({
            x: x,
            y: y,
            image: arrowImg,
            width: 30,
            height: 15,
        });

        amos.push(amo);
        layer.add(amo);
        stage.add(layer);
    }

    if (type == "grass") {
        grass = new Konva.Image({
            x: x,
            y: y,
            image: grassImg,
            width: 40,
            height: 42,
        });

        layer.add(grass);
        stage.add(layer);

        grass.moveToBottom();
        layer.draw();
    }
}

function makeBullet(type, x, y) {
    if (type == "light") {
        light = new Konva.Sprite({
            x: x,
            y: y,
            image: lightImg,
            animation: "light",
            animations: animationsLight,
            frameRate: 7,
            frameIndex: 0,
        });
        lights.push(light);

        layer.add(light);
        stage.add(layer);
        light.start();
    }

    if (type == "arrow") {
        let x = player.attrs.x;
        let y = player.attrs.y;

        let arrow = new Konva.Image({
            x: player.attrs.x + 25,
            y: player.attrs.y + 20,
            image: arrowImg,
            width: 30,
            height: 7,
        });

        arrow.crop({
            x: 0,
            y: 0,
            width: 30,
            height: 7,
        });

        arrow.direction = "left";
        player.attrs.animation = "idleLeft";
        if (direction == "right") {
            arrow.direction = "right";
            player.attrs.animation = "idleRight";

            arrow.crop({
                x: 0,
                y: 8,
                width: 30,
                height: 7,
            });
        }

        player.arrows--;
        player.frameIndex(0);

        arrows.push(arrow);

        layer.add(arrow);
        stage.add(layer);

        lastFire = Date.now();
    }
}

function moveBullet() {
    let i;
    for (i = 0; i < lights.length; i++) {
        if (lights[i].frameIndex() > animationsLight.light.length / 4 - 2) {
            lights[i].setX(-10000);
            lights.splice(i, 1);
        }
    }

    for (let i = 0; i < arrows.length; i++) {
        let arrow = arrows[i];

        switch (arrow.direction) {
            case "right":
                arrow.setX(arrow.attrs.x + arrowSpeed);
                break;
            default:
                arrow.setX(arrow.attrs.x - arrowSpeed);
        }

        if (arrow.attrs.x < 0 || arrow.attrs.x > canvasWidth) {
            arrows.splice(i, 1);
            arrow.setX(-1000);
        }
    }
}

function actEnemies() {
    for (i = 0; i < wizards.length; i++) {
        wizards[i].mana++;

        if (wizards[i].mana > 200 && wizards[i].attrs.animation == "idleLeft") {
            wizards[i].action = "makeLight";
            wizards[i].attrs.animation = "attackLeft";
            wizards[i].setY(wizards[i].attrs.y - 18);
            wizards[i].mana -= 200;
            wizards[i].frameIndex(0);
        }

        if (
            wizards[i].mana > 200 &&
            wizards[i].attrs.animation == "idleRight"
        ) {
            wizards[i].action = "makeLight";
            wizards[i].attrs.animation = "attackRight";
            wizards[i].setY(wizards[i].attrs.y - 18);
            wizards[i].mana -= 200;
            wizards[i].frameIndex(0);
        }

        if (wizards[i].action == "makeLight" && wizards[i].frameIndex() > 10) {
            wizards[i].setY(wizards[i].attrs.y + 18);
            makeBullet(
                "light",
                Math.floor(Math.random() * 200 + player.attrs.x - 100),
                Math.floor(Math.random() * 200 + player.attrs.y - 100),
            );
            wizards[i].action = "stay";
            wizards[i].frameIndex(0);
        }

        if (wizards[i].action == "die" && wizards[i].frameIndex() > 4) {
            wizards[i].setX(-1000);
            wizards.splice(i, 1);
            score += 100;
            updateDifficult();
        }
    }
}

function collides(x, y, r, b, x2, y2, r2, b2) {
    return !(r <= x2 || x > r2 || b <= y2 || y > b2);
}

function boxCollides(pos, size, pos2, size2) {
    return collides(
        pos[0],
        pos[1],
        pos[0] + size[0],
        pos[1] + size[1],
        pos2[0],
        pos2[1],
        pos2[0] + size2[0],
        pos2[1] + size2[1],
    );
}

function checkCollisions() {
    let i,
        j,
        pos = [],
        posPlayer = [],
        size = [],
        sizePlayer = [],
        enemyPos = [],
        enemySize = [];

    posPlayer[0] = player.attrs.x;
    posPlayer[1] = player.attrs.y;

    enemySize[0] = 50;
    enemySize[1] = 50;

    sizePlayer[0] = 50;
    sizePlayer[1] = 50;

    for (i = 0; i < lights.length; i++) {
        enemyPos[0] = lights[i].attrs.x;
        enemyPos[1] = lights[i].attrs.y;

        if (lights[i].frameIndex() > 3) {
            if (boxCollides(enemyPos, enemySize, posPlayer, sizePlayer)) {
                getHealth(-1);
            }
        }
    }

    size[0] = 20;
    size[1] = 20;

    if (arrows.length) {
        for (i = 0; i < arrows.length; i++) {
            pos[0] = arrows[i].attrs.x;
            pos[1] = arrows[i].attrs.y;

            for (j = 0; j < wizards.length; j++) {
                enemyPos[0] = wizards[j].attrs.x;
                enemyPos[1] = wizards[j].attrs.y;

                if (wizards[j].action != "die") {
                    if (boxCollides(enemyPos, enemySize, pos, size)) {
                        arrows[i].setX(-1000);
                        arrows.splice(i, 1);

                        wizards[j].action = "die";
                        wizards[j].attrs.animation = "die";
                        wizards[j].frameIndex(0);
                    }
                }
            }
        }
    }

    size[0] = 35;
    size[1] = 27;

    if (hearts.length) {
        for (i = 0; i < hearts.length; i++) {
            pos[0] = hearts[i].attrs.x;
            pos[1] = hearts[i].attrs.y;

            if (boxCollides(pos, size, posPlayer, sizePlayer)) {
                hearts[i].setX(-1000);
                hearts.splice(i, 1);

                getHealth(25);

                makeObject(
                    "heart",
                    getRandomInt(70, 500),
                    getRandomInt(70, 400),
                );
            }
        }
    }

    size[0] = 30;
    size[1] = 15;

    if (amos.length) {
        for (i = 0; i < amos.length; i++) {
            pos[0] = amos[i].attrs.x;
            pos[1] = amos[i].attrs.y;

            if (boxCollides(pos, size, posPlayer, sizePlayer)) {
                amos[i].setX(-1000);
                amos.splice(i, 1);

                player.arrows += 2;

                makeObject(
                    "arrow",
                    getRandomInt(70, 500),
                    getRandomInt(70, 400),
                );
            }
        }
    }
}

function updateDifficult() {
    if (score > 300) {
        countEnemies = 3;
    }
    if (score > 600) {
        countEnemies = 5;
    }
    if (score > 1000) {
        countEnemies = 7;
    }

    while (wizards.length < countEnemies) {
        if (getRandomInt(0, 1)) {
            makeEnemy("wizard", -50, getRandomInt(50, 450));
        } else {
            makeEnemy("wizard", 600, getRandomInt(50, 450));
        }
    }
}

function getHealth(count) {
    health += count;

    if (health > 100) {
        health = 100;
    }
    if (health <= 0) {
        health = 0;
        gameOver();
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

makeEnemy("wizard", -30, 200);

makeObject("heart", getRandomInt(70, 500), getRandomInt(70, 400));
makeObject("arrow", getRandomInt(70, 500), getRandomInt(70, 400));

for (let g = 0; g < 10; g++) {
    makeObject("grass", getRandomInt(20, 550), getRandomInt(20, 450));
}

gameLoop.start();
