document.addEventListener("DOMContentLoaded", () => {
  const countdownBox = document.getElementById("countdownBox");
  const passwordBox = document.getElementById("passwordBox");
  const mainContent = document.getElementById("mainContent");
  const passwordInput = document.getElementById("passwordInput");
  const submitPassword = document.getElementById("submitPassword");
  const passwordMessage = document.getElementById("passwordMessage");

  const video1 = document.getElementById("video1");
  const video2 = document.getElementById("video2");

  const firstWishes = document.getElementById("firstWishes");
  const secondWishes = document.getElementById("secondWishes");

  const giftTrigger = document.getElementById("giftTrigger");
  const toggleGift = document.getElementById("toggleGift");
  const giftImages = document.getElementById("giftImages");

  const feedbackSection = document.getElementById("feedbackSection");
  const sendFeedback = document.getElementById("sendFeedback");
  const feedbackName = document.getElementById("feedbackName");
  const feedbackInput = document.getElementById("feedbackInput");
  const feedbackStatus = document.getElementById("feedbackStatus");
  const feedbackList = document.getElementById("feedbackList");

  const backgroundMusic = document.getElementById("backgroundMusic");

  // 1. Countdown animation
  setTimeout(() => {
    countdownBox.classList.add("hidden");
    passwordBox.classList.remove("hidden");
    passwordInput.disabled = false;
    submitPassword.disabled = false;
  }, 5000); // Show after 5 seconds

  // 2. Password check
  submitPassword.addEventListener("click", () => {
    const value = passwordInput.value.trim().toLowerCase();
    if (value === "milkfuyuhi" || value === "fuyuhimilk") {
      passwordBox.classList.add("hidden");
      mainContent.classList.remove("hidden");
      playVideos();
      backgroundMusic.play();
    } else {
      passwordMessage.textContent = "❌ Sai mật khẩu rồi 😢";
    }
  });

  // 3. Play videos in order
  function playVideos() {
    video1.classList.remove("hidden");
    video1.play();
    video1.onended = () => {
      video1.classList.add("hidden");
      video2.classList.remove("hidden");
      video2.play();
    };
    video2.onended = () => {
      video2.classList.add("hidden");
      firstWishes.classList.remove("hidden");
    };
  }

  // 4. Gift trigger
  giftTrigger.addEventListener("click", () => {
    firstWishes.classList.add("hidden");
    secondWishes.classList.remove("hidden");
    giftSection.classList.remove("hidden");
    feedbackSection.classList.remove("hidden");
  });

  // 5. Toggle gift images
  toggleGift.addEventListener("click", () => {
    giftImages.classList.toggle("hidden");
  });

  // 6. Send feedback
  sendFeedback.addEventListener("click", () => {
    const name = feedbackName.value.trim();
    const text = feedbackInput.value.trim();

    if (!name || !text) {
      feedbackStatus.textContent = "⛔ Vui lòng điền đầy đủ thông tin!";
      return;
    }

    const message = document.createElement("div");
    message.textContent = `💌 ${name}: ${text}`;
    message.style.margin = "10px 0";
    feedbackList.appendChild(message);

    feedbackInput.value = "";
    feedbackStatus.textContent = "✅ Gửi thành công!";
  });
});
