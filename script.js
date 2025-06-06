let countdown = 10;
const passwordInput = document.getElementById("password-input");
const passwordBtn = document.getElementById("password-btn");
const countdownText = document.getElementById("countdown-text");
const blessings1 = document.getElementById("blessings1");
const blessings2 = document.getElementById("blessings2");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const music = document.getElementById("bg-music");
const giftBtn = document.getElementById("gift-btn");
const giftBox = document.getElementById("gift-box");
const feedbackBox = document.getElementById("feedback-box");
const feedbackInput = document.getElementById("feedback-input");
const feedbackSubmit = document.getElementById("feedback-submit");
const feedbacks = document.getElementById("feedbacks");

let allowInput = false;

const countdownInterval = setInterval(() => {
    countdownText.innerText = countdown > 5 ? "🥺 Kiên nhẫn một chút nhé tôi có chút chậm..." : "✨ Hôm nay là ngày gì nào ✨";
    countdown--;
    if (countdown <= 0) {
        clearInterval(countdownInterval);
        countdownText.innerText = "";
        passwordInput.disabled = false;
        passwordBtn.disabled = false;
        allowInput = true;
    }
}, 1000);

passwordBtn.addEventListener("click", () => {
    if (!allowInput) return;
    if (passwordInput.value === "Milk10/6") {
        document.getElementById("password-screen").classList.add("hidden");
        document.getElementById("video1-screen").classList.remove("hidden");
        music.play();
        video1.play();
        showBlessings1();
        setTimeout(() => {
            document.getElementById("video1-screen").classList.add("hidden");
            document.getElementById("video2-screen").classList.remove("hidden");
            showBlessings2();
        }, 13000);
    } else {
        countdownText.innerText = "Sai mật khẩu rùi nè 😢";
    }
});

function showBlessings1() {
    const texts = [
        "🌈 Chúc mừng sinh nhật cậu 💖",
        "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
        "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷"
    ];
    texts.forEach((text, i) => {
        setTimeout(() => {
            blessings1.innerText = text;
        }, i * 2500);
    });
}

function showBlessings2() {
    const texts = [
        "🌸 Happy Birthday Milk 💖",
        "🌈 Let’s step into a dreamy world together ✨",
        "🌟 Mong những điều dịu dàng luôn bên cậu 💫",
        "💖 Chúc Milk luôn mơ những giấc mơ ngọt ngào 🌷"
    ];
    texts.forEach((text, i) => {
        setTimeout(() => {
            blessings2.innerText = text;
        }, i * 3000);
    });
    setTimeout(() => {
        blessings2.innerText = "";
    }, 12000);
    setTimeout(() => {
        feedbackBox.classList.remove("hidden");
    }, 17000);
}

giftBtn.addEventListener("click", () => {
    giftBox.classList.toggle("hidden");
});

feedbackSubmit.addEventListener("click", () => {
    const message = feedbackInput.value.trim();
    if (message) {
        const entry = document.createElement("div");
        entry.textContent = message;
        feedbacks.appendChild(entry);
        feedbackInput.value = "";
    }
});