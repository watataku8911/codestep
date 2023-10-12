// ハンバーガーメニュー
const humberger = document.querySelector(".humberger");
const navigation = document.querySelector(".navigation");

const humbergerFunction = (domElemnt) => {
  domElemnt.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navigation.classList.toggle("open");
  });
};
humbergerFunction(humberger);
humbergerFunction(navigation);

// スムーススクロール
const smoothScroll = () => {
  const scrollElement = document.querySelectorAll("a[href^='#']");

  for (let i = 0; i < scrollElement.length; i++) {
    scrollElement[i].addEventListener("click", (e) => {
      e.preventDefault();

      const href = scrollElement[i].getAttribute("href");
      const target = document.getElementById(href.replace("#", ""));

      const rect = target.getBoundingClientRect().top;
      const offset = window.scrollY;
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
const slide = document.querySelectorAll(".slide");
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
intersection(slide);

const contact = document.querySelector(".contact");
const gallery = document.querySelector(".gallery");
const access = document.querySelector(".access");
window.onscroll = () => {
  scrollPosition = window.scrollY; // 現在のスクロール量の取得
  const scrollTop = scrollPosition || document.documentElement.scrollTop;

  // fvの画像の拡大
  const fvScroll = (scroll) => {
    const fvImages = document.querySelectorAll(".fv img");
    fvImages.forEach((fvImage) => {
      if (window.innerWidth > 900) {
        fvImage.style.width = 100 / 3 + scroll / 10 + "%";
      } else {
        fvImage.style.width = 100 - scroll / 10 + "%";
      }
    });
  };

  //ロゴ、ハンバーガーメニューの表示
  const display = (scroll, humbergerMemu) => {
    const logo = document.querySelector(".logo");
    if (scroll > 520) {
      humbergerMemu.classList.add("display");
      logo.classList.add("display");
    } else {
      humbergerMemu.classList.remove("display");
      logo.classList.remove("display");
    }
  };

  // サイドボタンの表示
  const displaySideBtn = (galleryPosition, accessPosition) => {
    const sideBtn = document.querySelector(".side-btn");
    if (window.innerWidth > 900) {
      if (scrollPosition > galleryPosition) {
        if (scrollPosition < accessPosition) {
          sideBtn.style.transform = "rotate(-90deg) translateY(0)";
        } else {
          sideBtn.style.transform = "rotate(-90deg) translateY(60px)";
        }
      } else {
        sideBtn.style.transform = "rotate(-90deg) translateY(60px)";
      }
    }
  };

  // bgの表示
  const displayBg = (accessPosition, contactPosition) => {
    const bg = document.querySelector(".bg");
    if (scrollPosition > accessPosition) {
      if (scrollPosition < contactPosition) {
        bg.classList.add("display");
      } else {
        bg.classList.remove("display");
      }
    } else {
      bg.classList.remove("display");
    }
  };

  const galleryPosition =
    gallery.getBoundingClientRect().top + scrollTop - window.innerHeight;
  const accessPosition =
    access.getBoundingClientRect().top + scrollTop - window.innerHeight;
  const contactPosition =
    contact.getBoundingClientRect().top + scrollTop - window.innerHeight + 600;

  displayBg(accessPosition, contactPosition);
  displaySideBtn(galleryPosition, accessPosition);
  fvScroll(scrollPosition);
  display(scrollPosition, humberger);
};
