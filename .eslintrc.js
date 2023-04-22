//ESLintの設定
//https://eslint.org/docs/latest/rules/
module.exports = {
  //プロジェクトのルートにある.eslintrc.jsファイルを読み込んで設定をマージする
  root: true,

  //プロジェクトで利用可能な環境を指定
  env: {
    node: true,
  },

  //プロジェクトで利用可能な環境を指定
  extends: [
    "plugin:vue/vue3-essential",  //Vue.js 3 に必要な設定を含む
    "eslint:recommended",         //ESLint の推奨設定
    "@vue/typescript/recommended",//TypeScript に必要な設定を含む 
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "plugin:prettier/recommended",// Prettier による自動フォーマットを含む 
  ],
  //プロジェクトで使用する ECMAScript のバージョンを指定
  parserOptions: {
    ecmaVersion: 2020,
  },
  //プロジェクトに適用するルールを指定
  rules: {
    //本番環境でコンソール出力やデバッガーの利用を制限
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    
    //複数のルート要素がある場合でも警告を出さない
    "vue/no-multiple-template-root" : 0,

    //HTMLの閉じ括弧の前に改行を挿入する必要がある場合でも警告を出さない
    "vue/html-closing-bracket-newline" : "off",

    //HTMLのインデントに関する警告を出さない
    "vue/html-indent" : "off",

    //自己閉じタグの使用に関する警告を出さない
    "vue/html-self-closing" : "off",

    //HTMLタグの属性を複数行に跨ることがある場合でも警告を出さない
    "vue/max-attributes-per-line" : "off",

     //コンポーネント名のケースに関する警告を出さない
    "vue/name-property-casing" : "off",

    //デフォルトのpropの定義に関する警告を出さない
    "vue/require-default-prop" : "off",

    //インラインのHTML要素の改行をに関する警告を出さない
    "vue/singleline-html-element-content-newline" : "off",

    //複数行の改行に関する警告を出さない
    "vue/multiline-html-element-content-newline" : "off",

    //演算子の改行に関する警告を出さない
    "operator-linebreak" : "off",
    
    "prettier/prettier" : [
      'warn',
      {
        printWidth: 360,
        htmlWhitespaceSensitivity: "ignore"
      },
    ]
  },
};
