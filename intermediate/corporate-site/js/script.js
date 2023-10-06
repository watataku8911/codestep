const toTop = document.querySelector(".to-top");
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  const currentY = window.pageYOffset;
  if (currentY > 700) {
    setTimeout(function () {
      toTop.style.opacity = 1;
    }, 1);
  } else {
    setTimeout(function () {
      toTop.style.opacity = 0;
    }, 1);
  }
});

const humberger = document.querySelector(".humberger");
const navigation = document.querySelector(".navigation");
const navigationLink = document.querySelector(".navigation a");
const mask = document.querySelector(".mask");

const humbergerFunction = (domElemnt) => {
  domElemnt.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navigation.classList.toggle("open");
    mask.classList.toggle("open");
  });
};
humbergerFunction(humberger);
humbergerFunction(navigation);
humbergerFunction(mask);

navigationLink.addEventListener("click", () => {
  humberger.classList.toggle("active");
  navigation.classList.toggle("open");
  mask.classList.toggle("open");
});
