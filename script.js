
const correctPassword = "Milk10/6";
let isUnlocked = false;

const countdownText = document.getElementById("countdown-text");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");

const cloudContainer = document.getElementById("cloud-container");
const mainContainer = document.getElementById("main-container");

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const music = document.getElementById("background-music");

const wishesContainer = document.getElementById("wishes");
const giftSection = document.getElementById("gift-section");
const giftButton = document.getElementById("gift-button");
const giftImages = document.getElementById("gift-images");
const feedback = document.getElementById("feedback");

const fuyuhiBox = document.getElementById("feedback-fuyuhi");
const milkBox = document.getElementById("feedback-milk");

const wishTexts = [
    "🌈 Chúc mừng sinh nhật cậu 💖",
    "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
    "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷"
];

const secondWishes = [
    "🌸 Happy Birthday Milk 💖",
    "🌈 Let’s step into a dreamy world together ✨",
    "🌟 Những điều dịu dàng và tuyệt vời sẽ đến với cậu 💫",
    "💖 Mong cậu luôn được hạnh phúc trên con đường của cậu 🌷"
];

// Countdown loading style
passwordInput.disabled = true;
submitButton.disabled = true;

let countdown = 10;
function showLoading() {
    if (countdown > 5) {
        message.innerText = "Kiên nhẫn một chút nhé tôi có chút chậm 😢";
    } else {
        message.innerText = "Hôm nay là ngày gì nào 🥰";
    }

    if (countdown <= 0) {
        clearInterval(countdownInterval);
        countdownText.style.display = "none";
        passwordInput.disabled = false;
        submitButton.disabled = false;
        message.innerText = "";
    } else {
        countdown--;
    }
}
const countdownInterval = setInterval(showLoading, 1000);

// Clouds
for (let i = 0; i < 7; i++) {
    const cloud = document.createElement("img");
    cloud.src = "images.png";
    cloud.className = "floating-cloud";
    cloud.style.top = `${Math.random() * 80}%`;
    cloud.style.left = `${Math.random() * 90}%`;
    cloudContainer.appendChild(cloud);
}

// Password check
submitButton.addEventListener("click", () => {
    const entered = passwordInput.value.trim();
    if (entered !== correctPassword) {
        message.innerText = "Sai mật khẩu rùi 😢";
        return;
    }

    document.getElementById("password-container").style.display = "none";
    cloudContainer.style.display = "none";
    mainContainer.style.display = "block";
    playSequence();
});

function playSequence() {
    music.play();
    video1.style.display = "block";
    video1.play();
    wishesContainer.innerHTML = "";

    let time = 0;
    wishTexts.forEach((text) => {
        setTimeout(() => {
            const p = document.createElement("p");
            p.className = "wish glow";
            p.innerText = text;
            wishesContainer.appendChild(p);
        }, time);
        time += 2300;
    });

    setTimeout(() => {
        wishesContainer.innerHTML = "";
        video1.style.display = "none";
        video2.style.display = "block";
        video2.play();

        let delay = 0;
        secondWishes.forEach((text, i) => {
            setTimeout(() => {
                const p = document.createElement("p");
                p.className = "wish glow";
                p.innerText = text;
                wishesContainer.appendChild(p);
            }, delay);
            delay += 3000;
        });

        setTimeout(() => {
            wishesContainer.innerHTML = "";
            giftSection.style.display = "block";
        }, delay + 1000);

        setTimeout(() => {
            feedback.style.display = "block";
            restoreFeedback();
        }, delay + 8000);
    }, 8000);
}

// Gift logic
giftButton.addEventListener("click", () => {
    giftImages.style.display = giftImages.style.display === "none" ? "flex" : "none";
    giftButton.classList.add("clicked");
    setTimeout(() => giftButton.classList.remove("clicked"), 300);
});

// Feedback logic
fuyuhiBox.addEventListener("input", () => {
    localStorage.setItem("fuyuhi", fuyuhiBox.value);
});
milkBox.addEventListener("input", () => {
    localStorage.setItem("milk", milkBox.value);
});
function restoreFeedback() {
    fuyuhiBox.value = localStorage.getItem("fuyuhi") || "";
    milkBox.value = localStorage.getItem("milk") || "";
}
