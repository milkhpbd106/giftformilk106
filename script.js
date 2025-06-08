document.addEventListener('DOMContentLoaded', function () {
  const greetings = [
    "🌈 Chúc mừng sinh nhật cậu 💖",
    "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸",
    "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷",
    "🌸 Happy Birthday Milk 💖",
    "🌈 Let’s step into a dreamy world together ✨",
    "💫 Mong những ước mơ của cậu đều trở thành hiện thực 🌠",
    "🎀 Tớ luôn ở đây, dõi theo cậu bằng tất cả yêu thương 💖"
  ];
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.textAlign = 'center';
  document.body.appendChild(container);

  let i = 0;
  function showNextGreeting() {
    if (i >= greetings.length) return;
    const p = document.createElement('p');
    p.className = 'glow-text';
    p.textContent = greetings[i];
    container.appendChild(p);
    setTimeout(() => {
      p.remove();
      i++;
      showNextGreeting();
    }, 3000);
  }

  showNextGreeting();
});