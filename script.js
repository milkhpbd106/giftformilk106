
let countdown = 10;
const countdownEl = document.getElementById("countdown");
const passwordInput = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");
const hintText = document.getElementById("hint-text");
const errorMessage = document.getElementById("error-message");

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const music = document.getElementById("bg-music");
const messageContainer = document.getElementById("message-container");
const giftBtn = document.getElementById("gift-button");
const giftImages = document.getElementById("gift-images");
const feedbackInput = document.getElementById("feedback-input");
const feedbackSubmit = document.getElementById("feedback-submit");
const feedbackDisplay = document.getElementById("feedback-display");
const feedbackSection = document.getElementById("feedback-section");

const messages1 = [
  "🌈 Chúc mừng sinh nhật cậu 💖",
  "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
  "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷",
];

const messages2 = [
  "🌸 Happy Birthday Milk 💖",
  "🌈 Let’s step into a dreamy world together ✨",
  "🌟 Mong mỗi ngày của cậu đều tràn ngập ánh sáng 💫",
  "💖 Hy vọng những điều dịu dàng luôn bên cạnh cậu 🌷",
];

let clouds = [];
function createClouds() {
  const cloudContainer = document.getElementById("cloud-container");
  for (let i = 0; i < 7; i++) {
    const cloud = document.createElement("img");
    cloud.src = "images.png";
    cloud.classList.add("cloud");
    cloud.style.top = `${Math.random() * 90}%`;
    cloud.style.left = `${-200 - Math.random() * 300}px`;
    cloud.style.animationDuration = `${60 + Math.random() * 30}s`;
    cloudContainer.appendChild(cloud);
    clouds.push(cloud);
  }
}
createClouds();

const timer = setInterval(() => {
  countdown--;
  countdownEl.textContent = countdown;

  if (countdown === 5) {
    hintText.textContent = "🎉 Hôm nay là ngày gì nào nhỉ? 💫";
  }

  if (countdown === 0) {
    clearInterval(timer);
    passwordInput.disabled = false;
    submitBtn.disabled = false;
    hintText.textContent = "";
    countdownEl.style.display = "none";
  }
}, 1000);

submitBtn.onclick = () => {
  if (passwordInput.value === "Milk10/6") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    video1.style.display = "block";
    music.play();

    showMessages(messages1, () => {
      video1.style.display = "none";
      video2.style.display = "block";
      showMessages(messages2);
    });
  } else {
    errorMessage.textContent = "Sai mật khẩu rùi nè 😢";
  }
};

function showMessages(msgs, callback) {
  messageContainer.innerHTML = "";
  let i = 0;

  function showNext() {
    if (i < msgs.length) {
      const p = document.createElement("p");
      p.className = "message";
      p.innerHTML = msgs[i];
      messageContainer.appendChild(p);
      setTimeout(() => p.classList.add("show"), 100);
      i++;
      setTimeout(showNext, (msgs.length <= 3 ? 2200 : 3000));
    } else if (callback) {
      setTimeout(callback, 1000);
    } else {
      giftBtn.style.display = "block";
    }
  }

  showNext();
}

giftBtn.onclick = () => {
  giftImages.classList.toggle("hidden");
  giftImages.style.display = giftImages.classList.contains("hidden") ? "none" : "flex";
  feedbackSection.style.display = "block";
};

feedbackSubmit.onclick = () => {
  const val = feedbackInput.value.trim();
  if (val) {
    const p = document.createElement("p");
    p.textContent = val;
    feedbackDisplay.appendChild(p);
    feedbackInput.value = "";
    localStorage.setItem("milk-feedback", feedbackDisplay.innerHTML);
  }
};

window.onload = () => {
  const saved = localStorage.getItem("milk-feedback");
  if (saved) feedbackDisplay.innerHTML = saved;
};
