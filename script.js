const passwordScreen = document.getElementById("password-screen");
const cloudContainer = document.getElementById("cloud-container");
const countdownDiv = document.getElementById("countdown");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
const passwordField = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

const mainContainer = document.getElementById("main-container");
const bgMusic = document.getElementById("bg-music");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

const messages = document.getElementById("messages");
const moreMessages = document.getElementById("more-messages");

const giftButton = document.getElementById("gift-button");
const giftBox = document.getElementById("gift-box");
const feedback = document.getElementById("feedback");
const feedbackFuyuhi = document.getElementById("feedback-fuyuhi");
const feedbackMilk = document.getElementById("feedback-milk");
const saveFeedback = document.getElementById("save-feedback");

// Mây bay
for (let i = 0; i < 7; i++) {
  const cloud = document.createElement("img");
  cloud.src = "assets/images.png";
  cloud.style.top = Math.random() * 80 + "%";
  cloud.style.left = Math.random() * 100 + "vw";
  cloud.style.animationDuration = 15 + Math.random() * 10 + "s";
  cloudContainer.appendChild(cloud);
}

// Đếm ngược 10s
let count = 10;
const countdownInterval = setInterval(() => {
  if (count > 5) {
    countdownDiv.innerHTML = "☁️ Kiên nhẫn một chút nhé, tôi load hơi chậm... 😔";
  } else if (count > 0) {
    countdownDiv.innerHTML = "🌤 Hôm nay là ngày gì nào? 😘";
  } else {
    clearInterval(countdownInterval);
    countdownDiv.style.display = "none";
    passwordInput.style.display = "block";
  }
  count--;
}, 1000);

// Kiểm tra mật khẩu
submitButton.addEventListener("click", () => {
  if (passwordField.value === "Milk10/6") {
    passwordScreen.style.display = "none";
    cloudContainer.style.display = "none";
    mainContainer.style.display = "block";
    bgMusic.play();
    video1.classList.add("active");

    // Hiện 3 lời chúc đầu
    setTimeout(() => document.getElementById("msg1").style.display = "block", 1000);
    setTimeout(() => document.getElementById("msg2").style.display = "block", 3000);
    setTimeout(() => document.getElementById("msg3").style.display = "block", 5000);

    // Chuyển sang video 2
    video1.addEventListener("ended", () => {
      video1.classList.remove("active");
      video2.classList.add("active");

      // Hiện 2 lời chúc đầu đợt 2
      setTimeout(() => {
        moreMessages.style.display = "block";
        moreMessages.children[0].style.display = "block";
        moreMessages.children[1].style.display = "block";
      }, 500);

      // Sau đó hiện tiếp 2 câu sau
      setTimeout(() => {
        moreMessages.children[2].style.display = "block";
        moreMessages.children[3].style.display = "block";
      }, 6500);
    });
  } else {
    errorMessage.textContent = "Sai mật khẩu rồi nè 😢";
  }
});

// Món quà
let giftOpened = false;
giftButton.addEventListener("click", () => {
  giftOpened = !giftOpened;
  giftBox.style.display = giftOpened ? "flex" : "none";
  if (giftOpened) {
    setTimeout(() => {
      feedback.style.display = "block";
    }, 7000);
  }
});

// Phản hồi vĩnh viễn
window.addEventListener("load", () => {
  feedbackFuyuhi.value = localStorage.getItem("fbFuyuhi") || "";
  feedbackMilk.value = localStorage.getItem("fbMilk") || "";
});

saveFeedback.addEventListener("click", () => {
  localStorage.setItem("fbFuyuhi", feedbackFuyuhi.value);
  localStorage.setItem("fbMilk", feedbackMilk.value);
  alert("🌸 Đã lưu rồi nè!");
});
