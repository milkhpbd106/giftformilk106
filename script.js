const correctPassword = "Milk10/6";
let countdown = 10;

const loadingIcon = document.getElementById("loading-icon");
const message = document.getElementById("message");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
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

const firstWishes = [
  "🌈 Chúc mừng sinh nhật cậu 💖",
  "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
  "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷"
];

const secondWishes = [
  "🌸 Happy Birthday Milk 💖",
  "🌈 Let’s step into a dreamy world together ✨",
  "🌟 Mong những điều tốt đẹp nhất sẽ luôn đến bên cậu 💫",
  "💖 Tớ luôn ở đây, dõi theo cậu bằng tất cả yêu thương 🌷"
];

// Disable input at start
passwordInput.disabled = true;
submitButton.disabled = true;

// Countdown with loading icon
let timer = setInterval(() => {
  if (countdown > 5) {
    message.innerText = "Kiên nhẫn một chút nhé, tôi có chút chậm... 😢";
  } else {
    message.innerText = "Hôm nay là ngày gì nào? 🥰";
  }

  countdown--;
  if (countdown < 0) {
    clearInterval(timer);
    loadingIcon.style.display = "none";
    message.innerText = "";
    passwordInput.disabled = false;
    submitButton.disabled = false;
  }
}, 1000);

// Clouds
for (let i = 0; i < 7; i++) {
  const cloud = document.createElement("img");
  cloud.src = "images.png";
  cloud.className = "floating-cloud";
  cloud.style.top = `${Math.random() * 80}%`;
  cloud.style.left = `${Math.random() * 90}%`;
  cloudContainer.appendChild(cloud);
}

// Password
submitButton.onclick = () => {
  const entered = passwordInput.value.trim();
  if (entered !== correctPassword) {
    message.innerText = "Sai mật khẩu rồi nè 😢";
    return;
  }

  document.getElementById("password-container").style.display = "none";
  cloudContainer.style.display = "none";
  mainContainer.style.display = "block";
  startSequence();
};

function startSequence() {
  music.play();
  video1.style.display = "block";
  video1.play();
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

  secondWishes.slice(0, 2).forEach((text, i) => {
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
    secondWishes.slice(2).forEach((text, i) => {
      setTimeout(() => {
        const p = document.createElement("p");
        p.className = "wish glow";
        p.innerText = text;
        wishesContainer.appendChild(p);
      }, i * 3000);
    });
  }, 6000);

  setTimeout(() => {
    wishesContainer.innerHTML = "";
    giftSection.style.display = "block";
  }, 13000);

  setTimeout(() => {
    feedback.style.display = "block";
    restoreFeedback();
  }, 20000);
}

// Gift
giftButton.onclick = () => {
  giftVisible = !giftImages.style.display || giftImages.style.display === "none";
  giftImages.style.display = giftVisible ? "flex" : "none";
  giftButton.classList.add("clicked");
  setTimeout(() => giftButton.classList.remove("clicked"), 300);
};

// Feedback (persistent)
fuyuhiBox.addEventListener("input", () => {
  localStorage.setItem("fuyuhi-feedback", fuyuhiBox.value);
});
milkBox.addEventListener("input", () => {
  localStorage.setItem("milk-feedback", milkBox.value);
});
function restoreFeedback() {
  fuyuhiBox.value = localStorage.getItem("fuyuhi-feedback") || "";
  milkBox.value = localStorage.getItem("milk-feedback") || "";
}
