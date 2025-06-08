const correctPassword = "Milk10/6";
let isUnlocked = false;

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
    "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸"
];

const secondWishes = [
    "🌸 Happy Birthday Milk 💖",
    "🌟 Mong những điều tốt đẹp nhất sẽ luôn đến bên cậu 💫"
];

// Countdown
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

    isUnlocked = true;
    document.getElementById("password-container").style.display = "none";
    cloudContainer.style.display = "none"; // ❗ Ẩn mây sau khi vào
    mainContainer.style.display = "block";
    playSequence();
});

function playSequence() {
    music.play();
    video1.style.display = "block";
    video1.play();

    let time = 0;
    wishesContainer.innerHTML = "";

    wishTexts.forEach((text) => {
        setTimeout(() => {
            const p = document.createElement("p");
            p.className = "wish glow";
            p.innerText = text;
            wishesContainer.appendChild(p);
        }, time);
        time += 3000;
    });

    // Không fade-out nữa
    setTimeout(() => {
        video1.style.display = "none";
        video2.style.display = "block";
        video2.play();
        wishesContainer.innerHTML = "";

        secondWishes.forEach((text, index) => {
            setTimeout(() => {
                const p = document.createElement("p");
                p.className = "wish glow";
                p.innerText = text;
                wishesContainer.appendChild(p);
            }, index * 3000);
        });

        setTimeout(() => {
            wishesContainer.innerHTML = "";
            giftSection.style.display = "block";
        }, 7000);

        setTimeout(() => {
            feedback.style.display = "block";
            restoreFeedback();
        }, 14000);

    }, 7000);
}

// Gift logic
let giftVisible = false;
giftButton.addEventListener("click", () => {
    giftVisible = !giftVisible;
    giftImages.style.display = giftVisible ? "flex" : "none";
    giftButton.classList.add("clicked");
    setTimeout(() => giftButton.classList.remove("clicked"), 300);
});

// Feedback saving
const fuyuhiBox = document.getElementById("feedback-fuyuhi");
const milkBox = document.getElementById("feedback-milk");

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
