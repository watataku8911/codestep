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
