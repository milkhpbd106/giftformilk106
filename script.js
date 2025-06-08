const correctPassword = "Milk10/6";
let isUnlocked = false;

const loader = document.getElementById("loader");
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

passwordInput.disabled = true;
submitButton.disabled = true;

// Countdown 10s + loading effect
let countdown = 10;
function showCountdownMessages() {
  if (countdown > 5) {
    message.innerText = "Kiên nhẫn một chút nhé, tôi có chút chậm... 😢";
  } else {
    message.innerText = "Hôm nay là ngày gì nào? 🥰";
  }

  if (countdown <= 0) {
    clearInterval(countdownInterval);
    loader.style.display = "none";
    passwordInput.disabled = false;
    submitButton.disabled = false;
    message.innerText = "";

    // ✅ Thêm hiệu ứng click
    submitButton.classList.add("click-glow");
  }
  countdown--;
}
const countdownInterval = setInterval(showCountdownMessages, 1000);

// Clouds bay
for (let i = 0; i < 7; i++) {
  const cloud = document.createElement("img");
  cloud.src = "images.png";
  cloud.className = "floating-cloud";
  cloud.style.top = `${Math.random() * 80}%`;
  cloud.style.left = `${Math.random() * 90}%`;
  cloudContainer.appendChild(cloud);
}

// Kiểm tra mật khẩu
submitButton.addEventListener("click", () => {
  const entered = passwordInput.value.trim();
  if (entered !== correctPassword) {
    message.innerText = "Sai mật khẩu rồi nè 😢";
    return;
  }

  isUnlocked = true;
  document.getElementById("password-container").style.display = "none";
  cloudContainer.style.display = "none";
  mainContainer.style.display = "block";
  playSequence();
});

const firstWishes = [
  "🌈 Chúc mừng sinh nhật cậu 💖",
  "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
  "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷"
];

const secondWishes = [
  "🌸 Happy Birthday Milk 💖",
  "🌈 Let’s step into a dreamy world together ✨",
  "🌟 Mong cậu sẽ luôn rạng rỡ như nắng mai 💫",
  "💖 Tớ luôn ở đây, dõi theo cậu bằng tất cả yêu thương 🌷"
];

function playSequence() {
  music.play();
  video1.style.display = "block";
  video1.play();

  // 3 câu đầu
  wishesContainer.innerHTML = "";
  let time = 0;
  firstWishes.forEach((text) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.className = "wish glow";
      p.innerText = text;
      wishesContainer.appendChild(p);
    }, time);
    time += 2500;
  });

  // Sau 10s: chuyển sang video2
  setTimeout(() => {
    video1.style.display = "none";
    video2.style.display = "block";
    video2.play();
    wishesContainer.innerHTML = "";

    // Đợt 1: 2 câu đầu
    setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          const p = document.createElement("p");
          p.className = "wish glow";
          p.innerText = secondWishes[i];
          wishesContainer.appendChild(p);
        }, i * 3000);
      }
    }, 1000);

    // Đợt 2: 2 câu sau
    setTimeout(() => {
      wishesContainer.innerHTML = "";
      for (let i = 2; i < 4; i++) {
        setTimeout(() => {
          const p = document.createElement("p");
          p.className = "wish glow";
          p.innerText = secondWishes[i];
          wishesContainer.appendChild(p);
        }, (i - 2) * 3000);
      }
    }, 7000);

    // Hiện nút quà
    setTimeout(() => {
      wishesContainer.innerHTML = "";
      giftSection.style.display = "block";
      giftButton.classList.add("click-glow"); // ✅ Hiệu ứng click cho nút quà
    }, 14000);

    // Hiện phản hồi
    setTimeout(() => {
      feedback.style.display = "block";
      restoreFeedback();
    }, 21000);
  }, 10000);
}

// Mở/đóng quà
let giftVisible = false;
giftButton.addEventListener("click", () => {
  giftVisible = !giftVisible;
  giftImages.style.display = giftVisible ? "flex" : "none";
  giftButton.classList.add("clicked");
  setTimeout(() => giftButton.classList.remove("clicked"), 300);
});

// Lưu phản hồi
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
