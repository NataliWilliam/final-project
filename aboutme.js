const click = document.querySelector(".click-on");
const zatvori = document.getElementById("zatvori");

const sekcija = document.getElementById("sekcija");

click.addEventListener("click", function(event) {
  if (click && sekcija) {
    sekcija.classList.add("active");
  }
});

zatvori.addEventListener("click", function(event) {
  if (zatvori && sekcija) {
    sekcija.classList.remove("active");
  }
});

const soundOn = document.querySelector(".sound-off");
const soundOff = document.querySelector(".sound-on");
const audio = document.createElement("audio");

//def. the sou.

audio.src = "TheDoorsTheEnd.mp3";

soundOn.addEventListener("click", e => {
  audio.play();
});

soundOff.addEventListener("click", e => {
  audio.pause();
});

//trans en-fr

let en = document.querySelector(".en");
let fr = document.querySelector(".fr");

fr.addEventListener("click", e => {
  e.preventDefault();
  Array.from(document.querySelectorAll("[data-fr]")).forEach(e => {
    e.innerText = e.dataset.fr;
  });
});
//trans en
en.addEventListener("click", e => {
  e.preventDefault();
  Array.from(document.querySelectorAll("[data-en]")).forEach(e => {
    e.innerText = e.dataset.en;
  });
});
