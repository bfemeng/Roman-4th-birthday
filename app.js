const smoke = document.getElementById("smoke");
const train = document.getElementById("train");

train.addEventListener("click", () => {
  smoke.style.display = "block";
  setTimeout(() => {
    smoke.style.display = "none";
  }, 4000);
});