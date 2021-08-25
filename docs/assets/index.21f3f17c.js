import{p as e,a,r as t,o as s,c as l,b as c,w as i,d as n,F as o,e as r,f as d,g as m,h as u,v as p,u as b,T as _,i as g,j as f,k as v,l as h,t as A,m as y,n as k,q as I,s as C,x as w,y as x}from"./vendor.c52f5e63.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();const B={};e("data-v-6d33037a");const S={class:"header"},j=n("img",{class:"header__logo",src:"/assets/zenb.0c731f88.svg",alt:"logo"},null,-1);a(),B.render=function(e,a){const n=t("router-link");return s(),l("header",S,[c(n,{to:{name:"index"}},{default:i((()=>[j])),_:1})])},B.__scopeId="data-v-6d33037a";const E={setup:e=>(e,a)=>{const i=t("router-view");return s(),l(o,null,[c(B),c(i)],64)}};var L="/assets/ogp.5682831c.png";const P={};e("data-v-7eac02d2");const U={class:"footer"},N=n("img",{class:"footer__logo",src:"/assets/zenb-white.49a27669.svg",alt:"logo"},null,-1),V=r('<p class="footer__sub" data-v-7eac02d2>学生・社会人のための部活サービス</p><ul class="menu" data-v-7eac02d2><li class="menu__list" data-v-7eac02d2>利用規約</li><li class="menu__list" data-v-7eac02d2>プライバシーポリシー</li><li class="menu__list" data-v-7eac02d2><a href="https://twitter.com/ZenbClub" target="_blank" data-v-7eac02d2>Twitter</a></li></ul>',2);a(),P.render=function(e,a){const n=t("router-link");return s(),l("footer",U,[c(n,{to:{name:"index"}},{default:i((()=>[N])),_:1}),V])},P.__scopeId="data-v-7eac02d2";e("data-v-5b1e21f5");const O={class:"hero"},M=n("img",{class:"hero__logo",src:"/assets/zenb-white.49a27669.svg",alt:"logo"},null,-1),R=n("p",{class:"hero__sub"},"部活動をオンラインでかんたんに。",-1),W={class:"action"},Y=n("img",{class:"action__btn",src:"/assets/btn_enter.38170a04.png",alt:"部活に入る"},null,-1),D=["onClick"],Q=[n("div",{class:"card"},[n("img",{class:"card__image",src:"/assets/modal.ad30c41b.png",alt:"modal"}),n("p",{class:"card__text"},[f(" この先は現在、開発中です。"),n("br"),f(" 事前アンケートにお答えいただくと"),n("br"),f(" トライアル版開始時に、優先的にご招待いたします。 ")]),n("a",{class:"card__btn",href:"https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544"},"アンケートに答える")],-1)],Z=["onClick"],J=["onSubmit"],T=n("legend",{class:"form__title"},"部活動団体 登録申請書",-1),K=n("label",{class:"form__label",for:"club-name"},"1. 部の名前を決めましょう！",-1),G=n("label",{class:"form__label",for:"club-name"},"2. 活動内容を教えてください！",-1),X=n("label",{class:"form__label",for:"club-name"},"3. ヘッダー画像のURLを設定しましょう",-1),z=n("input",{class:"form__submit",type:"submit",value:"部活を作成"},null,-1),F=n("section",null,[n("div",{class:"feature"},[n("img",{class:"feature__image",src:"/assets/friend.088e9144.svg",alt:"friend"}),n("div",{class:"feature__text"},[n("h1",{class:"title"},"学生・社会人の皆さん、ようこそ！"),n("p",{class:"description"},[f(" 「Zenb」は、部活やサークルを"),n("br"),f(" Web上で気軽に立ち上げられるサービスです。"),n("br"),n("br"),f(" オフ会を開きたい！"),n("br"),f(" ゲームでフレンドを募集したい！"),n("br"),f(" クリエイターの仲間がほしい！"),n("br"),f(" などなど・・・"),n("br"),f(" ゆるっと繋がりたい方におすすめです。 ")]),n("a",{class:"c-btn",href:"https://note.com/preview/neb1a8d224cab?prev_access_key=52a687b5a4dfbaae416282ce28099910"},"使い方ガイド")])]),n("div",{class:"feature"},[n("div",{class:"feature__text"},[n("h1",{class:"title"},"スマホのホーム登録がおすすめ"),n("p",{class:"description"}," スマホで「ホーム画面に追加」をすると、Zenbをアプリとしてインストールし、部活動を管理しやすくなります。 ")])])],-1),q={class:"club"},H=n("h1",{class:"c-title"},"部活動",-1),$={class:"myclubs"},ee=["src","alt"],ae=["alt"],te={class:"myclub__title"},se=f(" すべての部活動 "),le=n("h1",{class:"c-title"},"人気のカテゴリ",-1);a();const ce={setup(e){const a=d({isOpen:!1,isFormOpen:!1,title:"",image:"",description:"",clubs:[]});m((()=>{ca.collection("clubs").get().then((e=>{e.docs.forEach((e=>{a.clubs.push({title:e.data().title,image:e.data().image,description:e.data().description,id:e.id})}))})).catch((e=>{console.log(e)}))}));const r=()=>{a.isOpen=!a.isOpen},f=()=>{a.isFormOpen=!a.isFormOpen},y=()=>{ca.collection("clubs").add({title:a.title,image:a.image,description:a.description}).then((()=>{a.isFormOpen=!1})).catch((e=>{console.log(e)}))};return(e,d)=>{const m=t("router-link");return s(),l(o,null,[n("section",O,[M,R,n("div",W,[n("img",{class:"action__btn",src:"/assets/btn_create.dd7d671e.png",alt:"部活をつくる",onClick:f}),c(m,{to:{name:"clubs"}},{default:i((()=>[Y])),_:1})])]),u(c(_,{name:"modal"},{default:i((()=>[n("div",{class:"overlay",onClick:v(r,["self"])},Q,8,D)])),_:1},512),[[p,b(a).isOpen]]),u(c(_,{name:"modal"},{default:i((()=>[n("div",{class:"overlay",onClick:v(f,["self"])},[n("form",{class:"form",onSubmit:v(y,["prevent"])},[T,K,u(n("input",{class:"form__input","onUpdate:modelValue":d[0]||(d[0]=e=>b(a).title=e),placeholder:"◯◯部 または ◯◯サークル",required:""},null,512),[[h,b(a).title]]),G,u(n("textarea",{class:"form__input","onUpdate:modelValue":d[1]||(d[1]=e=>b(a).description=e),placeholder:"・架空大学の漫画研究会です。\r\n・株式会社イグザンプルの社内サークルです。\r\n・毎週月曜日にDiscordでもくもく会をやっています。\r\nなど\r\n\r\n▼その他\r\n・部費: 500円/月\r\n・詳しくはTwitter @ZenbClub にお問い合わせください\r\nなど",required:""},null,512),[[h,b(a).description]]),X,u(n("input",{class:"form__input","onUpdate:modelValue":d[2]||(d[2]=e=>b(a).image=e),placeholder:"https://bosyu.club/assets/ogp.df83dc5a.png"},null,512),[[h,b(a).image]]),z],40,J)],8,Z)])),_:1},512),[[p,b(a).isFormOpen]]),F,n("section",q,[H,n("ul",$,[(s(!0),l(o,null,g(b(a).clubs.slice().reverse(),((e,a)=>(s(),l("li",{class:"myclub",key:`club-${a}`},[c(m,{to:{name:"club",params:{id:e.id}}},{default:i((()=>[e.image?(s(),l("img",{key:0,class:"myclub__image",src:e.image,alt:e.title},null,8,ee)):(s(),l("img",{key:1,class:"myclub__image",src:L,alt:e.title},null,8,ae)),n("p",te,A(e.title),1)])),_:2},1032,["to"])])))),128))]),c(m,{class:"club__btn",to:{name:"clubs"}},{default:i((()=>[se])),_:1})]),n("section",{class:"category"},[le,n("div",{class:"category__image",onClick:r},"カラオケ"),n("div",{class:"category__image",onClick:r},"ボードゲーム"),n("div",{class:"category__image",onClick:r},"スポーツ"),n("div",{class:"category__image",onClick:r},"英会話"),n("div",{class:"category__image",onClick:r},"食事・旅行"),n("div",{class:"category__image",onClick:r},"プログラミング")]),c(P)],64)}},__scopeId:"data-v-5b1e21f5"};e("data-v-443d2c3e");const ie={class:"club"},ne=n("h1",{class:"c-title"},"部活動一覧",-1),oe={class:"myclubs"},re=["src","alt"],de=["alt"],me={class:"myclub__title"};a();const ue={setup(e){const a=d({title:"",image:"",clubs:[]});return m((()=>{ca.collection("clubs").get().then((e=>{e.docs.forEach((e=>{a.clubs.push({title:e.data().title,image:e.data().image,id:e.id})}))})).catch((e=>{console.log(e)}))})),(e,r)=>{const d=t("router-link");return s(),l(o,null,[n("section",ie,[ne,n("ul",oe,[(s(!0),l(o,null,g(b(a).clubs.slice().reverse(),((e,a)=>(s(),l("li",{class:"myclub",key:`club-${a}`},[c(d,{to:{name:"club",params:{id:e.id}}},{default:i((()=>[e.image?(s(),l("img",{key:0,class:"myclub__image",src:e.image,alt:e.title},null,8,re)):(s(),l("img",{key:1,class:"myclub__image",src:L,alt:e.title},null,8,de)),n("p",me,A(e.title),1)])),_:2},1032,["to"])])))),128))])]),c(P)],64)}},__scopeId:"data-v-443d2c3e"};e("data-v-16ee5b8d");const pe={class:"nav"},be={class:"menu"},_e={class:"menu__tab"},ge=n("img",{class:"tab__icon",src:"/assets/top.cf443ce9.svg",alt:""},null,-1),fe=n("p",{class:"tab__label"},"トップ",-1),ve={class:"menu__tab"},he=n("img",{class:"tab__icon",src:"/assets/member.1b88d503.svg",alt:""},null,-1),Ae=n("p",{class:"tab__label"},"メンバー",-1),ye={class:"menu__tab"},ke=n("img",{class:"tab__icon",src:"/assets/event.8174186d.svg",alt:""},null,-1),Ie=n("p",{class:"tab__label"},"イベント",-1),Ce={class:"menu__tab"},we=n("img",{class:"tab__icon",src:"/assets/chat.38dbb18c.svg",alt:""},null,-1),xe=n("p",{class:"tab__label"},"チャット",-1);a();const Be={setup(e){const a=y();return(e,o)=>{const r=t("router-link");return s(),l("div",pe,[n("ul",be,[n("li",_e,[c(r,{class:"tab",to:{name:"club",params:{id:b(a).params.id}}},{default:i((()=>[ge,fe])),_:1},8,["to"])]),n("li",ve,[c(r,{to:{name:"member",params:{id:b(a).params.id}}},{default:i((()=>[he,Ae])),_:1},8,["to"])]),n("li",ye,[c(r,{to:{name:"event",params:{id:b(a).params.id}}},{default:i((()=>[ke,Ie])),_:1},8,["to"])]),n("li",Ce,[c(r,{to:{name:"chat",params:{id:b(a).params.id}}},{default:i((()=>[we,xe])),_:1},8,["to"])])])])}},__scopeId:"data-v-16ee5b8d"};e("data-v-8fbf8de8");const Se={class:"club"},je=["src","alt"],Ee=["alt"],Le={class:"info"},Pe={class:"info__title"},Ue=n("p",{class:"info__member"},"代表: ゲスト",-1),Ne=n("a",{class:"btn btn--enter",href:"https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544"},"入部する",-1),Ve={class:"desc"},Oe={key:0,class:"desc__text"},Me={key:1,class:"desc__nothing"},Re=[n("img",{src:"/assets/404cat.89aaea79.svg",alt:"no data"},null,-1),n("p",null,"まだ活動内容がありません",-1)],We={class:"links"},Ye=n("a",{class:"links__btn",href:"http://twitter.com/share?url=https://bosyu.club/&text=Zenb"},"ツイートする",-1),De=["href"];a();const Qe={setup(e){const a=d({title:"",image:"",description:"",id:""}),t=y();return a.id=t.params.id,m((()=>{ca.collection("clubs").doc(a.id).get().then((e=>{a.title=e.data().title,a.image=e.data().image,a.description=e.data().description})).catch((e=>{console.log(e)}))})),(e,t)=>(s(),l(o,null,[c(Be),n("div",Se,[b(a).image?(s(),l("img",{key:0,class:"image",src:b(a).image,alt:b(a).title},null,8,je)):(s(),l("img",{key:1,class:"image",src:L,alt:b(a).title},null,8,Ee)),n("div",Le,[n("h1",Pe,A(b(a).title),1),Ue,Ne])]),n("div",Ve,[b(a).description?(s(),l("p",Oe,A(b(a).description),1)):(s(),l("div",Me,Re)),n("div",We,[Ye,n("a",{class:"links__btn",href:"https://social-plugins.line.me/lineit/share?url=https://bosyu.club"+e.$route.path},"LINEでシェア",8,De)])])],64))},__scopeId:"data-v-8fbf8de8"};e("data-v-2712ee85");const Ze={class:"space"};a();const Je={setup(e){const a=d({members:["データが","ありません"]});return(e,t)=>(s(),l(o,null,[c(Be),n("div",Ze,[(s(!0),l(o,null,g(b(a).members,((e,a)=>(s(),l("div",{class:"",key:`member-${a}`},A(e),1)))),128))])],64))},__scopeId:"data-v-2712ee85"};e("data-v-25aa39c6");const Te={class:"space"},Ke=["src","alt"],Ge={class:"event__info"},Xe={class:"date"},ze={class:"title"};a();const Fe={setup(e){const a=d({events:[{date:"2021/09/29(金)",title:"東京ボードゲーム会 @八王子",image:"https://cdn.pixabay.com/photo/2015/05/23/08/02/playing-cards-780325_1280.jpg"},{date:"2021/09/22(金)",title:"第12回 Zoom人狼",image:"https://cdn.pixabay.com/photo/2015/05/23/08/02/playing-cards-780325_1280.jpg"},{date:"2021/09/15(金)",title:"【ボカロ限定】カラオケオフ会 in 秋葉原",image:"https://cdn.pixabay.com/photo/2015/05/23/08/02/playing-cards-780325_1280.jpg"}]});return(e,t)=>(s(),l(o,null,[c(Be),n("div",Te,[(s(!0),l(o,null,g(b(a).events,((e,a)=>(s(),l("div",{class:"event",key:`event-${a}`},[n("img",{class:"event__image",src:e.image,alt:e.title},null,8,Ke),n("div",Ge,[n("p",Xe,A(e.date),1),n("p",ze,A(e.title),1)])])))),128))])],64))},__scopeId:"data-v-25aa39c6"};e("data-v-388ca438");const qe={class:"space"},He=["onSubmit"],$e=n("input",{class:"form__submit",type:"submit",value:"送信"},null,-1),ea=n("img",{class:"chat__icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQZSURBVHgB7ZxhTxpBEIZHyp1SKAi1RUNNmvj//0i/t1+amraK1UoVKYiA2u57sI0hNRFv794B5kkuaRqzS/a53b2dnd2NDx8//RGDRkEMKiaAjAkgYwLImAAyJoCMCSBjAsiYADImgIwJIGMCyJgAMiaAjAkgU5QloVAoSK1SlkqpJKXNTYmiSF4Upu/P3f29TCYTGY5G0h8O5ao/kHv3f8vAhvYNmSgqym6jIdVK5V+DP4XLXk9Of13I5PZWNKO2B+CN333dkJ3tbXkO9Wo1eTrdrpw5EXdKe4RKAXjrD1otid0wkxYIrJbL8uW4rbI3qJuEt9z4HqrxPSjr4F0rKVsbqgTgzX+/txu08T0oE2VHRV2dXo0AjPmh3/x5fE9YZDLPGjW/BBNulo3vQR1NV5cWVAjA0PPcr53ngLq0DEUqBOA7P/c6lfQCugCMx/hez5tFF3ZZQf8FVRdeYIDGx/qADV0AYju0ul/y6vbQBWzFvMWRhoUZXUAcZ//p+WjdEa9uj4pJeB3r9tiGDBm6AGaYWEOImi5gPJ4Ii/GEV7eHLuBmPBIWNyNe3R66AOzhrmPdHrqAnttAZ43FqJuNikm41+9L3mDT3ibhGWcXF5I32KjXgAoB48mtdC67kheoa6xkg17NQgy9II/PQtTB6HGPoUYAxuPDdjtTCSj78LitKkdIVSgCQ9HXH6eZSECZ31C2stwgdbEgLI5C9wT/5g8VLLzmURmMQ0/4/P0oyMSMMlCWtjffozY3FOP0SacjnauuNN2m/SL7xn5tgU9NrQ3vUZ8d7Un2cGfp6dhFw0bOw/R0BPWGLq50PUtP15qMO8/SnA9Ag172fifPKmEbMmRMABkTQMYEkDEBZEwAGRNARvU6AKmDpc1Y4mIkcVRMMtniWV5/NJfVhnPCWCskizL3b4QzEPvBSljD5vtjqBHgD2KX3CoXSbMPD2I/Bfy9V1L+T8LvwK2QhzfTg9wQo+XEJFUAGqpWLicNH2Wcp4m68OzUpydx0Cv61y5sMRgkcljkLsA3er1WpeZmYnjDAyEYsiDhvHuV+3CVm4B69ZU0XESzXOLn5M+TzC3uQcQVAs673dxiTplHQ9HwCCdrSAVfBL93nLWIzHoA3vT95tula3gPfvd+s5m8PEdnPzObJ4ILSHvJhjb84W5c+nFy3pHQBBUwvWpgL7nPZ9XI6tKPYJ8h/oaTVWx8j+8NIQ95BxGQxz0PWgh930SQUlpvdtai8T0h75tILQBDD+OkOxvMCSHWNKkFMO550EItwEn71AKYB63Z4L6JtKQWUNpaXwEIkafFNmTImAAyJoCMCSBjAsiYADImgIwJIGMCyJgAMiaAjAkgYwLImAAyJoCMCSBjAsiYADImgIwJIGMCyJgAMiaAjAkg8xdic2PT8sRsUAAAAABJRU5ErkJggg==",alt:"chat icon"},null,-1),aa={class:"chat__text"};a();const ta={setup(e){const a=d({text:"",chats:["部員の皆様","参加いただき、ありがとうございます。この先は現在、開発中です。下記アンケートにお答えいただくと、トライアル版開始時に優先的にご招待いたします。","https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544"]}),t=()=>{a.chats.push(a.text),a.text=""};return(e,i)=>(s(),l(o,null,[c(Be),n("div",qe,[n("form",{class:"form",onSubmit:v(t,["prevent"])},[u(n("textarea",{class:"form__input","onUpdate:modelValue":i[0]||(i[0]=e=>b(a).text=e),placeholder:"チャットを入力",required:""},null,512),[[h,b(a).text]]),$e],40,He),(s(!0),l(o,null,g(b(a).chats.slice().reverse(),((e,a)=>(s(),l("div",{class:"chat",key:`chat-${a}`},[ea,n("p",aa,A(e),1)])))),128))])],64))},__scopeId:"data-v-388ca438"},sa=[{path:"/",name:"index",component:ce},{path:"/clubs",name:"clubs",component:ue},{path:"/club/:id",name:"club",component:Qe},{path:"/club/:id/member",name:"member",component:Je},{path:"/club/:id/event",name:"event",component:Fe},{path:"/club/:id/chat",name:"chat",component:ta}],la=k({history:I(),routes:sa,scrollBehavior:(e,a,t)=>({top:0})});w.initializeApp({apiKey:"AIzaSyAD96JuYmZ-CZuGfISGvO4uO_EVtsdLYCc",authDomain:"webukatsu.firebaseapp.com",projectId:"webukatsu",storageBucket:"webukatsu.appspot.com",messagingSenderId:"355517873536",appId:"1:355517873536:web:f832f3eccc893e5c345565",measurementId:"G-1P5ZVSX9S4"});const ca=w.firestore();!function(e={}){const{immediate:a=!1,onNeedRefresh:t,onOfflineReady:s,onRegistered:l,onRegisterError:c}=e;let i;"serviceWorker"in navigator&&(i=new C("/sw.js",{scope:"/"}),i.addEventListener("activated",(e=>{e.isUpdate?window.location.reload():null==s||s()})),i.register({immediate:a}).then((e=>{null==l||l(e)})).catch((e=>{null==c||c(e)})))}(),x(E).use(la).mount("#app");
