const correctPassword = "Milk10/6";
let isUnlocked = false;

// Countdown logic
let countdown = 10;
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

const wishTexts = [
    "🌈 Chúc mừng sinh nhật cậu 💖",
    "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
    "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷"
];

const secondWishes = [
    "🌸 Happy Birthday Milk 💖",
    "🌈 Let’s step into a dreamy world together ✨",
    "🌟 Mong những điều tốt đẹp nhất sẽ luôn đến bên cậu 💫",
    "💖 Mong cậu luôn được hạnh phúc và thành công trên con đường của cậu 🌷"
];

// Countdown lock
passwordInput.disabled = true;
submitButton.disabled = true;

function showCountdownMessages() {
    if (countdown > 5) {
        message.innerText = "Kiên nhẫn một chút nhé tôi có chút chậm 😢";
    } else {
        message.innerText = "Hôm nay là ngày gì nào 🥰";
    }

    if (countdown <= 0) {
        clearInterval(countdownInterval);
        countdownText.style.display = "none";
        message.innerText = "";
        passwordInput.disabled = false;
        submitButton.disabled = false;
    } else {
        countdownText.innerText = countdown;
        countdown--;
    }
}

const countdownInterval = setInterval(showCountdownMessages, 1000);

// Clouds animation
for (let i = 0; i < 7; i++) {
    const cloud = document.createElement("img");
    cloud.src = "images.png";
    cloud.className = "floating-cloud";
    cloud.style.top = `${Math.random() * 80}%`;
    cloud.style.left = `${Math.random() * 90}%`;
    cloudContainer.appendChild(cloud);
}

// Password submission
submitButton.addEventListener("click", () => {
    const entered = passwordInput.value.trim();
    if (entered !== correctPassword) {
        message.innerText = "Sai mật khẩu rùi nè 😢";
        return;
    }

    // Unlock
    isUnlocked = true;
    document.getElementById("password-container").style.display = "none";
    mainContainer.style.display = "block";
    playSequence();
});

// Handle main sequence
function playSequence() {
    music.play();
    video1.style.display = "block";
    video1.play();

    let time = 0;
    wishesContainer.innerHTML = "";
    
    wishTexts.forEach((text, i) => {
        setTimeout(() => {
            const p = document.createElement("p");
            p.className = "wish glow";
            p.innerText = text;
            wishesContainer.appendChild(p);
        }, time);
        time += 2500;
    });

    // Fade out video1, show video2
    setTimeout(() => {
        video1.classList.add("fade-out");
        wishesContainer.innerHTML = "";
    }, 10000);

    setTimeout(() => {
        video1.style.display = "none";
        video2.style.display = "block";
        video2.play();
        showSecondWishes();
    }, 13000);
}

// Second wave wishes
function showSecondWishes() {
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

    // Show gift after wishes
    setTimeout(() => {
        wishesContainer.innerHTML = "";
        giftSection.style.display = "block";
    }, delay + 1000);

    // Show feedback 7s after gift
    setTimeout(() => {
        feedback.style.display = "block";
    }, delay + 8000);
}

// Gift logic
let giftVisible = false;
giftButton.addEventListener("click", () => {
    giftVisible = !giftVisible;
    giftImages.style.display = giftVisible ? "flex" : "none";
    giftButton.classList.add("clicked");
    setTimeout(() => giftButton.classList.remove("clicked"), 300);
});
