
const password = "Milk10/6";
const cloudContainer = document.getElementById("cloud-container");
const passwordContainer = document.getElementById("password-container");
const mainContainer = document.getElementById("main-container");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");
const countdownText = document.getElementById("countdown-text");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const backgroundMusic = document.getElementById("background-music");
const wishesContainer = document.getElementById("wishes");
const giftButton = document.getElementById("gift-button");
const giftImages = document.getElementById("gift-images");
const giftSection = document.getElementById("gift-section");
const feedbackSection = document.getElementById("feedback");
const saveFeedbackBtn = document.getElementById("save-feedback");
const fuyuhiInput = document.getElementById("fuyuhi-input");
const milkInput = document.getElementById("milk-input");

let countdown = 10;

function createClouds(num) {
  for (let i = 0; i < num; i++) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");
    cloud.style.top = Math.random() * 80 + "%";
    cloud.style.left = Math.random() * 100 + "vw";
    cloud.style.animationDuration = 20 + Math.random() * 20 + "s";
    cloudContainer.appendChild(cloud);
  }
}

createClouds(7);

const countdownInterval = setInterval(() => {
  countdown--;
  countdownText.textContent = countdown;
  if (countdown === 5) {
    message.textContent = "Hôm nay là ngày gì nào? 🥰";
  } else if (countdown === 9) {
    message.textContent = "Kiên nhẫn một chút nhé, tôi load hơi chậm... 😔";
  } else if (countdown <= 0) {
    clearInterval(countdownInterval);
    countdownText.style.display = "none";
    passwordInput.style.display = "inline";
    submitButton.style.display = "inline";
  }
}, 1000);

submitButton.addEventListener("click", () => {
  if (passwordInput.value === password) {
    cloudContainer.style.display = "none";
    passwordContainer.style.display = "none";
    mainContainer.style.display = "block";
    startMain();
  } else {
    message.textContent = "Sai mật khẩu rồi nè 😢";
  }
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startMain() {
  backgroundMusic.play();
  video1.play();
  const wishes = [
    "🌈 Chúc mừng sinh nhật cậu 💖",
    "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
    "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷"
  ];

  for (let i = 0; i < wishes.length; i++) {
    wishesContainer.innerHTML = `<p>${wishes[i]}</p>`;
    await delay(3000);
  }

  wishesContainer.innerHTML = "";
  await delay(1000);

  video1.style.transition = "opacity 3s";
  video1.style.opacity = 0;
  await delay(3000);
  video1.style.display = "none";
  video2.style.display = "block";
  video2.play();

  const wishes2 = [
    "🌸 Happy Birthday Milk 💖",
    "🌈 Let’s step into a dreamy world together ✨",
    "💫 Mong những ước mơ của cậu đều trở thành hiện thực 🌠",
    "🎀 Tớ luôn ở đây, dõi theo cậu bằng tất cả yêu thương 💖"
  ];

  for (let i = 0; i < 2; i++) {
    wishesContainer.innerHTML = `<p>${wishes2[i]}</p>`;
    await delay(3000);
  }

  wishesContainer.innerHTML = "";
  await delay(1000);

  for (let i = 2; i < wishes2.length; i++) {
    wishesContainer.innerHTML = `<p>${wishes2[i]}</p>`;
    await delay(3000);
  }

  giftSection.style.display = "block";
}

let giftOpened = false;
giftButton.addEventListener("click", () => {
  giftOpened = !giftOpened;
  giftImages.style.display = giftOpened ? "block" : "none";
  if (giftOpened) {
    setTimeout(() => {
      feedbackSection.style.display = "block";
    }, 7000);
  }
});

// Phản hồi vĩnh viễn bằng localStorage
window.addEventListener("load", () => {
  fuyuhiInput.value = localStorage.getItem("fuyuhi") || "";
  milkInput.value = localStorage.getItem("milk") || "";
});

saveFeedbackBtn.addEventListener("click", () => {
  localStorage.setItem("fuyuhi", fuyuhiInput.value);
  localStorage.setItem("milk", milkInput.value);
});
