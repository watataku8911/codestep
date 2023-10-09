## visibility プロパティ

要素の可視・不可視を切り替えられるプロパティ

- **visible（default）** : 要素が可視状態になります。
- hidden : 要素が不可視状態になりますが、**display: none;と異なり要素の領域は確保されたまま**になります。
- collapse : hidden 同様要素が不可視になります。一部の条件下では display: none;同様要素の領域が失われます。

ただ要素を見えなくするだけなら透明度を操作する`opacity`プロパティがあります。しかしそれよりも`visibility`が優れている点は、**不可視になる（値が hidden や collapase になる）と同時にアクセシビリティツリーからしっかり削除され、スクリーンリーダに読み上げられずタブフォーカスも当たらなくなる**というところです。`display: none;`との違いは「表示領域が残るかどうか」以外違いはありません。

[https://www.mitsue.co.jp/knowledge/blog/frontend/201912/14_0000.html](https://www.mitsue.co.jp/knowledge/blog/frontend/201912/14_0000.html)
