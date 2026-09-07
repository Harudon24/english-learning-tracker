# English Learning Tracker — Little Voice

短い英語から、毎日5〜15分のリスニング・スピーキングを続ける学習アプリです。PC・スマートフォンのブラウザで使えます。

公開先（GitHub Pages有効化後）：https://harudon24.github.io/english-learning-tracker/

## できること
- Listening / Speaking / Conversation / Review の4つの練習
- 学習カレンダー、学習日数、ストリーク、累計時間
- 聞き取れた語・文、言えた表現、30秒スピーキング語数の記録
- Day 1 / 7 / 30 の同じ課題による比較、自己評価、ChatGPT評価の保存
- 読み上げ、対応ブラウザでの音声入力、JSONバックアップと復元

最初は「Day 1 の成長チェック」から始めてください。間違いの少なさより、単語や短い文をつなげて声を出し続けることを重視しています。

## 公開方法（初回のみ）
1. `Harudon24/english-learning-tracker` リポジトリの **Settings → Pages** を開きます。
2. **Build and deployment → Source** を **Deploy from a branch** にします。
3. **Branch** を **main**、フォルダーを **/(root)** にして **Save** を押します。
4. 公開処理が完了すると、上記URLで開けます。処理状況はリポジトリの **Actions** で確認できます。

設定ページ：https://github.com/Harudon24/english-learning-tracker/settings/pages
公式手順：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

以後はmainにファイルの変更を保存すると、同じURLへ反映されます。サーバー契約、Work、Node.js、npm、ビルドコマンド、APIキーは不要です。ZIPから配置する場合は、`index.html` がリポジトリ直下になるように、中身をアップロードしてください。

## ファイル構成
```
index.html                    入口・タイトル・メタ情報
.nojekyll                     Jekyllによる変換を使わずに配信
favicon.svg                   アイコン
assets/
  css/style.css               全画面のスタイルとスマホ対応
  js/app.js                   画面と練習・音声・保存・評価の処理
  js/data.js                  練習メニュー・教材・設定の定義
  js/model.js                 日付・ストリーク・語数・データ検証
  js/vendor.js                同梱UIライブラリ（通常は編集不要）
  js/rolldown-runtime.js      ライブラリ読み込み補助（編集不要）
README.md
THIRD_PARTY_NOTICES.txt
```

## 修正するとき
- 教材や例文、会話の質問、5/10/15分の設定：`assets/js/data.js`
- 見た目・色・余白・スマホ用レイアウト：`assets/css/style.css`（アプリ独自のルールは後半）
- 練習や画面の機能：`assets/js/app.js` の `App` / `Session` / `Calendar` / `Growth`
- 集計や保存データの検証：`assets/js/model.js`
- ブラウザのタブ名・説明文：`index.html`

`app.js` は読める通常のJavaScriptとして整形してあります。React等のUIライブラリは `vendor.js` に同梱し、CDNから取得しません。JSXやTypeScriptの変換作業は不要です。画面は `jsx` / `jsxs` の呼び出しで記述されています。

ファイル参照はすべて相対パスです。GitHub Pagesの `/english-learning-tracker/` の下でも、別の静的ホスティングでも動きます。外部リンクとしてChatGPTを開く機能がありますが、アプリ本体の実行にはWorkへのログインも外部APIも使いません。

変更がブラウザに残る場合は再読み込みを行ってください。確実に更新を促す場合は `index.html` のCSS・JS参照に付ける `?v=...` を更新し、JSのimport先を変更した場合はその参照のバージョンも更新してください。

## データ保存と移行
- 記録はブラウザのlocalStorage（キー：`little-voice-v1`）に保存されます。サーバーに学習記録は送りません。
- **PCとスマホの間で自動同期しません。** 別の端末やブラウザに移すときは、設定からバックアップを書き出し、移動先で読み込んでください。
- **以前のWork/Sites版とはURLが異なるため、記録は自動移行されません。** 旧アプリの設定でJSONを書き出し、GitHub Pages版の設定で読み込めば移行できます。同じ保存形式を維持しています。
- 読み込みは全件置換です。現在の記録も先に書き出しておいてください。バックアップJSONを公開リポジトリへアップロードしないでください。
- ブラウザのサイトデータ削除・プライベートモードの終了等で記録が消える場合があります。
- localStorageはオリジン単位なので、同じ `harudon24.github.io` 配下のアプリと保存領域を共有します。キー名を変えると既存の記録は見えなくなるため、変更時は移行処理も必要です。

## 音声と評価
読み上げはブラウザの英語音声、音声入力は対応ブラウザの音声認識を使用します。HTTPSのGitHub Pagesで利用してください。音声認識ではブラウザの提供元へ音声が送られることがあります。マイク未対応・許可拒否の場合は、発話後の手入力で使えます。録音ファイルは保存しません。

Conversationは定義済みの質問との会話練習です。ChatGPT評価は、依頼文をコピーしてChatGPTで評価を受け、結果を貼り付けて保存する手動方式です。リアルタイムAI会話、自動採点、公式GSE測定ではありません。

## 開発時の確認
静的ファイルを配信する任意のローカルHTTPサーバーで確認できます。これは開発時だけの選択肢で、公開サイトの利用には不要です。`file://` でHTMLを直接開く方法はJavaScript Modulesの制約により対応していません。

既存版の保存形式と機能を維持しています。GitHub Pagesと同じサブフォルダー構成で、HTML・CSS・JSの参照と画面表示を検証しています。
