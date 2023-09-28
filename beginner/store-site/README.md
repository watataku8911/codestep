## 文字を縦書きにする

`writing-mode: vertical-rl;` を記述する。

これらも忘れず

```
-webkit-writing-mode: vertical-rl; /_ Chrome、Safari 用 _/
-moz-writing-mode: vertical-rl; /_ Firefox 用 _/
-ms-writing-mode: tb-rl; /_ IE 用 _/
```

## 文字の表示方向

縦書きできれば OK というものでもなく、あれこれ微調整が必要になるのが縦書きの難点。
まずは文字の表示方向。これは`text-orientation`というプロパティを使います。デフォルトでは`mixed`で、**和文は縦**、**英語は横**に表示される。
英数字も縦に表示するなら`upright`、和文も横に表示するなら`sideways` を指定しましょう。

## m 番目以降の指定

例）4 番目以降の指定

```
:nth-child(n + 4)
:nth-of-type(n + 4)
```

### nth-child と nth-of-type の違い

- nth-child は、全てのセレクタを数えます
  p を指定しても、h1 や h3 なども数えられます。

- nth-of-type は、指定したセレクタのみを数えます
  ｐを指定すれば、ｈ 1 や h3 は数えられません。

[https://www.itti.jp/web-design/css-nth-child/](https://www.itti.jp/web-design/css-nth-child/)
