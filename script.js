
const password = "Milk10/6";
const cloudContainer = document.getElementById("cloud-container");
const passwordContainer = document.getElementById("password-container");
const input = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-button");
const mainContainer = document.getElementById("main-container");
const countdownText = document.getElementById("countdown-text");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const wishes = document.getElementById("wishes");
const giftBtn = document.getElementById("gift-button");
const giftImages = document.getElementById("gift-images");
const giftSection = document.getElementById("gift-section");
const feedback = document.getElementById("feedback");
const fuyuhiMsg = document.getElementById("fuyuhi-msg");
const milkMsg = document.getElementById("milk-msg");
const bgm = document.getElementById("background-music");

// Khởi tạo đám mây
function createClouds() {
  for (let i = 0; i < 7; i++) {
    let cloud = document.createElement("img");
    cloud.src = "cloud.png";
    cloud.classList.add("floating-cloud");
    cloud.style.top = Math.random() * 100 + "vh";
    cloud.style.left = Math.random() * -100 + "vw";
    cloud.style.animationDuration = 40 + Math.random() * 40 + "s";
    cloudContainer.appendChild(cloud);
  }
}
createClouds();

// Đếm ngược
let countdown = 10;
const countdownInterval = setInterval(() => {
  countdownText.textContent = countdown;
  countdown--;
  if (countdown < 0) {
    clearInterval(countdownInterval);
    countdownText.style.display = "none";
  }
}, 1000);

// Xử lý mật khẩu
submitBtn.onclick = () => {
  if (input.value === password) {
    cloudContainer.innerHTML = ""; // ẩn mây
    passwordContainer.style.display = "none";
    mainContainer.style.display = "block";
    bgm.play();

    video1.style.display = "block";
    video1.play();

    video1.onended = () => {
      video1.style.display = "none";
      video2.style.display = "block";
      video2.play();
      showWishes();
    };
  } else {
    alert("Sai mật khẩu rồi 😢");
  }
};

function showWishes() {
  const lines1 = [
    "Chúc cậu có một sinh nhật ngập tràn yêu thương 🎂",
    "Luôn hạnh phúc và mỉm cười như ánh nắng ✨"
  ];
  const lines2 = [
    "Có những ước mơ đẹp đẽ thành hiện thực 🌸",
    "Và ngày nào cũng là ngày đặc biệt như hôm nay 💖"
  ];

  let i = 0;
  function showLines(lines, callback) {
    if (i < lines.length) {
      const p = document.createElement("p");
      p.textContent = lines[i];
      p.classList.add("wish", "glow");
      wishes.appendChild(p);
      i++;
      setTimeout(() => showLines(lines, callback), 2500);
    } else {
      if (callback) setTimeout(callback, 2500);
    }
  }

  showLines(lines1, () => {
    wishes.innerHTML = "";
    i = 0;
    showLines(lines2, () => {
      giftSection.style.display = "block";
    });
  });
}

giftBtn.onclick = () => {
  giftImages.style.display =
    giftImages.style.display === "none" ? "flex" : "none";
  giftBtn.classList.toggle("clicked");
  if (giftImages.style.display === "flex") {
    setTimeout(() => {
      feedback.style.display = "block";
    }, 7000);
  } else {
    feedback.style.display = "none";
  }
};

// Lưu phản hồi
const saveFeedback = () => {
  localStorage.setItem("fuyuhi", fuyuhiMsg.value);
  localStorage.setItem("milk", milkMsg.value);
};

fuyuhiMsg.oninput = saveFeedback;
milkMsg.oninput = saveFeedback;

// Khôi phục
window.onload = () => {
  fuyuhiMsg.value = localStorage.getItem("fuyuhi") || "";
  milkMsg.value = localStorage.getItem("milk") || "";
};
