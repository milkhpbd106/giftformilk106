let countdown = 10;
let password = "Milk10/6";
let cloudContainer = document.getElementById("clouds");
let hintText = document.getElementById("hint-text");
let passwordInput = document.getElementById("password-input");
let enterBtn = document.getElementById("enter-btn");
let errorMessage = document.getElementById("error-message");
let music = document.getElementById("bg-music");
let video1 = document.getElementById("video1");
let video2 = document.getElementById("video2");
let mainContent = document.getElementById("main-content");
let giftBtn = document.getElementById("gift-button");
let giftImages = document.getElementById("gift-images");
let feedback = document.getElementById("feedback");
let messages = document.getElementById("messages");

function showHint() {
  if (countdown > 5) {
    hintText.innerText = "⏳ Kiên nhẫn một chút nhé, tôi có chút chậm 😔";
  } else {
    hintText.innerText = "🎂 Hôm nay là ngày gì nào? 😄";
  }
  if (countdown === 0) {
    clearInterval(counting);
    passwordInput.disabled = false;
    enterBtn.disabled = false;
    hintText.innerText = "";
  }
  countdown--;
}
let counting = setInterval(showHint, 1000);

// Clouds
for (let i = 0; i < 7; i++) {
  let cloud = document.createElement("div");
  cloud.classList.add("cloud");
  cloud.style.top = `${Math.random() * 90}%`;
  cloud.style.animationDuration = `${40 + Math.random() * 40}s`;
  cloudContainer.appendChild(cloud);
}

// Password check
enterBtn.addEventListener("click", () => {
  if (passwordInput.value === password) {
    document.getElementById("password-screen").classList.add("hidden");
    cloudContainer.innerHTML = "";
    mainContent.classList.remove("hidden");
    video1.play();
    music.play();
    startSequence();
  } else {
    errorMessage.innerText = "Sai mật khẩu rùi nè 😢";
  }
});

function startSequence() {
  video1.classList.remove("hidden");
  video2.classList.add("hidden");
  const msgs = [
    "🌈 Chúc mừng sinh nhật cậu 💖",
    "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
    "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷"
  ];
  showMessages(msgs, 0, 2500, () => {
    setTimeout(() => {
      video1.classList.add("hidden");
      video2.classList.remove("hidden");
      const msgs2 = [
        "🌸 Happy Birthday Milk 💖",
        "🌈 Let’s step into a dreamy world together ✨"
      ];
      showMessages(msgs2, 0, 3000, () => {
        const msgs3 = [
          "🌟 Mong cậu luôn hạnh phúc và mơ mộng 💫",
          "💖 Fuyuhi luôn ở đây bên cạnh cậu 🌷"
        ];
        showMessages(msgs3, 0, 3000);
      });
    }, 10000);
  });
}

function showMessages(list, index, delay, callback) {
  if (index >= list.length) {
    setTimeout(() => messages.innerHTML = "", 3000);
    if (callback) callback();
    return;
  }
  let msg = document.createElement("div");
  msg.innerText = list[index];
  msg.style.animation = "pop 0.5s ease forwards";
  messages.appendChild(msg);
  setTimeout(() => showMessages(list, index + 1, delay, callback), delay);
}

// Gift section
giftBtn.addEventListener("click", () => {
  if (giftImages.classList.contains("hidden")) {
    giftImages.classList.remove("hidden");
    setTimeout(() => feedback.classList.remove("hidden"), 7000);
  } else {
    giftImages.classList.add("hidden");
    feedback.classList.add("hidden");
  }
});

document.getElementById("submit-feedback").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const display = document.createElement("div");
  display.innerHTML = `<strong>${name}:</strong> ${message}`;
  document.getElementById("all-feedbacks").appendChild(display);
});
