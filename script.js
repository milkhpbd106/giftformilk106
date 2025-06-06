document.addEventListener("DOMContentLoaded", function () {
  const correctPassword = "Milk10/6";
  const intro = document.getElementById("intro");
  const countdownText = document.getElementById("countdown-text");
  const passwordScreen = document.getElementById("password-screen");
  const passwordInput = document.getElementById("password-input");
  const submitPassword = document.getElementById("submit-password");
  const passwordMessage = document.getElementById("password-message");
  const mainContent = document.getElementById("main-content");
  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const bgMusic = document.getElementById("bg-music");
  const wishes = document.querySelectorAll("#wishes .wish");
  const laterWishes = document.getElementById("later-wishes");
  const giftButton = document.getElementById("gift-button");
  const giftGallery = document.getElementById("gift-gallery");
  const feedback = document.getElementById("feedback");
  const sendResponse = document.getElementById("send-response");
  const cancelResponse = document.getElementById("cancel-response");
  const responseDisplay = document.getElementById("response-display");

  let countdown = 10;
  countdownText.textContent = `Trang sẽ sẵn sàng sau ${countdown} giây...`;
  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      countdownText.textContent = `Trang sẽ sẵn sàng sau ${countdown} giây...`;
    } else {
      clearInterval(countdownInterval);
      countdownText.style.display = "none";
      passwordScreen.classList.remove("hidden");
    }
  }, 1000);

  // Xử lý mật khẩu
  submitPassword.addEventListener("click", () => {
    const input = passwordInput.value.trim();
    const today = new Date();
    const isBirthday = today.getMonth() === 5 && today.getDate() === 10;

    if (input === correctPassword) {
      if (!isBirthday) {
        passwordMessage.textContent = "🎁 Món quà có thể mở vào ngày 10/6 nhé!";
        return;
      }
      intro.classList.add("hidden");
      mainContent.classList.remove("hidden");
      bgMusic.play();
      playIntroSequence();
    } else {
      passwordMessage.textContent = "Sai mật khẩu rồi nè 💔";
    }
  });

  function playIntroSequence() {
    let delay = 1000;
    wishes.forEach((wish, index) => {
      setTimeout(() => {
        wish.classList.add("show");
      }, delay);
      delay += 2000;
    });

    setTimeout(() => {
      introVideo.style.display = "none";
      loopVideo.style.display = "block";
      loopVideo.play();
      laterWishes.style.display = "block";
      giftButton.style.display = "inline-block";
    }, 9000);
  }

  // Nút mở quà
  giftButton.addEventListener("click", () => {
    giftGallery.classList.remove("hidden");
    feedback.classList.remove("hidden");
    giftButton.classList.add("hidden");
  });

  // Gửi phản hồi
  sendResponse.addEventListener("click", () => {
    const responseText = document.getElementById("response").value.trim();
    if (responseText) {
      responseDisplay.innerHTML = `Milk viết: <i>\"${responseText}\"</i>`;
    }
  });

  // Hủy phản hồi
  cancelResponse.addEventListener("click", () => {
    document.getElementById("response").value = "";
    responseDisplay.innerHTML = "";
  });

  // Tạo mây bay động (7 cụm)
  const cloudsContainer = document.getElementById("clouds-container");
  for (let i = 0; i < 7; i++) {
    const cloud = document.createElement("img");
    cloud.src = "images.png";
    cloud.className = "cloud";
    cloud.style.top = `${Math.random() * 60 + 10}%`;
    cloud.style.left = `${Math.random() * 100}%`;
    cloud.style.animationDuration = `${Math.random() * 20 + 20}s`;
    cloudsContainer.appendChild(cloud);
  }
});
