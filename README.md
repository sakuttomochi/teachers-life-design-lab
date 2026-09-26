# 先生のライフデザインLabo

仕事も家庭も趣味も諦めない。全部本気で楽しむ先生のためのライフデザイン研究所

## サイト構成

- `index.html` — トップページ
- `materials.html` — 教材ライブラリ（ワード・PDF等の教材配布ページ）
- `about.html` — Laboについて
- `css/style.css` — スタイルシート（ライト/ダークモード、文字サイズ変更に対応）
- `js/main.js` — ナビゲーション、テーマ切り替え、教材の絞り込みなどの動作
- `materials/` — 教材の実ファイルを保存するフォルダ（追加方法は `materials/README.md` を参照）
- `tools/jikanwari-tool.html` — 教科担任制 時間割ツール
- `tools/sekigae-tool.html` — 席替えツール（除外・固定ペアの指定、履歴による重複防止、シャッフル／ドキドキ発表／くじ引き。データはブラウザ内に保存）
- `assets/` — ロゴなどの画像素材

## 特徴

- 教材（ワードファイルなど）を保存・公開できる教材ライブラリページ
- 文字サイズ変更・ダークモード対応など、誰もが見やすいインクルーシブなデザイン
- note・Instagramと連携するSNSセクション（アカウントURLは各ページ内のリンクを実際のアカウントURLに差し替えてください）
- スマートフォンにも対応したレスポンシブレイアウト

## ローカルで確認する

ビルド不要の静的サイトです。リポジトリのルートで簡易サーバーを立てて確認できます。

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開いてください。

## 公開方法

GitHub Pagesなどの静的ホスティングサービスにそのままデプロイできます。

## 教材の追加方法

`materials/README.md` を参照してください。

## SNSリンクの設定

Instagram (`https://www.instagram.com/teacher.life.design/`) と
note (`https://note.com/tcer_lifedesign`) はどちらも設定済みです。
