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

const fuyuhiBox = document.getElementById("feedback-fuyuhi");
const milkBox = document.getElementById("feedback-milk");
const feedback = document.getElementById("feedback");

const firstWishes = [
  "🌈 Chúc mừng sinh nhật cậu 💖",
  "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
  "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷"
];

const secondWishes = [
  "🌸 Happy Birthday Milk 💖",
  "🌈 Let’s step into a dreamy world together ✨"
];

const finalWishes = [
  "🌟 Mong những điều dịu dàng sẽ luôn bên cậu 💫",
  "💖 Tớ sẽ luôn dõi theo cậu bằng cả trái tim 🌷"
];

// Disable input during loading
passwordInput.disabled = true;
submitButton.disabled = true;

// Loading animation (replaces countdown)
let dots = 0;
let seconds = 10;

const loadingInterval = setInterval(() => {
  countdownText.innerText = ".".repeat((dots % 4) + 1);
  dots++;
}, 500);

const showInterval = setInterval(() => {
  if (seconds === 10) {
    message.innerText = "Kiên nhẫn một chút nhé tôi có chút chậm 😢";
  } else if (seconds === 5) {
    message.innerText = "Hôm nay là ngày gì nào 🥰";
  }

  if (seconds === 0) {
    clearInterval(showInterval);
    clearInterval(loadingInterval);
    countdownText.style.display = "none";
    message.innerText = "";
    passwordInput.disabled = false;
    submitButton.disabled = false;
  }
  seconds--;
}, 1000);


// Create clouds
for (let i = 0; i < 7; i++) {
  const cloud = document.createElement("img");
  cloud.src = "images.png";
  cloud.className = "floating-cloud";
  cloud.style.top = `${Math.random() * 80}%`;
  cloud.style.left = `${Math.random() * 90}%`;
  cloudContainer.appendChild(cloud);
}

// Password logic
submitButton.addEventListener("click", () => {
  const input = passwordInput.value.trim();
  if (input !== correctPassword) {
    message.innerText = "Sai mật khẩu rùi 😢";
    return;
  }
  isUnlocked = true;
  document.getElementById("password-container").style.display = "none";
  cloudContainer.style.display = "none";
  mainContainer.style.display = "block";
  playSequence();
});

// Main flow
function playSequence() {
  music.play();
  video1.style.display = "block";
  video1.play();
  wishesContainer.innerHTML = "";

  let delay = 0;
  firstWishes.forEach((text, i) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.className = "wish glow";
      p.innerText = text;
      wishesContainer.appendChild(p);
    }, delay);
    delay += 2300;
  });

  setTimeout(() => {
    wishesContainer.innerHTML = "";
    video1.style.display = "none";
    video2.style.display = "block";
    video2.play();
    showSecondWishes();
  }, 10000);
}

function showSecondWishes() {
  wishesContainer.innerHTML = "";

  let delay = 0;
  secondWishes.forEach((text) => {
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
    finalWishes.forEach((text, i) => {
      setTimeout(() => {
        const p = document.createElement("p");
        p.className = "wish glow";
        p.innerText = text;
        wishesContainer.appendChild(p);
      }, i * 3000);
    });
  }, 6500);

  setTimeout(() => {
    wishesContainer.innerHTML = "";
    giftSection.style.display = "block";
  }, 13500);

  setTimeout(() => {
    feedback.style.display = "block";
    restoreFeedback();
  }, 20500);
}

// Gift click logic
let giftVisible = false;
giftButton.addEventListener("click", () => {
  giftVisible = !giftVisible;
  giftImages.style.display = giftVisible ? "flex" : "none";
  giftButton.classList.add("clicked");
  setTimeout(() => giftButton.classList.remove("clicked"), 300);
});

// Feedback storage logic
fuyuhiBox.addEventListener("input", () => {
  localStorage.setItem("feedback_fuyuhi", fuyuhiBox.value);
});
milkBox.addEventListener("input", () => {
  localStorage.setItem("feedback_milk", milkBox.value);
});

function restoreFeedback() {
  fuyuhiBox.value = localStorage.getItem("feedback_fuyuhi") || "";
  milkBox.value = localStorage.getItem("feedback_milk") || "";
}
