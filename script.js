
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

// Создаём снежинки постоянно
setInterval(createSnowflake, 180);

// Начальный снег
for (let i = 0; i < 25; i++) {
    setTimeout(createSnowflake, i * 100);
}
