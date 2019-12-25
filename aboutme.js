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
