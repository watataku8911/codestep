## ページネーションのデザインを変更したいとき

デフォルトで設定したページネーションは青色です。それを今回は CSS で変更してみたいと思います。
以下のセレクタを弄るとデザインを変更できます。

```
.swiper-pagination-bullet {
  background-color: #111;
  height: 6px;
  width: 6px;
  margin: 0 16px !important;
}
```
