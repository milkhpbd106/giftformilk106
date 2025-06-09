const firebaseConfig = {
  apiKey: "AIzaSyDk2BtoDJlgG8W6-x70ASvB_moia_Cwhw8",
  authDomain: "giftformilk106.firebaseapp.com",
  databaseURL: "https://giftformilk106-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "giftformilk106",
  storageBucket: "giftformilk106.appspot.com",
  messagingSenderId: "1051805092551",
  appId: "1:1051805092551:web:479bf575005a61e8d84ce2",
  measurementId: "G-64E8XTRHY2"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const correctPassword = "Milk10/6";

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
const feedbackToggle = document.getElementById("feedback-toggle");
const toggleFeedbackBtn = document.getElementById("toggle-feedback");

const fuyuhiBox = document.getElementById("feedback-fuyuhi");
const milkBox = document.getElementById("feedback-milk");

passwordInput.disabled = true;
submitButton.disabled = true;

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
  }
  countdown--;
}
const countdownInterval = setInterval(showCountdownMessages, 1000);

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
submitButton.addEventListener("click", () => {
  const entered = passwordInput.value.trim();
  if (entered !== correctPassword) {
    message.innerText = "Sai mật khẩu rồi nè 😢";
    return;
  }

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
  "🌟 Mong những điều dịu dàng và tốt đẹp luôn đến bên cậu 💫",
  "💖 Mong thế giới của cậu luôn đẹp và luôn hạnh phúc trên con đường của mình nhé 🌷"
];

function playSequence() {
  music.play();
  video1.style.display = "block";
  video1.play();

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

  setTimeout(() => {
    video1.style.display = "none";
    video2.style.display = "block";
    video2.play();
    wishesContainer.innerHTML = "";

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

    setTimeout(() => {
      wishesContainer.innerHTML = "";
      giftSection.style.display = "block";
    }, 14000);

    setTimeout(() => {
      feedbackToggle.style.display = "block";
      restoreFeedback();
    }, 21000);
  }, 10000);
}

// Gift
let giftVisible = false;
giftButton.addEventListener("click", () => {
  giftVisible = !giftVisible;
  giftImages.style.display = giftVisible ? "flex" : "none";
  giftButton.classList.add("clicked");
  setTimeout(() => giftButton.classList.remove("clicked"), 300);
});

// Feedback toggle
toggleFeedbackBtn.addEventListener("click", () => {
  feedback.style.display = feedback.style.display === "none" ? "block" : "none";
});

// Lưu vĩnh viễn
fuyuhiBox.addEventListener("input", () => {
  db.ref("feedback/fuyuhi").set(fuyuhiBox.value);
});
milkBox.addEventListener("input", () => {
  db.ref("feedback/milk").set(milkBox.value);
});
function restoreFeedback() {
  db.ref("feedback/fuyuhi").on("value", (snapshot) => {
    fuyuhiBox.value = snapshot.val() || "";
  });
  db.ref("feedback/milk").on("value", (snapshot) => {
    milkBox.value = snapshot.val() || "";
  });
}
