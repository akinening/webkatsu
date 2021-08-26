import{p as a,a as e,r as t,o as s,c as l,b as c,w as i,d as n,F as o,e as r,f as d,g as u,h as m,v as p,u as b,T as _,i as g,j as f,k as v,l as h,t as A,m as y,n as k,q as I,s as C,x as w,y as x}from"./vendor.c52f5e63.js";!function(){const a=document.createElement("link").relList;if(!(a&&a.supports&&a.supports("modulepreload"))){for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver((a=>{for(const t of a)if("childList"===t.type)for(const a of t.addedNodes)"LINK"===a.tagName&&"modulepreload"===a.rel&&e(a)})).observe(document,{childList:!0,subtree:!0})}function e(a){if(a.ep)return;a.ep=!0;const e=function(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerpolicy&&(e.referrerPolicy=a.referrerpolicy),"use-credentials"===a.crossorigin?e.credentials="include":"anonymous"===a.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(a);fetch(a.href,e)}}();const B={};a("data-v-6d33037a");const S={class:"header"},j=n("img",{class:"header__logo",src:"/assets/zenb.0c731f88.svg",alt:"logo"},null,-1);e(),B.render=function(a,e){const n=t("router-link");return s(),l("header",S,[c(n,{to:{name:"index"}},{default:i((()=>[j])),_:1})])},B.__scopeId="data-v-6d33037a";const E={setup:a=>(a,e)=>{const i=t("router-view");return s(),l(o,null,[c(B),c(i)],64)}};var L="/assets/ogp.5682831c.png";const P={};a("data-v-7eac02d2");const U={class:"footer"},N=n("img",{class:"footer__logo",src:"/assets/zenb-white.49a27669.svg",alt:"logo"},null,-1),V=r('<p class="footer__sub" data-v-7eac02d2>学生・社会人のための部活サービス</p><ul class="menu" data-v-7eac02d2><li class="menu__list" data-v-7eac02d2>利用規約</li><li class="menu__list" data-v-7eac02d2>プライバシーポリシー</li><li class="menu__list" data-v-7eac02d2><a href="https://twitter.com/ZenbClub" target="_blank" data-v-7eac02d2>Twitter</a></li></ul>',2);e(),P.render=function(a,e){const n=t("router-link");return s(),l("footer",U,[c(n,{to:{name:"index"}},{default:i((()=>[N])),_:1}),V])},P.__scopeId="data-v-7eac02d2";a("data-v-5b1e21f5");const O={class:"hero"},M=n("img",{class:"hero__logo",src:"/assets/zenb-white.49a27669.svg",alt:"logo"},null,-1),R=n("p",{class:"hero__sub"},"部活動をオンラインでかんたんに。",-1),W={class:"action"},Y=n("img",{class:"action__btn",src:"/assets/btn_enter.38170a04.png",alt:"部活に入る"},null,-1),D=["onClick"],Q=[n("div",{class:"card"},[n("img",{class:"card__image",src:"/assets/modal.ad30c41b.png",alt:"modal"}),n("p",{class:"card__text"},[f(" この先は現在、開発中です。"),n("br"),f(" 事前アンケートにお答えいただくと"),n("br"),f(" トライアル版開始時に、優先的にご招待いたします。 ")]),n("a",{class:"card__btn",href:"https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544"},"アンケートに答える")],-1)],Z=["onClick"],J=["onSubmit"],T=n("legend",{class:"form__title"},"部活動団体 登録申請書",-1),K=n("label",{class:"form__label",for:"club-name"},"1. 部の名前を決めましょう！",-1),G=n("label",{class:"form__label",for:"club-name"},"2. 活動内容を教えてください！",-1),X=n("label",{class:"form__label",for:"club-name"},"3. ヘッダー画像のURLを設定しましょう",-1),z=n("input",{class:"form__submit",type:"submit",value:"部活を作成"},null,-1),F=n("section",null,[n("div",{class:"feature"},[n("img",{class:"feature__image",src:"/assets/friend.088e9144.svg",alt:"friend"}),n("div",{class:"feature__text"},[n("h1",{class:"title"},"学生・社会人の皆さん、ようこそ！"),n("p",{class:"description"},[f(" 「Zenb」は、部活やサークルを"),n("br"),f(" Web上で気軽に立ち上げられるサービスです。"),n("br"),n("br"),f(" オフ会を開きたい！"),n("br"),f(" ゲームでフレンドを募集したい！"),n("br"),f(" クリエイターの仲間がほしい！"),n("br"),f(" などなど・・・"),n("br"),f(" ゆるっと繋がりたい方におすすめです。 ")]),n("a",{class:"c-btn",href:"https://note.com/preview/neb1a8d224cab?prev_access_key=52a687b5a4dfbaae416282ce28099910"},"使い方ガイド")])]),n("div",{class:"feature"},[n("div",{class:"feature__text"},[n("h1",{class:"title"},"スマホのホーム登録がおすすめ"),n("p",{class:"description"}," スマホで「ホーム画面に追加」をすると、Zenbをアプリとしてインストールし、部活動を管理しやすくなります。 ")])])],-1),q={class:"club"},H=n("h1",{class:"c-title"},"部活動",-1),$={class:"myclubs"},aa=["src","alt"],ea=["alt"],ta={class:"myclub__title"},sa=f(" すべての部活動 "),la=n("h1",{class:"c-title"},"人気のカテゴリ",-1);e();const ca={setup(a){const e=d({isOpen:!1,isFormOpen:!1,title:"",image:"",description:"",clubs:[]});u((()=>{ce.collection("clubs").get().then((a=>{a.docs.forEach((a=>{e.clubs.push({title:a.data().title,image:a.data().image,description:a.data().description,id:a.id})}))})).catch((a=>{console.log(a)}))}));const r=()=>{e.isOpen=!e.isOpen},f=()=>{e.isFormOpen=!e.isFormOpen},y=()=>{ce.collection("clubs").add({title:e.title,image:e.image,description:e.description}).then((()=>{e.isFormOpen=!1})).catch((a=>{console.log(a)}))};return(a,d)=>{const u=t("router-link");return s(),l(o,null,[n("section",O,[M,R,n("div",W,[n("img",{class:"action__btn",src:"/assets/btn_create.dd7d671e.png",alt:"部活をつくる",onClick:f}),c(u,{to:{name:"clubs"}},{default:i((()=>[Y])),_:1})])]),m(c(_,{name:"modal"},{default:i((()=>[n("div",{class:"overlay",onClick:v(r,["self"])},Q,8,D)])),_:1},512),[[p,b(e).isOpen]]),m(c(_,{name:"modal"},{default:i((()=>[n("div",{class:"overlay",onClick:v(f,["self"])},[n("form",{class:"form",onSubmit:v(y,["prevent"])},[T,K,m(n("input",{class:"form__input","onUpdate:modelValue":d[0]||(d[0]=a=>b(e).title=a),placeholder:"◯◯部 または ◯◯サークル",required:""},null,512),[[h,b(e).title]]),G,m(n("textarea",{class:"form__input","onUpdate:modelValue":d[1]||(d[1]=a=>b(e).description=a),placeholder:"・架空大学の漫画研究会です。\r\n・株式会社イグザンプルの社内サークルです。\r\n・毎週月曜日にDiscordでもくもく会をやっています。\r\nなど\r\n\r\n▼その他\r\n・部費: 500円/月\r\n・詳しくはTwitter @ZenbClub にお問い合わせください\r\nなど",required:""},null,512),[[h,b(e).description]]),X,m(n("input",{class:"form__input","onUpdate:modelValue":d[2]||(d[2]=a=>b(e).image=a),placeholder:"https://bosyu.club/assets/ogp.df83dc5a.png"},null,512),[[h,b(e).image]]),z],40,J)],8,Z)])),_:1},512),[[p,b(e).isFormOpen]]),F,n("section",q,[H,n("ul",$,[(s(!0),l(o,null,g(b(e).clubs.slice().reverse(),((a,e)=>(s(),l("li",{class:"myclub",key:`club-${e}`},[c(u,{to:{name:"club",params:{id:a.id}}},{default:i((()=>[a.image?(s(),l("img",{key:0,class:"myclub__image",src:a.image,alt:a.title},null,8,aa)):(s(),l("img",{key:1,class:"myclub__image",src:L,alt:a.title},null,8,ea)),n("p",ta,A(a.title),1)])),_:2},1032,["to"])])))),128))]),c(u,{class:"club__btn",to:{name:"clubs"}},{default:i((()=>[sa])),_:1})]),n("section",{class:"category"},[la,n("div",{class:"category__image",onClick:r},"カラオケ"),n("div",{class:"category__image",onClick:r},"ボードゲーム"),n("div",{class:"category__image",onClick:r},"スポーツ"),n("div",{class:"category__image",onClick:r},"英会話"),n("div",{class:"category__image",onClick:r},"食事・旅行"),n("div",{class:"category__image",onClick:r},"プログラミング")]),c(P)],64)}},__scopeId:"data-v-5b1e21f5"};a("data-v-443d2c3e");const ia={class:"club"},na=n("h1",{class:"c-title"},"部活動一覧",-1),oa={class:"myclubs"},ra=["src","alt"],da=["alt"],ua={class:"myclub__title"};e();const ma={setup(a){const e=d({title:"",image:"",clubs:[]});return u((()=>{ce.collection("clubs").get().then((a=>{a.docs.forEach((a=>{e.clubs.push({title:a.data().title,image:a.data().image,id:a.id})}))})).catch((a=>{console.log(a)}))})),(a,r)=>{const d=t("router-link");return s(),l(o,null,[n("section",ia,[na,n("ul",oa,[(s(!0),l(o,null,g(b(e).clubs.slice().reverse(),((a,e)=>(s(),l("li",{class:"myclub",key:`club-${e}`},[c(d,{to:{name:"club",params:{id:a.id}}},{default:i((()=>[a.image?(s(),l("img",{key:0,class:"myclub__image",src:a.image,alt:a.title},null,8,ra)):(s(),l("img",{key:1,class:"myclub__image",src:L,alt:a.title},null,8,da)),n("p",ua,A(a.title),1)])),_:2},1032,["to"])])))),128))])]),c(P)],64)}},__scopeId:"data-v-443d2c3e"};a("data-v-cdb8fc8e");const pa={class:"nav"},ba={class:"menu"},_a={class:"menu__tab"},ga=n("img",{class:"tab__icon",src:"/assets/top.cf443ce9.svg",alt:""},null,-1),fa=n("p",{class:"tab__label"},"トップ",-1),va={class:"menu__tab"},ha=n("img",{class:"tab__icon",src:"/assets/chat.38dbb18c.svg",alt:""},null,-1),Aa=n("p",{class:"tab__label"},"タイムライン",-1),ya={class:"menu__tab"},ka=n("img",{class:"tab__icon",src:"/assets/event.8174186d.svg",alt:""},null,-1),Ia=n("p",{class:"tab__label"},"イベント",-1),Ca={class:"menu__tab"},wa=n("img",{class:"tab__icon",src:"/assets/wiki.fb00fffb.svg",alt:""},null,-1),xa=n("p",{class:"tab__label"},"Wiki",-1);e();const Ba={setup(a){const e=y();return(a,o)=>{const r=t("router-link");return s(),l("div",pa,[n("ul",ba,[n("li",_a,[c(r,{class:"tab",to:{name:"club",params:{id:b(e).params.id}}},{default:i((()=>[ga,fa])),_:1},8,["to"])]),n("li",va,[c(r,{to:{name:"chat",params:{id:b(e).params.id}}},{default:i((()=>[ha,Aa])),_:1},8,["to"])]),n("li",ya,[c(r,{to:{name:"event",params:{id:b(e).params.id}}},{default:i((()=>[ka,Ia])),_:1},8,["to"])]),n("li",Ca,[c(r,{to:{name:"wiki",params:{id:b(e).params.id}}},{default:i((()=>[wa,xa])),_:1},8,["to"])])])])}},__scopeId:"data-v-cdb8fc8e"};a("data-v-8fbf8de8");const Sa={class:"club"},ja=["src","alt"],Ea=["alt"],La={class:"info"},Pa={class:"info__title"},Ua=n("p",{class:"info__member"},"代表: ゲスト",-1),Na=n("a",{class:"btn btn--enter",href:"https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544"},"入部する",-1),Va={class:"desc"},Oa={key:0,class:"desc__text"},Ma={key:1,class:"desc__nothing"},Ra=[n("img",{src:"/assets/404cat.89aaea79.svg",alt:"no data"},null,-1),n("p",null,"まだ活動内容がありません",-1)],Wa={class:"links"},Ya=n("a",{class:"links__btn",href:"http://twitter.com/share?url=https://bosyu.club/&text=Zenb"},"ツイートする",-1),Da=["href"];e();const Qa={setup(a){const e=d({title:"",image:"",description:"",id:""}),t=y();return e.id=t.params.id,u((()=>{ce.collection("clubs").doc(e.id).get().then((a=>{e.title=a.data().title,e.image=a.data().image,e.description=a.data().description})).catch((a=>{console.log(a)}))})),(a,t)=>(s(),l(o,null,[c(Ba),n("div",Sa,[b(e).image?(s(),l("img",{key:0,class:"image",src:b(e).image,alt:b(e).title},null,8,ja)):(s(),l("img",{key:1,class:"image",src:L,alt:b(e).title},null,8,Ea)),n("div",La,[n("h1",Pa,A(b(e).title),1),Ua,Na])]),n("div",Va,[b(e).description?(s(),l("p",Oa,A(b(e).description),1)):(s(),l("div",Ma,Ra)),n("div",Wa,[Ya,n("a",{class:"links__btn",href:"https://social-plugins.line.me/lineit/share?url=https://bosyu.club"+a.$route.path},"LINEでシェア",8,Da)])])],64))},__scopeId:"data-v-8fbf8de8"};a("data-v-1e9f970f");const Za={class:"space"};e();const Ja={setup(a){const e=d({docs:["データが","ありません"]});return(a,t)=>(s(),l(o,null,[c(Ba),n("div",Za,[(s(!0),l(o,null,g(b(e).docs,((a,e)=>(s(),l("div",{class:"",key:`doc-${e}`},A(a),1)))),128))])],64))},__scopeId:"data-v-1e9f970f"};a("data-v-25aa39c6");const Ta={class:"space"},Ka=["src","alt"],Ga={class:"event__info"},Xa={class:"date"},za={class:"title"};e();const Fa={setup(a){const e=d({events:[{date:"2021/09/29(金)",title:"東京ボードゲーム会 @八王子",image:"https://cdn.pixabay.com/photo/2015/05/23/08/02/playing-cards-780325_1280.jpg"},{date:"2021/09/22(金)",title:"第12回 Zoom人狼",image:"https://cdn.pixabay.com/photo/2015/05/23/08/02/playing-cards-780325_1280.jpg"},{date:"2021/09/15(金)",title:"【ボカロ限定】カラオケオフ会 in 秋葉原",image:"https://cdn.pixabay.com/photo/2015/05/23/08/02/playing-cards-780325_1280.jpg"}]});return(a,t)=>(s(),l(o,null,[c(Ba),n("div",Ta,[(s(!0),l(o,null,g(b(e).events,((a,e)=>(s(),l("div",{class:"event",key:`event-${e}`},[n("img",{class:"event__image",src:a.image,alt:a.title},null,8,Ka),n("div",Ga,[n("p",Xa,A(a.date),1),n("p",za,A(a.title),1)])])))),128))])],64))},__scopeId:"data-v-25aa39c6"};a("data-v-388ca438");const qa={class:"space"},Ha=["onSubmit"],$a=n("input",{class:"form__submit",type:"submit",value:"送信"},null,-1),ae=n("img",{class:"chat__icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQZSURBVHgB7ZxhTxpBEIZHyp1SKAi1RUNNmvj//0i/t1+amraK1UoVKYiA2u57sI0hNRFv794B5kkuaRqzS/a53b2dnd2NDx8//RGDRkEMKiaAjAkgYwLImAAyJoCMCSBjAsiYADImgIwJIGMCyJgAMiaAjAkgU5QloVAoSK1SlkqpJKXNTYmiSF4Upu/P3f29TCYTGY5G0h8O5ao/kHv3f8vAhvYNmSgqym6jIdVK5V+DP4XLXk9Of13I5PZWNKO2B+CN333dkJ3tbXkO9Wo1eTrdrpw5EXdKe4RKAXjrD1otid0wkxYIrJbL8uW4rbI3qJuEt9z4HqrxPSjr4F0rKVsbqgTgzX+/txu08T0oE2VHRV2dXo0AjPmh3/x5fE9YZDLPGjW/BBNulo3vQR1NV5cWVAjA0PPcr53ngLq0DEUqBOA7P/c6lfQCugCMx/hez5tFF3ZZQf8FVRdeYIDGx/qADV0AYju0ul/y6vbQBWzFvMWRhoUZXUAcZ//p+WjdEa9uj4pJeB3r9tiGDBm6AGaYWEOImi5gPJ4Ii/GEV7eHLuBmPBIWNyNe3R66AOzhrmPdHrqAnttAZ43FqJuNikm41+9L3mDT3ibhGWcXF5I32KjXgAoB48mtdC67kheoa6xkg17NQgy9II/PQtTB6HGPoUYAxuPDdjtTCSj78LitKkdIVSgCQ9HXH6eZSECZ31C2stwgdbEgLI5C9wT/5g8VLLzmURmMQ0/4/P0oyMSMMlCWtjffozY3FOP0SacjnauuNN2m/SL7xn5tgU9NrQ3vUZ8d7Un2cGfp6dhFw0bOw/R0BPWGLq50PUtP15qMO8/SnA9Ag172fifPKmEbMmRMABkTQMYEkDEBZEwAGRNARvU6AKmDpc1Y4mIkcVRMMtniWV5/NJfVhnPCWCskizL3b4QzEPvBSljD5vtjqBHgD2KX3CoXSbMPD2I/Bfy9V1L+T8LvwK2QhzfTg9wQo+XEJFUAGqpWLicNH2Wcp4m68OzUpydx0Cv61y5sMRgkcljkLsA3er1WpeZmYnjDAyEYsiDhvHuV+3CVm4B69ZU0XESzXOLn5M+TzC3uQcQVAs673dxiTplHQ9HwCCdrSAVfBL93nLWIzHoA3vT95tula3gPfvd+s5m8PEdnPzObJ4ILSHvJhjb84W5c+nFy3pHQBBUwvWpgL7nPZ9XI6tKPYJ8h/oaTVWx8j+8NIQ95BxGQxz0PWgh930SQUlpvdtai8T0h75tILQBDD+OkOxvMCSHWNKkFMO550EItwEn71AKYB63Z4L6JtKQWUNpaXwEIkafFNmTImAAyJoCMCSBjAsiYADImgIwJIGMCyJgAMiaAjAkgYwLImAAyJoCMCSBjAsiYADImgIwJIGMCyJgAMiaAjAkg8xdic2PT8sRsUAAAAABJRU5ErkJggg==",alt:"chat icon"},null,-1),ee={class:"chat__text"};e();const te={setup(a){const e=d({text:"",chats:["部員の皆様","参加いただき、ありがとうございます。この先は現在、開発中です。下記アンケートにお答えいただくと、トライアル版開始時に優先的にご招待いたします。","https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544"]}),t=()=>{e.chats.push(e.text),e.text=""};return(a,i)=>(s(),l(o,null,[c(Ba),n("div",qa,[n("form",{class:"form",onSubmit:v(t,["prevent"])},[m(n("textarea",{class:"form__input","onUpdate:modelValue":i[0]||(i[0]=a=>b(e).text=a),placeholder:"チャットを入力",required:""},null,512),[[h,b(e).text]]),$a],40,Ha),(s(!0),l(o,null,g(b(e).chats.slice().reverse(),((a,e)=>(s(),l("div",{class:"chat",key:`chat-${e}`},[ae,n("p",ee,A(a),1)])))),128))])],64))},__scopeId:"data-v-388ca438"},se=[{path:"/",name:"index",component:ca},{path:"/clubs",name:"clubs",component:ma},{path:"/club/:id",name:"club",component:Qa},{path:"/club/:id/wiki",name:"wiki",component:Ja},{path:"/club/:id/event",name:"event",component:Fa},{path:"/club/:id/chat",name:"chat",component:te}],le=k({history:I(),routes:se,scrollBehavior:(a,e,t)=>({top:0})});w.initializeApp({apiKey:"AIzaSyAD96JuYmZ-CZuGfISGvO4uO_EVtsdLYCc",authDomain:"webukatsu.firebaseapp.com",projectId:"webukatsu",storageBucket:"webukatsu.appspot.com",messagingSenderId:"355517873536",appId:"1:355517873536:web:f832f3eccc893e5c345565",measurementId:"G-1P5ZVSX9S4"});const ce=w.firestore();!function(a={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:s,onRegistered:l,onRegisterError:c}=a;let i;"serviceWorker"in navigator&&(i=new C("/sw.js",{scope:"/"}),i.addEventListener("activated",(a=>{a.isUpdate?window.location.reload():null==s||s()})),i.register({immediate:e}).then((a=>{null==l||l(a)})).catch((a=>{null==c||c(a)})))}(),x(E).use(le).mount("#app");
