<script lang="ts">
import { defineComponent } from "vue";
import AppMenuTrigger from "@/components/header/AppMenuTrigger.vue";
import AppMenu from "@/components/AppMenu.vue";

export default defineComponent({
    //コンポーネント名
    name: "AppHeader",
    components: {
    //メニューボタン・メニューコンポーネントを追加
    AppMenuTrigger,
    AppMenu
  }
})
</script>

<!-- ヘッダーコンポーネント -->
<template>
    <header class="AppHeader">
        <nav class="AppHeader__nav" aria-label="グローバルメニュー">
            <AppMenuTrigger />

            <div class="AppHeader__list" role="list">
                <!-- TOP画面へのリンク先と画面の表示内容 -->
                <div class="AppHeader__home" role="listitem">
                    <router-link to="/" class="AppHeader__homeLink">
                        <span class="AppHeader__homeLogo">  
                            <img src="@/assets/images/logo-vue.svg" alt="ロゴ:Vue.js" />
                        </span>

                        <span class="AppHeader__homeText">
                            <span class="AppHeader__homeTextMain">
                                <span>現場で使える</span>
                                <span>Vue.js 3.X</span>
                            </span>
                            <span class="AppHeader__homeTextSub">実践ガイド</span>
                        </span>

                        <span class="_VisuallyHidden">ホーム</span>                      
                    </router-link>
                </div>

                <!-- ProductNote画面のリンク先と表示内容 -->
                <div class="AppHeader__note" role="listitem">
                    <router-link to="/production-note" class="AppHeader__noteLink">
                        <em class="AppHeader__noteText">Production note</em>
                    </router-link>
                </div>

                <!-- メニュー機能 -->
                <div>
                    <AppMenu />
                </div>
            </div>

            <div class="AppHeader__bg">
                <svg class="AppHeader__bgImage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 50">
                    <path
                        class="AppHeader__bgMorph"
                        style="transform:rotate(180deg) scaleX(1.2);transform-origin:41% 40%;"
                        d="M 19.499615,1.5030295 C 15.341558,11.017856 5.4243459,
                        31.217087 1.2037966,39.132841 10.361482,39.005187 29.91693,
                        39.467197 38.833611,39.035804 34.978274,30.942616 24.624859,
                        11.418574 20.165144,1.5845618 18.73688,1.6665173 20.913606,
                        1.4728946 19.499615,1.5030295 Z"
                    />
                </svg>
            </div>

        </nav>
    </header>
</template>

<style lang="scss" scoped>
    //スクロール位置に関係なく重なり順1で画面の上側に固定
    .AppHeader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        background-color: rgba(#fff, 0.9);
    }

    //余白をウィンドウサイズの幅で調整
    .AppHeader__nav {
        padding: 0 160px 0 38px;

        //1024pxより幅が縮小されたとき
        @include lg(max){
            padding: 0 140px;
        }

        //768pxより幅が縮小されたとき
        @include md(max){
            padding: 0 83px 0 24px;
        }
    }

    //フレックスレイアウトとして垂直方向に中央に配置
    .AppHeader__list{
        height: 80px;
        display: flex;
        align-items: center;

        //768pxより幅が縮小されたとき
        @include md(max){
            height: 70px;
        }
    }

    //子要素にあるリンク先にフォーカスがあたった場合、focus-baseを適用する
    .AppHeader__home {
        > a {
            &:focus {
                @include focus-base;
            }
        }
    }

    //フレックスレイアウトとして垂直方向に中央に配置
    .AppHeader__homeLink{
        display: flex;
        align-items: center;
        text-decoration: none;//下線を削除
    }


    .AppHeader__homeLogo{
        width: 58px;
        //要素をフレックスボックスの中で縮小しないようにする。
        flex-shrink: 0;
        @include md(max) {
            width: 46px;
        }
    }

    .AppHeader__homeText {
        font-size: em(18, 16);
        color: $COLOR_BASE;
        //1024pxより幅が縮小されたとき
        @include lg(max) {
            font-size: em(16, 16);
        }
        //768pxより幅が縮小されたとき
        @include md(max) {
            margin-left: em(6, 14);
            font-size: em(14, 16);
        }

        //幅によってブロック要素を変更する
        > span {
          display: inline-block;
          @include lg(max) {
            display: block;
          }
        }
    }

    //ブレイクポイントによってテキストのスタイルを変更する
    .AppHeader__homeTextMain {
        margin-right: 20px;
        font-family: $FONT_EN;
        font-size: em(24, 18);
        color: $COLOR_MAIN;
        //1024px以下
        @include lg(max) {
          margin-right: 0;
          font-size: em(20, 16);
        }

        //768px以下
        @include md(max) {
          font-size: 1em;
        }
    
        > span {
          @include md(max) {
            display: block;
          }
        }
    }

    ////768px以下になった場合、visually-hiddenのスタイルを適用
    .AppHeader__homeTextSub {
      @include md(max) {
        @include visually-hidden;
      }
    }

    //左マージンを開け、左寄せ。要素は縮小しない
    //子要素のアンカーに対してはfocus-baseのスタイルを適用する
    .AppHeader__note {
      margin-left: auto;
      padding-left: 32px;
      flex-shrink: 0;
      @include md(max) {
        padding-left: 0;
      }

      > a {
        &:focus {
          @include focus-base;
        }
      }
    }

    .AppHeader__noteLink {
      //ブロック要素・相対位置を設定して下線を削除する
      position: relative;
      display: block;
      text-decoration: none;
    
      //選択した要素の最初の子要素として擬似要素を生成
      &::before {
        //コンテンツを空にする
        content: "";

        //AppHeader__noteLink要素を基準とした位置
        position: absolute;

        //要素の位置を指定
        top: 50%;
        left: -22px;
        //縦方向の中央に配置
        transform: translateY(-50%);
        width: 35px;
        height: 34px;
        //背景画像を設定し、繰り返し表示をさせず100%とする
        background-image: url($PATH+"icon-note.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        //1078pxのとき
        @include lg(max) {
          //位置、幅、高さを変更
          left: -20px;
          width: 32px;
          height: 30px;
        }
        //768pxのとき
        @include md(max) {
          //要素をブロック要素にして位置指定、要素の変形を解除、
          position: static;
          display: block;
          transform: none;
        }
      }
    }

    .AppHeader__noteText {
      padding: 0 20px;
      display: block;
      font-style: normal;
      font-family: $FONT_EN;
      font-size: em(20, 16);
      line-height: 1.5;
      color: #fff;
      background-color: $COLOR_MAIN;
      border-radius: 15px;
      @include lg(max) {
        padding: 0 14px;
        font-size: em(18, 16);
      }
      //786px以下で非表示
      @include md(max) {
        @include visually-hidden;
      }
    }

    //オーバーレイの設定
    .AppHeader__content {
      &::before {
        //空のコンテンツ
        content: "";
        //固定して配置
        position: fixed;
        //要素を画面全体に広げる
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        //他の要素より手前に表示
        z-index: 1;
        //白色の半透明な背景色
        background-color: rgba(#fff, 0.8);
        //マウスイベントを受け取らない
        pointer-events: none;
        //透明
        opacity: 0;
      }

      //要素にこのクラスが追加されると透明度を1にする
      .AppHeader.-open & {
        &::before {
          opacity: 1;
        }
      }
    }

    //トグルスイッチなどの操作に応じて位置や見た目が変化する効果
    .AppHeader__bg {
      position: fixed;
      top: -4px;
      right: 13px;
      z-index: -1;
      width: 125px;
      height: 109px;
      pointer-events: none;

      //トラジション時間を0.4s
      transition-duration: 0.4s;
      //トラジションの対象プロパティtransform
      transition-property: transform;

      @include md(max) {
        right: -12px;
        width: 96px;
        height: 83px;
      }

      //-openクラスが付与されたとき
      .AppHeader.-open & {
        top: vw(283, $XL);
        left: vw(930, $XL);
        z-index: 1;
        width: vw(125, $XL);
        height: vw(109, $XL);
        transform: scale(19.5) rotate(-135deg);
        // transform-origin: center;
        right: auto;

        @include md(max) {
          top: vw(153, $XS);
          transform: scale(10) rotate(-143deg);
          left: vw(180, $XS);
          width: vw(125, $XS);
          height: vw(109, $XS);
        }
      }
    }

    .AppHeader__bgImage {
      width: 100%;
      height: 100%;
      display: block;
      fill: $COLOR_MAIN;
    }
</style>