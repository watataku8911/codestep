const humperger = document.querySelector(".humberger");
const navi = document.querySelector(".navi");

const menu = document.querySelectorAll(".menu li a");

humperger.addEventListener("click", () => {
  humperger.classList.toggle("is-active");
  navi.classList.toggle("open");
});

menu.forEach((docs) => {
  docs.addEventListener("click", () => {
    humperger.classList.toggle("is-active");
    navi.classList.toggle("open");
  });
});

const reasonleft = document.querySelectorAll(".reason .left");
const reasonRight = document.querySelectorAll(".reason .right");

const voice = document.querySelectorAll(".voice .item");
const intersection = (domElements) => {
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  };

  const option = {
    rootMargin: "-100px",
    threshold: [0.25, 0.5],
  };
  const observer = new IntersectionObserver(callback, option);
  domElements.forEach((domElement) => {
    observer.observe(domElement);
  });
};

intersection(reasonleft);
intersection(reasonRight);

intersection(voice);
