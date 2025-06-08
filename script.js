let countdown = 10;
const loadingMessage = document.getElementById("loading-message");
const spinner = document.getElementById("spinner");

function startLoading() {
  spinner.style.display = "block";
  let step = 0;

  const messages = [
    "Kiên nhẫn một chút nhé, tôi load hơi chậm... 😔",
    "Hôm nay là ngày gì nào? 🥰"
  ];

  const interval = setInterval(() => {
    if (step < messages.length) {
      loadingMessage.textContent = messages[step];
      step++;
    } else {
      clearInterval(interval);
      spinner.style.display = "none";
      document.getElementById("password-form").style.display = "block";
    }
  }, 5000);
}

function checkPassword() {
  const pw = document.getElementById("password-input").value;
  if (pw === "Milk10/6") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("bg-music").play();
    showFirstVideo();
  } else {
    document.getElementById("password-error").textContent = "Sai mật khẩu rồi nè 😢";
  }
}

function showFirstVideo() {
  const v1 = document.getElementById("video-1");
  const v2 = document.getElementById("video-2");
  v1.play();

  const messages = document.querySelectorAll("#messages-container .message");
  messages.forEach((msg, i) => {
    setTimeout(() => msg.style.opacity = "1", i * 2300);
  });

  setTimeout(() => {
    v1.style.display = "none";
    v2.style.display = "block";
    v2.play();
    showLaterMessages();
  }, 10000);
}

function showLaterMessages() {
  document.getElementById("messages-container").style.display = "none";
  document.getElementById("messages-later").style.display = "block";

  const msgs = document.querySelectorAll("#messages-later .message");

  // 2 câu đầu
  setTimeout(() => { msgs[0].style.opacity = "1"; }, 1000);
  setTimeout(() => { msgs[1].style.opacity = "1"; }, 4000);

  // 2 câu sau
  setTimeout(() => { msgs[2].style.opacity = "1"; }, 7000);
  setTimeout(() => { msgs[3].style.opacity = "1"; }, 10000);
}

document.getElementById("gift-button").addEventListener("click", () => {
  const gift = document.getElementById("gift-images");
  gift.style.display = gift.style.display === "none" ? "flex" : "none";

  if (gift.style.display === "flex") {
    setTimeout(() => {
      document.getElementById("feedback-section").style.display = "flex";
    }, 7000);
  }
});

function saveFeedback(type) {
  const val = document.getElementById("feedback-" + type).value;
  if (val.trim()) {
    localStorage.setItem("feedback-" + type, val);
    alert("Đã lưu lời nhắn 💖");
  }
}

window.onload = () => {
  startLoading();

  ["fuyuhi", "milk"].forEach(type => {
    const saved = localStorage.getItem("feedback-" + type);
    if (saved) {
      document.getElementById("feedback-" + type).value = saved;
    }
  });
};
