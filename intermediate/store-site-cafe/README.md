## Google Map をグレーにする方法

下記のプロパティを使う

```
 filter: grayscale(1);
```

### filter プロパティ

ぼかしや色変化などのグラフィック効果を要素に適用します。フィルターは画像、背景、境界の描画を調整するためによく使われます。

[詳しくは](https://www.asobou.co.jp/blog/web/css-filter#filter-2)。

## 背景を固定する方法

`background-attachment: fixed;`を使用する。

### background-attachment プロパティ

- `scroll(初期値)` : 要素内をスクロールしてもテキストだけが動いて背景は固定されたまま(何もない普通のやつ)。
- `fixed` : ページをスクロールしても背景画像はスクロールされません(パララックス？)。
- `local` : コンテンツに背景画像が固定され、要素内または web ページ全体をスクロールした時に背景も一緒にスクロールします(要素と背景画像がくっついたイメージ)。

[詳しくは](https://webukatu.com/wordpress/blog/20211/)。

#### 注意

- background-attachment: fixed;と background-size: cover;を同時に使用した場合、iOS では正しく動作しない
  → 疑似要素を使い固定

1. 疑似要素に対し背景画像を挿入し「position: fixed」で固定。
2. その疑似要素を「width:100%;」「height:100vh;」で画面幅一杯に表示。
3. その疑似要素を「z-index:-1;」でコンテンツの下に表示

[詳しくは](https://jito-site.com/background-fixed-smartphone/#CSS-3)。

## 懺悔

**Read me**ボタンをカンニングしました。
