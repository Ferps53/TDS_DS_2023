let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d");

var sizeWidth = window.innerWidth,
    sizeHeight = window.innerHeight

//Dessa forma é possivel deixar o canvas responsivo
canvas.width = sizeWidth;
canvas.height = sizeHeight;

var diff = localStorage.getItem("dificuldade")
let mousePosX = 0;
let mousePosY = 0;

let touchWall = 0;

var trollei = document.getElementById("video")
var bossMusic = new Audio('music/bossMusic.mp3')


function trolleikk(){
    trollei.volume = localStorage.getItem("volume")/100
    trollei.style.display = "flex"
    bossMusic.pause();
    trollei.play();
}  


function playBossMusic() {
    bossMusic.volume = localStorage.getItem("volume")/100
    console.log(bossMusic.volume)
    bossMusic.play();

}

function startJogo() {
    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        mousePosX = event.clientX - rect.left;
        mousePosY = event.clientY - rect.top;
        button.clickButton(mousePosX, mousePosY);
    })

    canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        mousePosX = event.clientX - rect.left;
        mousePosY = event.clientY - rect.top;

    });

    let updateButton = function () {
        if (touchWall > 0) {
            setInterval(button.randomTeleport(), 10)
        }
        //encontra as coordenadas 0,0 do botão e descobre a distancia em relação a elas
        let distanceX = -mousePosX + ((button.width / 2) + button.x);
        let distanceY = -mousePosY + ((button.height / 2) + button.y);

        function moveButton() {

            let top = button.y;
            let left = button.x;
            let bottom = button.y + button.height;
            let right = button.x + button.width;

            if (top < 0) {
                button.speedY += 24;
                if (touchWall == 0) {
                    playBossMusic();
                    alert("Você acha que seria fácil assim? 🤣🤣\n Agora vou Libertar meus poderes!!!! muwhahahahaha")
                    touchWall++;
                }
                button.teleport();
            } else if (left < 0) {
                button.speedX += 24;
                if (touchWall == 0) {
                    playBossMusic();
                    alert("Você acha que seria fácil assim? 🤣🤣 \n Agora vou Libertar meus poderes!!!! muwhahahahaha");
                    touchWall++;
                }
                button.teleport();
            } else if (bottom > sizeHeight) {
                button.speedY -= 24;
                if (touchWall == 0) {
                    playBossMusic();
                    alert("Você acha que seria fácil assim? 🤣🤣 \n Agora vou Libertar meus poderes!!!! muwhahahahaha");
                    touchWall++;
                }
                button.teleport();
            } else if (right > sizeWidth) {
                button.speedX -= 24;
                if (touchWall == 0) {
                    playBossMusic();
                    alert("Você acha que seria fácil assim? 🤣🤣 \n Agora vou Libertar meus poderes!!!! muwhahahahaha");
                    touchWall++;
                }
                button.teleport();
            }



            if (distanceX > 10 && distanceX < 400 && (distanceY < 350 && distanceY > -350)) {
                button.speedX += 3.5*diff;
                if (touchWall > 0) { button.randomTeleport() }
                if (distanceY > 10 && distanceY < 400) {
                    button.speedY += 3*diff;
                } else if (distanceY < -10 && distanceY > -400) {
                    button.speedY -= 3*diff;
                }
            }
            else if (distanceX < -10 && distanceX > -400 && (distanceY < 350 && distanceY > -350)) {
                button.speedX -= 3.5*diff;
                if (touchWall > 0) { button.randomTeleport() }
                if (distanceY > 10 && distanceY < 400) {
                    button.speedY += 3*diff;
                } else if (distanceY < -10 && distanceY > -400) {
                    button.speedY -= 3*diff;
                }
            }
            else {
                button.speedX = 0;
                button.speedY = 0;
            }

        }

        requestAnimationFrame(updateButton);
        moveButton();

        button.update();
    }

    let button = new Rectangle(sizeWidth / 2, sizeHeight / 2, 200, 100, 0, 0);
    button.draw(context);

    updateButton();

}

class Rectangle {

    constructor(x, y, width, height, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imagePath = document.getElementById("delete");
        this.speedX = speedX;
        this.speedY = speedY;

    }


    randomGenerator() {
        return Math.floor(Math.random() * 1000);
    }

    parabens() {
        alert("Você conseguiu, parabéns!!!! 🥳🥳🥳")
        alert("Trollei🤣🤣🤣")
        trolleikk();

    }

    clickButton(x, y) {

        let distanceX = -x + ((this.width / 2) + this.x);
        let distanceY = -y + ((this.height / 2) + this.y);

        console.log(distanceX, distanceY)



        if (distanceX < 100 && distanceX > -100) {
            if (distanceY < 50 && distanceY > -50) {
                this.parabens();
            } else {
                return false
            }
        } else {
            return false
        }


    }

    teleport() {
        this.x = (this.randomGenerator());
        this.y = (this.randomGenerator());
    }

    randomTeleport() {
        if (this.randomGenerator() == 0) {
            this.teleport();

        }
    }

    draw(context) {
        context.drawImage(this.imagePath, this.x, this.y, this.width, this.height)
    }
    update() {
        context.clearRect(0, 0, sizeWidth, sizeHeight)
        this.draw(context);
        this.draw(context);
        this.x += this.speedX;
        this.y += this.speedY;
    }


}

