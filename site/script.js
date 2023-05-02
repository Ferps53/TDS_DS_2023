const foda = document.getElementById("foda");

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function calculateDistance() {
  document.addEventListener("mousemove", (event) => {
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    var botao = foda.getBoundingClientRect("foda");

    let distanceX = Math.floor((botao.left + botao.right) / 2 - mouseX);
    let distanceY = Math.floor((botao.top + botao.bottom) / 2 - mouseY);

    //console.log("dist X: " +mouseX +" dist Y: " + mouseY)

    const instintoSuperior = setInterval(() =>{teleport()}, 3000);

    if (botao.top <= 0) {
      foda.style.top = 95 + "vh";
    } else if (botao.left <= 45) {
      foda.style.left = 95 + "vw";
    }



    if (
      (distanceX > 1 && distanceX < 200 && distanceY < 400) ||
      distanceY > -400
    ) {
      foda.style.left = parseInt(foda.style.left || 0) + 10 + "px";

      if (distanceY > 0 && distanceY < 100) {
        foda.style.top = parseInt(foda.style.top || 0) + 7 + "px";
      } else if (distanceY < 0 && distanceY > -100) {
        foda.style.top = parseInt(foda.style.top || 0) - 7 + "px";
      }
      console.log("+esquerda");
    }
    else if (
      (distanceX < -1 && distanceX > -200 && distanceY < 400) ||
      distanceY > -400
    ) {
      foda.style.left = parseInt(foda.style.left || 0) - 10 + "px";

      if (distanceY > 0 && distanceY < 100) {
        foda.style.top = parseInt(foda.style.top || 0) + 7 + "px";
      } else if (distanceY < 0 && distanceY > -100) {
        foda.style.top = parseInt(foda.style.top || 0) - 7 + "px";
      }
      console.log("-esquerda");
    }

    sleep(0);
  });
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function teleport() {
    var random = getRndInteger(0, 10);
    if (random == 0) {
      var randomX = getRndInteger(0, 90);
      var randomY = getRndInteger(0, 95);

      foda.style.top = randomY + "vh";
      foda.style.left = randomX + "vw";
    }
}

function start() {
  foda.style.left = 45 + "vw";
  foda.style.top = 45 + "vh";
  calculateDistance();
}

function fodas() {
  alert("Parabéns 🥳🥳🥳");
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  //incrementar a quantidade de vezes que o botão foi apertado antes pela lenda
}
