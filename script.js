// script.js

// Bắt đầu countdown 10 giây
let countdown = 10;
const countdownText = document.getElementById("countdownText");
const passwordBox = document.getElementById("passwordBox");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const passwordMessage = document.getElementById("passwordMessage");

const backgroundMusic = document.getElementById("backgroundMusic");

const firstWishes = document.getElementById("firstWishes");
const secondWishes = document.getElementById("secondWishes");
const giftTrigger = document.getElementById("giftTrigger");
const giftSection = document.getElementById("giftSection");
const toggleGift = document.getElementById("toggleGift");
const giftImages = document.getElementById("giftImages");
const feedbackSection = document.getElementById("feedbackSection");
const feedbackInput = document.getElementById("feedbackInput");
const sendFeedback = document.getElementById("sendFeedback");
const feedbackStatus = document.getElementById("feedbackStatus");

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const mainContent = document.getElementById("mainContent");

function startCountdown() {
  const interval = setInterval(() => {
    if (countdown > 5) {
      countdownText.innerHTML = "😔 Kiên nhẫn một chút nhé, tôi có chút chậm...";
    } else if (countdown > 0) {
      countdownText.innerHTML = "🥰 Hôm nay là ngày gì nào?";
    } else {
      clearInterval(interval);
      countdownText.classList.add("hidden");
      passwordBox.classList.remove("hidden");
    }
    countdown--;
  }, 1000);
}

submitPassword.addEventListener("click", () => {
  const pw = passwordInput.value.trim();
  if (pw === "Milk10/6") {
    document.body.classList.add("unlocked");
    document.getElementById("countdownBox").classList.add("hidden");
    passwordBox.classList.add("hidden");
    mainContent.classList.remove("hidden");
    backgroundMusic.play();
    playVideo1Sequence();
  } else {
    passwordMessage.innerHTML = "😢 Sai mật khẩu rồi nè";
  }
});

function playVideo1Sequence() {
  video1.classList.remove("hidden");
  video1.play();
  firstWishes.classList.remove("hidden");

  const wishes = firstWishes.querySelectorAll(".wish");
  wishes.forEach((wish, index) => {
    setTimeout(() => {
      wish.style.opacity = 1;
    }, index * 2300);
  });

  setTimeout(() => {
    wishes.forEach((wish) => (wish.style.opacity = 0));
  }, 7000);

  setTimeout(() => {
    video1.classList.add("fade-out");
  }, 10000);

  setTimeout(() => {
    video1.classList.add("hidden");
    video2.classList.remove("hidden");
    video2.play();
    secondWishes.classList.remove("hidden");
    showSecondWishes();
  }, 13000);
}

function showSecondWishes() {
  const wishes = secondWishes.querySelectorAll(".wish");
  wishes.forEach((wish, index) => {
    setTimeout(() => {
      wish.style.opacity = 1;
    }, index * 3000);
  });

  setTimeout(() => {
    wishes.forEach((wish) => (wish.style.opacity = 0));
  }, 12000);
}

giftTrigger.addEventListener("click", () => {
  giftSection.classList.remove("hidden");
});

toggleGift.addEventListener("click", () => {
  giftImages.classList.toggle("hidden");

  setTimeout(() => {
    feedbackSection.classList.remove("hidden");
  }, 7000);
});

sendFeedback.addEventListener("click", () => {
  const msg = feedbackInput.value.trim();
  if (msg) {
    let all = JSON.parse(localStorage.getItem("birthday_feedback")) || [];
    all.push({ from: "Milk or Fuyuhi", message: msg, time: new Date().toISOString() });
    localStorage.setItem("birthday_feedback", JSON.stringify(all));
    feedbackStatus.innerHTML = "💌 Đã gửi phản hồi thành công!";
    feedbackInput.value = "";
  } else {
    feedbackStatus.innerHTML = "⚠️ Vui lòng viết gì đó trước khi gửi.";
  }
});

window.onload = () => {
  startCountdown();
};
