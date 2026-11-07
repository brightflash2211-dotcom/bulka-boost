
// SNOW ANIMATION

const snow = document.getElementById("snow");

const snowSymbols = ["❄", "❅", "❆", "·"];

function createSnowflake() {
    if (!snow) return;

    const flake = document.createElement("span");

    flake.classList.add("snowflake");

    flake.textContent =
        snowSymbols[Math.floor(Math.random() * snowSymbols.length)];

    flake.style.left = Math.random() * 100 + "vw";
    flake.style.fontSize = (10 + Math.random() * 18) + "px";
    flake.style.opacity = 0.2 + Math.random() * 0.7;

    const duration = 5 + Math.random() * 10;

    flake.style.animationDuration = duration + "s";

    snow.appendChild(flake);

    setTimeout(() => {
        flake.remove();
    }, duration * 1000);
}

if (snow) {
    setInterval(createSnowflake, 180);

    for (let i = 0; i < 25; i++) {
        setTimeout(createSnowflake, i * 100);
    }
}


// STANDOFF 2 CALCULATOR

const startRank = document.getElementById("startRank");
const endRank = document.getElementById("endRank");
const boostPrice = document.getElementById("boostPrice");
const boostMessage = document.getElementById("boostMessage");

function calculateBoost() {
    if (!startRank || !endRank || !boostPrice || !boostMessage) {
        return;
    }

    const start = Number(startRank.value);
    const end = Number(endRank.value);

    if (end <= start) {
        boostPrice.textContent = "0 GOLD";
        boostMessage.textContent = "Выбери ранг выше текущего.";
        return;
    }

    const price = (end - start) * 100;

    boostPrice.textContent = price + " GOLD";
    boostMessage.textContent = "Стоимость рассчитана автоматически.";
}

if (startRank && endRank) {
    startRank.addEventListener("change", calculateBoost);
    endRank.addEventListener("change", calculateBoost);

    calculateBoost();
}
