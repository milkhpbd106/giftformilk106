const password = "Milk10/6";
const unlockDate = new Date("2025-06-10");

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const message = document.getElementById("message");
  if (input === password) {
    const today = new Date();
    if (today.toDateString() !== unlockDate.toDateString()) {
      message.textContent = "Món quà có thể mở vào ngày 10/6 ✨";
    } else {
      startExperience();
    }
  } else {
    message.textContent = "Sai mật khẩu rồi, thử lại nhé 💭";
  }
}

function startExperience() {
  document.getElementById("passwordScreen").classList.add("hidden");
  const main = document.getElementById("mainContent");
  main.classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.play();

  const introVideo = document.getElementById("introVideo");
  const msg1 = document.getElementById("message1");
  msg1.classList.remove("hidden");

  setTimeout(() => {
    introVideo.classList.add("hidden");
    document.getElementById("loopVideo").classList.remove("hidden");
    msg1.classList.add("hidden");

    const msg2 = document.getElementById("message2");
    msg2.classList.remove("hidden");

    setTimeout(() => {
      msg2.classList.add("hidden");
      document.getElementById("openGiftButton").classList.remove("hidden");
    }, 6000); // message2 hiện 3s, fade 3s
  }, 10000); // sau 10s đổi video
}

document.getElementById("openGiftButton").onclick = () => {
  document.getElementById("giftContainer").classList.toggle("hidden");
};
