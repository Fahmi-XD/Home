// Loading Page //
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".load").style.visibility = "visible";
    } else {
        document.querySelector(".load").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

// Scrool Text //
let num = 2, num2 = 1;

setInterval(function() {
    const arr = ["9.9rem", "11.7rem", "5rem", "9.9rem"];
    if (num === 1) {
        document.querySelector(".texts .scroll #scroll-text h3:nth-child("+num+")").classList.add("point");
        document.querySelector(".texts .scroll #scroll-text h3:nth-child(3)").classList.remove("point");
    } else {
        document.querySelector(".texts .scroll #scroll-text h3:nth-child("+num+")").classList.add("point");
        document.querySelector(".texts .scroll #scroll-text h3:nth-child("+(num - 1)+")").classList.remove("point");
    }
    document.getElementById("triger-scroll").style.width = arr[num2];
    num ++
    num2 ++
    if (num2 == 4) {
        num2 = 1;
    }
    if (num == 4) {
        num = 1;
    }
}, 2500);

// Music //
const listImg = document.querySelector(".playlist .music img");
const list = document.querySelectorAll(".playlist .list");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        const getImgSrc = document.querySelectorAll(".playlist .list .img img");
        const getListText = document.querySelectorAll(".playlist .list .info h3");
        const setMusicText = document.querySelector(".playlist .music h3");
        listImg.src = getImgSrc[i].src;
        setMusicText.innerText = getListText[i].innerText;
        for (let i = 0; i < list.length; i++) {
            list[i].style = "background: rgba(26, 26, 26, 1);";
        }
        list[i].style = "background: darkorange;";
    });
}

// navbar //
const navbar = document.querySelector("#navbar");
const navbarBody = document.querySelector("#navbar #body");
const hero = document.querySelector(".hero-section");
const aboutMe = document.querySelector(".about-me");

navbarBody.addEventListener("click", function() {
    navbar.classList.toggle("show");
    if (navbar.classList[1]) {
        hero.addEventListener("click", function() { navbar.classList.remove("show"); });
        aboutMe.addEventListener("click", function() { navbar.classList.remove("show"); });
    };
});