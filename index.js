const track = document.getElementById("image-track");
let nextPercentage = 0;
let maxScroll = -300;

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = () => {
    if (track.dataset.mouseDownAt === "0") return;

    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = nextPercentage;

    nextPercentage = Math.min(Math.max(nextPercentage, -100), 0);
    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    requestAnimationFrame(() => {
        for (const image of track.getElementsByTagName("img")) {
            const objectPosition = Math.min(Math.max(nextPercentage + 100, 0), 100);
            image.style.objectPosition = `${objectPosition}% 50%`;
        }
    });
};

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    requestAnimationFrame(() => {
        for (const image of track.getElementsByTagName("img")) {
            const objectPosition = Math.min(Math.max(nextPercentage + 100, 0), 100);
            image.style.objectPosition = `${objectPosition}% 50%`;
        }
    });
};

document.getElementById("large").onclick = function() {
    location.href = "SoalWaktu.html";
};

document.getElementById("large2").onclick = function() {
    location.href = "SoalWarna.html";
};

document.getElementById("large3").onclick = function() {
    location.href = "SoalListrik.html";
};

document.getElementById("large4").onclick = function() {
    location.href = "SoalKamera.html";
};

document.getElementById("large5").onclick = function() {
    location.href = "SoalCahaya.html";
};

document.getElementById("large6").onclick = function() {
    location.href = "SoalAngkasa.html";
};

document.getElementById("large7").onclick = function() {
    location.href = "SoalGitar.html";
};

document.getElementById("large8").onclick = function() {
    location.href = "SoalSerigala.html";
};

document.getElementById("large9").onclick = function() {
    location.href = "SoalKupu.html";
};
document.getElementById("large10").onclick = function() {
    location.href = "SoalBurungHantu.html";
};