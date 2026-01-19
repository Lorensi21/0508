let currentStep = 1;
const notes = [
    ["Я завжди буду поруч", "tl"],
    ["Ти величзна умнічка.", "tr"],
    ["Я завжди буду тебе підтримувати.", "bl"],
    ["Крок за кроком все вийде.", "br"]
];

function nextStep() {
    document.getElementById(`step-${currentStep}`).classList.remove("active");
    currentStep++;

    const next = document.getElementById(`step-${currentStep}`);
    if (next) {
        next.classList.add("active");
    }
}


/* сторінка 3 */
function showPhoto() {
    const photo = document.getElementById("rightPhoto");
    const love = document.getElementById("loveText");
    const btn = document.getElementById("actionBtn3");

    photo.style.backgroundImage = "url('assets/photos/photo1.jpeg')";
    photo.classList.add("visible");

    setTimeout(() => {
        love.classList.add("visible");
    }, 600);

    btn.innerText = "Несемся далі бібізянка";
    btn.onclick = nextStep;
}


/* сторінка 4 */

function showCornerNote() {
    const btn = document.getElementById("actionBtn4");
    const step4 = document.getElementById("step-4");

    notes.forEach(([text, pos]) => {
        const div = document.createElement("div");
        div.className = `corner ${pos}`;
        div.innerText = text;
        step4.appendChild(div);
    });
    btn.innerText = "А тепер фіналочка красотка роза";
    btn.onclick = nextStep;
}




/* Сердечки */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 90 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 15000);
}

// Постійні фонова сердечка
setInterval(() => {
    createHeart();
}, 500);

// Додаткові серця при натисканні будь-якої кнопки
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        for (let i = 0; i < 15; i++) createHeart();
    });
});


