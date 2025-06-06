document.addEventListener("DOMContentLoaded", () => {
    const passwordScreen = document.getElementById("password-screen");
    const cloudContainer = document.getElementById("cloud-container");
    const mainContent = document.getElementById("main-content");
    const passwordInput = document.getElementById("password-input");
    const submitPassword = document.getElementById("submit-password");
    const countdown = document.querySelector(".countdown");
    const introVideo = document.getElementById("intro-video");
    const bgMusic = document.getElementById("bg-music");
    const greetings = document.getElementById("greetings");
    const giftButton = document.getElementById("toggle-gift");
    const giftImages = document.getElementById("gift-images");
    const messageSection = document.getElementById("message-section");

    let timeLeft = 10;
    const timer = setInterval(() => {
        countdown.textContent = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            countdown.style.display = "none";
        }
    }, 1000);

    submitPassword.addEventListener("click", () => {
        if (passwordInput.value === "Milk10/6") {
            passwordScreen.style.display = "none";
            cloudContainer.style.display = "none";
            mainContent.classList.remove("hidden");
            bgMusic.play();

            let p = greetings.querySelectorAll("p");
            greetings.classList.remove("hidden");
            let delay = 0;
            p.forEach((el, idx) => {
                setTimeout(() => {
                    el.style.opacity = 1;
                }, delay);
                setTimeout(() => {
                    el.style.opacity = 0;
                }, delay + 3000);
                delay += 3500;
            });

            setTimeout(() => {
                document.getElementById("gift-section").classList.remove("hidden");
            }, delay + 1000);
        }
    });

    giftButton.addEventListener("click", () => {
        if (giftImages.classList.contains("hidden")) {
            giftImages.classList.remove("hidden");
            setTimeout(() => {
                messageSection.classList.remove("hidden");
            }, 7000);
        } else {
            giftImages.classList.add("hidden");
            messageSection.classList.add("hidden");
        }
    });
});