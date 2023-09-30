const humperger = document.querySelector(".humberger");
const navi = document.querySelector(".navi");
const mask = document.querySelector(".mask");
// if (!humperger) return;
humperger.addEventListener("click", () => {
  humperger.classList.toggle("is-active");
  mask.classList.toggle("open");
  navi.classList.toggle("open");
});
