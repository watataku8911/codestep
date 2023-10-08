const humberger = document.querySelector(".humberger");
const navigation = document.querySelector(".navigation");
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

// Swiper
const mySwiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1.4,
  centeredSlides: true,
  breakpoints: {
    // スライドの表示枚数：600px以上の場合
    600: {
      slidesPerView: 3.8,
    },
  },
});

// スムーススクロール
const smoothScroll = () => {
  const scrollElement = document.querySelectorAll("a[href^='#']");

  for (let i = 0; i < scrollElement.length; i++) {
    scrollElement[i].addEventListener("click", (e) => {
      e.preventDefault();

      const href = scrollElement[i].getAttribute("href");
      const target = document.getElementById(href.replace("#", ""));

      const rect = target.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const position = rect + offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    });
  }
};
smoothScroll();

// スクロールアニメーション
const fade = document.querySelectorAll(".fade");
const intersection = (domElements) => {
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  };

  const option = {
    rootMargin: "-50px",
    threshold: [0.25, 0.5],
  };
  const observer = new IntersectionObserver(callback, option);
  domElements.forEach((domElement) => {
    observer.observe(domElement);
  });
};
intersection(fade);
