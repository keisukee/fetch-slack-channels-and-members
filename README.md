# usage

ディレクトリ構成
```
.
├── README.md
├── main.js
├── node_modules
│   ├── nan
│   └── sleep
├── package.json
├── slack.rb
└── yarn.lock
```

メインは`slack.rb`だが、もともとnodeでコードを書こうとしていたため、node_modulesなどがある。無視して問題ない。

```
ruby slack.rb > data.txt
```

これで

```
SlackのチャンネルID チャンネル名 member1 member2 member3...
```
と`tsv`で吐き出される。後はスプレッドシートなりエクセルに出力してやると完成