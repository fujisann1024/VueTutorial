import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TopView from "../views/TopView.vue";

const routes: Array<RouteRecordRaw> = [
  //Topページ
  {
    //現在のルートのパスに等しい文字列で、常に絶対パスとして解釈
    path: "/",

    //名前がある場所の現在のルートの名前
    name: "Top",

    //componentオプション内で対応する名前のコンポーネントを表示
    component: TopView,

    //メタ情報
    meta: {
      //タイトル
      title: "Topページ",
      //説明
      description: "Topページの説明"
    }
  },
  //Aboutページ
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/AboutView.vue"),
    meta: {
      title: "Aboutページ",
      description: "Aboutページの説明"
    }
  },
  //Authorページ
  {
    path: "/author",
    name: "Author",
    component: () =>
      import( "../views/AuthorView.vue"),
    meta: {
      title: "Authorページ",
      description: "Authorページの説明"
    }
  },
  //ProductionNoteページ
  {
    path: "/production-note",
    name: "ProductionNote",
    component: () =>
      import( "../views/ProductionNoteView.vue"),
    meta: {
      title: "ProductionNoteページ",
      description: "ProductionNoteページの説明"
    }
  },
  //QAページ
  {
    path: "/faq",
    name: "Faq",
    component: () =>
      import( "../views/FaqView.vue"),
    meta: {
      title: "Faqページ",
      description: "Faqページの説明"
    }
  },
   

];

//routerオブジェクトの作成
const router = createRouter({
  //Web履歴を作成
  history: createWebHistory(process.env.BASE_URL), //環境変数から取得されるアプリケーションのベースURL
  routes,
  //画面遷移時にスクロール位置をトップに戻すようにする
  scrollBehavior(){
    return {left:0, top:0};
  }
});

//他ファイルにもrouterを使えるようにする
export default router;
