document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".load").style.visibility = "visible";
    } else {
        document.querySelector(".load").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

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