// Khởi tạo đếm ngược và hiệu ứng cloud
let countdown = 10;
const hintText = document.getElementById('hint-text');
const passwordInput = document.getElementById('password-input');
const unlockBtn = document.getElementById('unlock-btn');
const errorMsg = document.getElementById('error-msg');
const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const bgm = document.getElementById('bgm');
const messages = document.getElementById('messages');
const giftButton = document.getElementById('gift-button');
const giftBox = document.getElementById('gift-box');
const feedback = document.getElementById('feedback');
const milkMessage = document.getElementById('milk-message');
const fuyuhiMessage = document.getElementById('fuyuhi-message');
const submitFeedback = document.getElementById('submit-feedback');

const correctPassword = 'Milk10/6';

// Countdown logic
const countdownInterval = setInterval(() => {
  hintText.textContent = `⏳ Đợi tớ một xíu nha... ${countdown}s`;
  countdown--;

  if (countdown < 0) {
    clearInterval(countdownInterval);
    hintText.textContent = '🌟 Cảm ơn đã đợi, giờ thì nhập mật khẩu nhé!';
    passwordInput.disabled = false;
    unlockBtn.disabled = false;
  }
}, 1000);

// Mở khóa
unlockBtn.addEventListener('click', () => {
  const input = passwordInput.value.trim();
  if (input === correctPassword) {
    // Ẩn màn hình nhập mật khẩu, chuyển sang giao diện chính
    passwordScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    startSequence();
  } else {
    errorMsg.textContent = '❌ Mật khẩu sai rồi, thử lại nhé!';
    setTimeout(() => (errorMsg.textContent = ''), 3000);
  }
});

function startSequence() {
  video1.play();
  bgm.play();

  // Sau khi video1 kết thúc, chuyển sang video2
  video1.addEventListener('ended', () => {
    video1.classList.add('hidden');
    video2.classList.remove('hidden');
    video2.play();
    showMessages();
  });
}

// Hiển thị từng lời chúc với thời gian và hiệu ứng
function showMessages() {
  const messagesList = [
    "💫 Tớ có một điều muốn nói với cậu...",
    "🎂 Hôm nay là một ngày rất đặc biệt...",
    "🌸 Là sinh nhật của Milk đó!",
    "🫧 Tớ đã chuẩn bị một điều nhỏ nhỏ...",
    "💝 Mong là cậu sẽ thích nó nha...",
    "🎁 Nhấn vào món quà để mở nhé..."
  ];

  let index = 0;
  const interval = setInterval(() => {
    if (index >= messagesList.length) {
      clearInterval(interval);
      giftButton.classList.remove('hidden');
    } else {
      const msg = document.createElement('div');
      msg.textContent = messagesList[index];
      msg.classList.add('message-line');
      messages.appendChild(msg);
      index++;
    }
  }, 4000);
}

// Mở/đóng quà
let giftOpen = false;
giftButton.addEventListener('click', () => {
  giftOpen = !giftOpen;
  giftBox.classList.toggle('hidden', !giftOpen);

  if (giftOpen) {
    giftButton.textContent = '✨ Đóng lại nhé';
    setTimeout(() => {
      feedback.classList.remove('hidden');
    }, 3000);
  } else {
    giftButton.textContent = '🎁 Món quà dành riêng cho cậu';
    feedback.classList.add('hidden');
  }
});

// Phản hồi (hiện tại lưu local)
submitFeedback.addEventListener('click', () => {
  const milkText = milkMessage.value.trim();
  const fuyuhiText = fuyuhiMessage.value.trim();

  if (!milkText && !fuyuhiText) {
    alert('Hãy viết gì đó trước khi gửi nha!');
    return;
  }

  // Lưu localStorage
  localStorage.setItem('milk-msg', milkText);
  localStorage.setItem('fuyuhi-msg', fuyuhiText);

  alert('🌟 Lưu lại rồi đó, cảm ơn hai bạn!');
});
