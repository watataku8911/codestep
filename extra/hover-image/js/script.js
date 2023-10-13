const fvImage = document.querySelector(".fv img");
const listImages = document.querySelectorAll(".list img");

// フェードアウトの実装
const fadeOut = (element, duration, callback) => {
  let opacity = 1;
  const interval = 50;
  const delta = interval / duration;

  const decrease = () => {
    opacity -= delta;
    element.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fadeInterval);
      if (callback) callback();
    }
  };

  const fadeInterval = setInterval(decrease, interval);
};

// フェードインの実装
const fadeIn = (element, duration, callback) => {
  let opacity = 0;
  const interval = 50;
  const delta = interval / duration;

  const increase = () => {
    opacity += delta;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInterval);
      if (callback) callback();
    }
  };

  const fadeInterval = setInterval(increase, interval);
};

listImages.forEach((listImage) => {
  listImage.addEventListener("mouseover", () => {
    if (fvImage.getAttribute("src") !== listImage.getAttribute("src")) {
      fadeOut(fvImage, 500, function () {
        // メイン画像のsrcをホバーされたサムネイルのsrcに変更して
        fvImage.setAttribute("src", listImage.getAttribute("src"));
        // メイン画像を0.5秒かけてフェードイン
        fadeIn(fvImage, 500);
      });
    }
  });
});
