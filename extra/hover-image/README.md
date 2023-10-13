## getAttribute()

指定した**要素の属性**を取得することができる。
例えば、画像パスを取得してみます。

```
const image = document.querySelector(".image img");
image.getAttribute("src"); // hogehoge.jpg
```

## setAttribute()

指定した要素に**属性の設定や属性値の変更**をすることができる。
先ほど取得した画像を「bowbow.jpg」に変更してみます。

```
image.setAttribute("src, bowbow.jpg");
image.getAttribute("src"); // boebow.jpg
```
