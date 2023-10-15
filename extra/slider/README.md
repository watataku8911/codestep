## スライダーの矢印やページネーションを外に出す方法

HTML の構造を変更する必要がある

```
<div class="wrapper">
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="画像パス" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="画像パス" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="画像パス" alt="" />
      </div>
    </div>
  </div>
  <!-- ページネーション -->
  <div class="swiper-pagination"></div>
  <!-- 前後の矢印 -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
```

`.wrapper`というクラス名は任意ですが、元々の`.swiper`を div で囲ってあげる。
外に出したいもの(今回は全て)を`.swiper`と同じ階層にする。

CSS

```
.wrapper {
  margin:0 auto;
  max-width: 640px;
  position:reratove;
}

.swiper {
  width: 100%;
}

.swiper-slide img {
  height: auto;
  width: 100%;
}
```

`.wrapper` に `position: relative;` を設定しています（これがないと矢印が画面の両端に行ってしまう為）

ここまでできれば任意の CSS で外に出してやってください。参考までに

```
/* 前への矢印 */
.swiper-button-prev {
  left: -30px;
}

/* 次への矢印 */
.swiper-button-next {
  right: -30px;
}

/* ページネーション */
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: -30px;
}
```

## 矢印のデザインを変更する

デフォルトで設定した「前へ、次へ」の矢印は青色の矢印です。それを今回は CSS で変更してみたいと思います。

```
.swiper-button-prev::after,
.swiper-button-next::after {
  content: "";
}
```

上記のセレクタを弄るのですが、デフォルトでは`.swiper-button-prev::after`に`content: "prev";` 、`.swiper-button-next::after`に`content: "next";` が設定されていて、各青い矢印が表示されています。これを content: ""; で打ち消してやります。

打ち消した後に、各セレクタに矢印とかを CSS で記述していきます。

```
.swiper-button-prev {
  transform: translateY(168%);
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: black;
  opacity: 0.7;
}

.swiper-button-prev::after {
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  line-height: 1;
  width: 14px;
  height: 14px;
  border: 4px solid currentColor;
  border-left: 0;
  border-bottom: 0;
  box-sizing: border-box;
  transform: translateX(23%) rotate(-135deg);
}

.swiper-button-next {
  transform: translateY(168%);
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: black;
  opacity: 0.7;
}

.swiper-button-next::after {
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  line-height: 1;
  width: 14px;
  height: 14px;
  border: 4px solid currentColor;
  border-left: 0;
  border-bottom: 0;
  box-sizing: border-box;
  transform: translateX(-20%) rotate(-315deg);
}
```
