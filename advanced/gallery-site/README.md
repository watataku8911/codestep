## [CSS] flex-shrink プロパティ

flex アイテムで使用できるプロパティ。
なので、基本形は以下の通りである。

```
.flexbox {
  display: flex;
}

.flex-item{
  color: #fff;
  flex-shrink: 数値;
}
```

初期値は 1 で、マイナスの値は指定できません。
flex-shrink は、主に以下のような場面で使用します。

- **flex アイテムが flex コンテナをはみ出す場合**
- **要素を縮めたくない場合**

  [https://zero-plus.io/media/css-flex-shrink-how-to-use/](https://zero-plus.io/media/css-flex-shrink-how-to-use/)

一方、今回は要素に指定した width が反映されずに縮んで表示されています。`flex-shrink: 0;`を指定しているため指定した width が反映されるようになります。

## [JavaScript] getBoundingClientRect()

指定した HTML 要素の座標とサイズを取得する。

- 基本書式

```
domElement.getBoundingClientRect().プロパティ
```

- プロパティ

1. top : domElement の上辺の座標
2. bottom : domElement の下辺の座標
3. left : domElement の左辺の座標
4. right : domElement の右辺辺の座標
5. width : domElement の width
6. height : domElement の height

[https://developer.mozilla.org/ja/docs/Web/API/Element/getBoundingClientRect](https://developer.mozilla.org/ja/docs/Web/API/Element/getBoundingClientRect)
