// ===============================
// PREMIUM BIRTHDAY WEBSITE
// SCRIPT PART 1
// ===============================

// Elements
const loader = document.getElementById("loader");
const giftSection = document.getElementById("giftSection");
const giftBox = document.querySelector(".gift-box");
const mainContent = document.getElementById("mainContent");
const personName = document.getElementById("personName");
const bgMusic = document.getElementById("bgMusic");

// Loader Hide
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
});

// Get Name From URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name) {
    personName.textContent = `❤️ ${name} ❤️`;
}

// Gift Open
giftBox.addEventListener("click", () => {

    giftSection.style.display = "none";

    mainContent.style.display = "block";

    // Music
    bgMusic.play().catch(() => {});

    // Smooth Scroll
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
