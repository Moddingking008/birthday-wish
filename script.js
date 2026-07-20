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
// ===============================
// ANIMATIONS PART 2
// ===============================

// Gift Animation
giftBox.addEventListener("click", () => {

    // Gift Zoom Out
    gsap.to(".gift-box",{
        scale:2,
        opacity:0,
        duration:1
    });

    setTimeout(()=>{

        giftSection.style.display="none";
        mainContent.style.display="block";

        gsap.from("#mainContent",{
            opacity:0,
            y:100,
            duration:1.2
        });

        bgMusic.play().catch(()=>{});

        // Confetti
        confetti({
            particleCount:250,
            spread:180,
            origin:{y:0.6}
        });

    },900);

});

// Typing Effect

new Typed("#birthdayMessage",{

strings:[
"Wishing you endless happiness ❤️",
"May all your dreams come true ✨",
"Stay blessed forever 🎂"
],

typeSpeed:55,

backSpeed:30,

loop:true

});

// Share Button

document
.getElementById("shareBtn")
.addEventListener("click",()=>{

if(navigator.share){

navigator.share({

title:"Happy Birthday ❤️",

text:"Special Birthday Surprise",

url:window.location.href

});

}else{

navigator.clipboard.writeText(window.location.href);

alert("Link Copied ❤️");

}

});
