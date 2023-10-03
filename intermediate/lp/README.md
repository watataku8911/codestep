## 画像のフェード切り替え

```
<section class="hero">
    <ul class="fade">
        <li><img src="img/hogehoge.jpg" alt="" /></li>
        <li><img src="img/bowbow.jpg" alt="" /></li>
        <li><img src="img/fizzbuzz.jpg" alt="" /></li>
    </ul>
</section>

```

```
.hero {
    position: relative;
}

.hero .fade li {
    position: absolute;
    top: 0;
    bottom: 0;
    opacity: 0; /* これ大事 */
    animation: fade 15s infinite;　/* アニメーション実行 */
}

/*
1枚目の画像のアニメーション実行タイミングを設定
「animation-delay: 0s;」ですぐに実行
*/
.hero .fade li:nth-child(1) {
  animation-delay: 0s;
}

/*
2枚目の画像のアニメーション実行タイミングを設定
「animation-delay: 5s;」で5秒後に実行
*/
.hero .fade li:nth-child(2) {
  animation-delay: 5s;
}

/*
3枚目の画像のアニメーション実行タイミングを設定
「animation-delay: 10s;」で10秒後に実行
*/
.hero .fade li:nth-child(3) {
  animation-delay: 10s;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  45% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
```

### animation プロパティ

1. `animation-name` : アニメーションの定義名
   アニメーションの定義名は半角英数字で自由に決めることが可能。
   animation-name につけた定義名に対し、keyframes でアニメーションの開始から終了までの変化を指定。

```
animation-name: fade;

@keyframes fade {
    0% {
    /*ここに開始のCSSを記述*/
    }

    100% {
    /*ここに終了のCSSを記述*/
    }
}
```

2. `animation-fill-mode` : アニメーションの開始と終了時の状態

- **none** → 指定なし。初期値。
- forwards → 元の状態に戻らずアニメーション最後の状態を維持
- backwards → アニメーションの最初の状態に戻る
- both → backwards と forwards の両方の状態を適用

3. `animation-duration` : アニメーション 1 回分の時間

1.5 秒なら →1.5s(**初期値は 0**)

4. `animation-iteration-count` : 動きのループ

- infinite → 無限に再生を繰り返す
- 数値 → 数値で再生回数を指定する(**初期値は 1**)

5. `animation-timing-function` : アニメーションの進行具合

- **ease** → 初期値：開始時と終了時が緩やかに変化
- ease-in → 開始時は緩やかに変化、終了に近づくと早く変化
- ease-out → 開始時は早く変化し、終了時は緩やかに変化
- ease-in-out → 開始時と終了時は、かなり緩やかに変化
- linear → 開始から終了まで一定に変化
- steps(数値, start または end) → パラパラ漫画のように数値をコマ数で変化
- cubic-bezier（数値をカンマ区切りで 4 つ指定） → 変化の進行割合を 3 次ベジェ曲線で指定

6. `animation-delay` : アニメーションの開始を遅らせる

3 秒なら →3s(**初期値は 0**)

7. `animation-direction` : アニメーションの再生の向き

- **normal** → 初期値：普通方向の再生で動きを繰り返す
- reverse → 逆方向の再生で動きを繰り返す
- alternate → 奇数回では普通方向、偶数回では逆方向の再生で動きを繰り返す
- alternate-reverse → 毎回逆方向の再生、奇数回では逆方向、偶数回では普通方向

#### animation のショートハンド

animation プロパティはショートハンドで書くのが一般的。

```
animation: slideshow 1s 4s infinite;
animation: animation-name animation-duration animation-delay animation-iteration-count;
```

全ての animation プロパティをショートハンドに組み込むことは可能ですが、全部を記載することはほぼありません。特別に指定が必要でなければ省略。

**注意点としては、animation-duration と animation-delay の順番。animation-duration を先に書く、animation-delay を後に書くと覚えておきましょう。**
