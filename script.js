/* =========================
   INTRO
========================= */

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");


startBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

});


/* =========================
   LOVE CARD FLIP
========================= */

const loveCards = document.querySelectorAll(".love-card");


loveCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});


/* =========================
   IMAGE MODAL
========================= */

const memoryImages = document.querySelectorAll(".memory-card img");

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");


memoryImages.forEach(image => {

    image.addEventListener("click", () => {

        modal.classList.add("active");

        modalImage.src = image.src;

    });

});


closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* =========================
   FINAL SURPRISE
========================= */

const surpriseBtn = document.getElementById("surpriseBtn");
const finalMessage = document.getElementById("finalMessage");


surpriseBtn.addEventListener("click", () => {

    surpriseBtn.style.display = "none";

    finalMessage.classList.remove("hidden");

    createConfetti();

});


/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
    document.querySelector(".hearts-container");


function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 15 + 10) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 6) + "s";

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 12000);

}


setInterval(createHeart, 1200);


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-20px";

        piece.style.width = "8px";

        piece.style.height = "8px";

        piece.style.background =
            ["#e58da9", "#ffffff", "#ffd6e3", "#f3c0d0"]
            [Math.floor(Math.random() * 4)];

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";

        piece.style.borderRadius = "2px";

        document.body.appendChild(piece);


        const animation =
            piece.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(110vh)
                             translateX(${Math.random() * 300 - 150}px)
                             rotate(720deg)`,

                        opacity: 0
                    }
                ],

                {
                    duration:
                        Math.random() * 2000 + 2500,

                    easing: "cubic-bezier(.2,.8,.3,1)"
                }

            );


        animation.onfinish = () => {

            piece.remove();

        };

    }

}