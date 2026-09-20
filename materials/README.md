# 教材データの保存場所

このフォルダは、先生のライフデザインLaboで公開する教材の実ファイル（Word、PDF、PowerPointなど）を保存する場所です。

## 教材を追加する手順

1. 完成した教材ファイル（例: `asa-no-kai-worksheet.docx`）をこの `materials/` フォルダに追加します。
   カテゴリーごとにサブフォルダを作っても構いません（例: `materials/worksheet/`）。
2. `materials.html` の `.material-grid` 内に、教材カードを1つ追加します。
   既存の `<article class="material-card is-placeholder" ...>` をコピーして、
   - `is-placeholder` クラスを削除
   - `data-category` を `worksheet` / `slide` / `other` から選択
   - タイトル・説明文・ファイル形式（Word/PDF/PowerPointなど）を編集
   - `<span class="download-link" aria-disabled="true">近日公開予定</span>` を
     `<a class="download-link" href="materials/ファイル名.docx" download>ダウンロード（Word）</a>`
     のように、実際のファイルへのリンクに置き換えます。
3. 変更をコミットして公開します。

## ファイル形式について

Word（.docx）、PDF（.pdf）、PowerPoint（.pptx）など、先生が扱いやすい形式であれば
どの形式でも問題ありません。ファイルサイズが大きい場合は、圧縮するか、
外部ストレージ（Googleドライブなど）へのリンクに切り替えることも検討してください。
