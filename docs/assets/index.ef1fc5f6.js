import{r as e,c as s,a as t,b as a,w as l,F as c,d as i,o,p as r,e as n,f as u,g as d,h as m,v as p,u as g,T as b,i as _,j as f,k as A,l as h,t as v,m as k,n as y,q as I,s as w,x as C}from"./vendor.af1f3145.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?s.credentials="include":"anonymous"===e.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();const B={},S={class:"header"},E=t("img",{class:"header__logo",src:"/assets/web.8bc4de54.svg",alt:"logo"},null,-1),L={class:"footer"},x=t("img",{class:"footer__logo",src:"/assets/web-white.08c4ac69.svg",alt:"logo"},null,-1),P=i('<p class="footer__sub">学生・社会人のための部活サービス</p><ul class="menu"><li class="menu__list">利用規約</li><li class="menu__list">プライバシーポリシー</li><li class="menu__list"><a href="https://twitter.com/webukatsu" target="_blank">Twitter</a></li></ul>',2);B.render=function(i,r){const n=e("router-link"),u=e("router-view");return o(),s(c,null,[t("header",S,[a(n,{to:"/"},{default:l((()=>[E])),_:1})]),a(u),t("footer",L,[a(n,{to:"/"},{default:l((()=>[x])),_:1}),P])],64)};var j="/assets/ogp.df83dc5a.png";r("data-v-5af32d8b");const U={class:"hero"},V=t("img",{class:"hero__logo",src:"/assets/web.8bc4de54.svg",alt:"logo"},null,-1),N=t("p",{class:"hero__sub"},"学生・社会人のためのオンライン部活サービス",-1),M={class:"action"},O=t("img",{class:"action__btn",src:"/assets/btn_enter.38170a04.png",alt:"部活に入る"},null,-1),W=["onClick"],Y=[t("div",{class:"card"},[t("img",{class:"card__image",src:"/assets/modal.ad30c41b.png",alt:"modal"}),t("p",{class:"card__text"},[f(" この先は現在、開発中です。"),t("br"),f(" 事前アンケートにお答えいただくと"),t("br"),f(" トライアル版開始時に、優先的にご招待いたします。 ")]),t("a",{class:"card__btn",href:"https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544"},"アンケートに答える")],-1)],D=["onClick"],Q=["onSubmit"],J=t("legend",{class:"form__title"},"部活動団体 登録申請書",-1),R=t("label",{class:"form__label",for:"club-name"},"1. 部の名前を決めましょう！",-1),T=t("label",{class:"form__label",for:"club-name"},"2. 活動内容を教えてください！",-1),K=t("label",{class:"form__label",for:"club-name"},"3. ヘッダー画像のURLを設定しましょう",-1),G=t("input",{class:"form__submit",type:"submit",value:"部活を作成"},null,-1),X=t("section",{class:"feature"},[t("img",{class:"feature__image",src:"/assets/friend.be6819b4.svg",alt:"friend"}),t("div",{class:"feature__text"},[t("h1",{class:"title"},"学生・社会人の皆さん、ようこそ！"),t("p",{class:"description"},[f(" 「We部」は、部活やサークルを"),t("br"),f(" Web上で気軽に立ち上げられるサービスです。"),t("br"),t("br"),f(" オフ会を開きたい！"),t("br"),f(" ゲームでフレンドを募集したい！"),t("br"),f(" クリエイターの仲間がほしい！"),t("br"),f(" などなど・・・"),t("br"),f(" ゆるっと繋がりたい方におすすめです。 ")])])],-1),F={class:"club"},Z=t("h1",{class:"c-title"},"部活動",-1),q={class:"myclubs"},H=["src","alt"],z=["alt"],$={class:"myclub__title"},ee=f(" すべての部活動 "),se=t("h1",{class:"c-title"},"人気のカテゴリ",-1);n();const te={setup(i){const r=u({isOpen:!1,isFormOpen:!1,title:"",image:"",description:"",clubs:[]});d((()=>{Ne.collection("clubs").get().then((e=>{e.docs.forEach((e=>{r.clubs.push({title:e.data().title,image:e.data().image,description:e.data().description,id:e.id})}))})).catch((e=>{console.log(e)}))}));const n=()=>{r.isOpen=!r.isOpen},f=()=>{r.isFormOpen=!r.isFormOpen},k=()=>{Ne.collection("clubs").add({title:r.title,image:r.image,description:r.description}).then((()=>{r.isFormOpen=!1})).catch((e=>{console.log(e)}))};return(i,u)=>{const d=e("router-link");return o(),s(c,null,[t("section",U,[V,N,t("div",M,[t("img",{class:"action__btn",src:"/assets/btn_create.dd7d671e.png",alt:"部活をつくる",onClick:f}),a(d,{to:"/clubs"},{default:l((()=>[O])),_:1})])]),m(a(b,{name:"modal"},{default:l((()=>[t("div",{class:"overlay",onClick:A(n,["self"])},Y,8,W)])),_:1},512),[[p,g(r).isOpen]]),m(a(b,{name:"modal"},{default:l((()=>[t("div",{class:"overlay",onClick:A(f,["self"])},[t("form",{class:"form",onSubmit:A(k,["prevent"])},[J,R,m(t("input",{class:"form__input","onUpdate:modelValue":u[0]||(u[0]=e=>g(r).title=e),placeholder:"◯◯部 または ◯◯サークル",required:""},null,512),[[h,g(r).title]]),T,m(t("textarea",{class:"form__input","onUpdate:modelValue":u[1]||(u[1]=e=>g(r).description=e),placeholder:"・架空大学の漫画研究会です。\r\n・株式会社イグザンプルの社内サークルです。\r\n・毎週月曜日にDiscordでもくもく会をやっています。\r\nなど\r\n\r\n▼その他\r\n・部費: 500円/月\r\n・詳しくはTwitter @webukatsu にお問い合わせください\r\nなど",required:""},null,512),[[h,g(r).description]]),K,m(t("input",{class:"form__input","onUpdate:modelValue":u[2]||(u[2]=e=>g(r).image=e),placeholder:"https://webukatsu.web.app/assets/ogp.df83dc5a.png"},null,512),[[h,g(r).image]]),G],40,Q)],8,D)])),_:1},512),[[p,g(r).isFormOpen]]),X,t("section",F,[Z,t("ul",q,[(o(!0),s(c,null,_(g(r).clubs.slice().reverse(),((e,c)=>(o(),s("li",{class:"myclub",key:`club-${c}`},[a(d,{to:"/club/"+e.id},{default:l((()=>[e.image?(o(),s("img",{key:0,class:"myclub__image",src:e.image,alt:e.title},null,8,H)):(o(),s("img",{key:1,class:"myclub__image",src:j,alt:e.title},null,8,z)),t("p",$,v(e.title),1)])),_:2},1032,["to"])])))),128))]),a(d,{class:"club__btn",to:"/clubs"},{default:l((()=>[ee])),_:1})]),t("section",{class:"category"},[se,t("div",{class:"category__image",onClick:n},"創作活動"),t("div",{class:"category__image",onClick:n},"ゲーム"),t("div",{class:"category__image",onClick:n},"スポーツ"),t("div",{class:"category__image",onClick:n},"英会話"),t("div",{class:"category__image",onClick:n},"食事・旅行"),t("div",{class:"category__image",onClick:n},"音楽")])],64)}},__scopeId:"data-v-5af32d8b"};r("data-v-a52b3ec4");const ae={class:"club"},le=t("h1",{class:"c-title"},"部活動",-1),ce={class:"myclubs"},ie=["src","alt"],oe=["alt"],re={class:"myclub__title"};n();const ne={setup(i){const r=u({title:"",image:"",clubs:[]});return d((()=>{Ne.collection("clubs").get().then((e=>{e.docs.forEach((e=>{r.clubs.push({title:e.data().title,image:e.data().image,id:e.id})}))})).catch((e=>{console.log(e)}))})),(i,n)=>{const u=e("router-link");return o(),s("section",ae,[le,t("ul",ce,[(o(!0),s(c,null,_(g(r).clubs.slice().reverse(),((e,c)=>(o(),s("li",{class:"myclub",key:`club-${c}`},[a(u,{to:"/club/"+e.id},{default:l((()=>[e.image?(o(),s("img",{key:0,class:"myclub__image",src:e.image,alt:e.title},null,8,ie)):(o(),s("img",{key:1,class:"myclub__image",src:j,alt:e.title},null,8,oe)),t("p",re,v(e.title),1)])),_:2},1032,["to"])])))),128))])])}},__scopeId:"data-v-a52b3ec4"};r("data-v-1c5a0c1a");const ue={class:"club"},de=["src","alt"],me=["alt"],pe={class:"info"},ge={class:"info__title"},be=t("p",{class:"info__member"},"代表: ゲスト",-1),_e=t("a",{class:"btn btn--enter",href:"https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544"},"入部する",-1),fe={class:"desc"},Ae={key:0,class:"desc__text"},he={key:1,class:"desc__nothing"},ve=[t("img",{src:"/assets/404cat.c95befc8.svg",alt:"no data"},null,-1),t("p",null,"まだ活動内容がありません",-1)],ke={class:"links"},ye=t("a",{class:"links__btn",href:"http://twitter.com/share?url=https://webukatsu.web.app/&text=We%E9%83%A8"},"ツイートする",-1),Ie=["href"],we={class:"message"},Ce=f("チャットを見る");n();const Be={setup(i){const r=u({title:"",image:"",description:"",id:""}),n=k();return r.id=n.params.id,d((()=>{Ne.collection("clubs").doc(r.id).get().then((e=>{r.title=e.data().title,r.image=e.data().image,r.description=e.data().description})).catch((e=>{console.log(e)}))})),(i,n)=>{const u=e("router-link");return o(),s(c,null,[t("div",ue,[g(r).image?(o(),s("img",{key:0,class:"image",src:g(r).image,alt:g(r).title},null,8,de)):(o(),s("img",{key:1,class:"image",src:j,alt:g(r).title},null,8,me)),t("div",pe,[t("h1",ge,v(g(r).title),1),be,_e])]),t("div",fe,[g(r).description?(o(),s("p",Ae,v(g(r).description),1)):(o(),s("div",he,ve)),t("div",ke,[ye,t("a",{class:"links__btn",href:"https://social-plugins.line.me/lineit/share?url=https://webukatsu.web.app"+i.$route.path},"LINEでシェア",8,Ie)])]),t("div",we,[a(u,{class:"btn",to:g(r).id+"/chat"},{default:l((()=>[Ce])),_:1},8,["to"])])],64)}},__scopeId:"data-v-1c5a0c1a"};r("data-v-f1c19c7e");const Se={class:"space"},Ee=["onSubmit"],Le=t("input",{class:"form__submit",type:"submit",value:"送信"},null,-1),xe=t("img",{class:"chat__icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQZSURBVHgB7ZxhTxpBEIZHyp1SKAi1RUNNmvj//0i/t1+amraK1UoVKYiA2u57sI0hNRFv794B5kkuaRqzS/a53b2dnd2NDx8//RGDRkEMKiaAjAkgYwLImAAyJoCMCSBjAsiYADImgIwJIGMCyJgAMiaAjAkgU5QloVAoSK1SlkqpJKXNTYmiSF4Upu/P3f29TCYTGY5G0h8O5ao/kHv3f8vAhvYNmSgqym6jIdVK5V+DP4XLXk9Of13I5PZWNKO2B+CN333dkJ3tbXkO9Wo1eTrdrpw5EXdKe4RKAXjrD1otid0wkxYIrJbL8uW4rbI3qJuEt9z4HqrxPSjr4F0rKVsbqgTgzX+/txu08T0oE2VHRV2dXo0AjPmh3/x5fE9YZDLPGjW/BBNulo3vQR1NV5cWVAjA0PPcr53ngLq0DEUqBOA7P/c6lfQCugCMx/hez5tFF3ZZQf8FVRdeYIDGx/qADV0AYju0ul/y6vbQBWzFvMWRhoUZXUAcZ//p+WjdEa9uj4pJeB3r9tiGDBm6AGaYWEOImi5gPJ4Ii/GEV7eHLuBmPBIWNyNe3R66AOzhrmPdHrqAnttAZ43FqJuNikm41+9L3mDT3ibhGWcXF5I32KjXgAoB48mtdC67kheoa6xkg17NQgy9II/PQtTB6HGPoUYAxuPDdjtTCSj78LitKkdIVSgCQ9HXH6eZSECZ31C2stwgdbEgLI5C9wT/5g8VLLzmURmMQ0/4/P0oyMSMMlCWtjffozY3FOP0SacjnauuNN2m/SL7xn5tgU9NrQ3vUZ8d7Un2cGfp6dhFw0bOw/R0BPWGLq50PUtP15qMO8/SnA9Ag172fifPKmEbMmRMABkTQMYEkDEBZEwAGRNARvU6AKmDpc1Y4mIkcVRMMtniWV5/NJfVhnPCWCskizL3b4QzEPvBSljD5vtjqBHgD2KX3CoXSbMPD2I/Bfy9V1L+T8LvwK2QhzfTg9wQo+XEJFUAGqpWLicNH2Wcp4m68OzUpydx0Cv61y5sMRgkcljkLsA3er1WpeZmYnjDAyEYsiDhvHuV+3CVm4B69ZU0XESzXOLn5M+TzC3uQcQVAs673dxiTplHQ9HwCCdrSAVfBL93nLWIzHoA3vT95tula3gPfvd+s5m8PEdnPzObJ4ILSHvJhjb84W5c+nFy3pHQBBUwvWpgL7nPZ9XI6tKPYJ8h/oaTVWx8j+8NIQ95BxGQxz0PWgh930SQUlpvdtai8T0h75tILQBDD+OkOxvMCSHWNKkFMO550EItwEn71AKYB63Z4L6JtKQWUNpaXwEIkafFNmTImAAyJoCMCSBjAsiYADImgIwJIGMCyJgAMiaAjAkgYwLImAAyJoCMCSBjAsiYADImgIwJIGMCyJgAMiaAjAkg8xdic2PT8sRsUAAAAABJRU5ErkJggg==",alt:"chat icon"},null,-1),Pe={class:"chat__text"};n();const je={setup(e){k();const a=u({text:"",chats:["部員の皆様","参加いただき、ありがとうございます。この先は現在、開発中です。下記アンケートにお答えいただくと、トライアル版開始時に優先的にご招待いたします。","https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544"]}),l=()=>{a.chats.push(a.text),a.text=""};return(e,i)=>(o(),s("div",Se,[t("form",{class:"form",onSubmit:A(l,["prevent"])},[m(t("textarea",{class:"form__input","onUpdate:modelValue":i[0]||(i[0]=e=>g(a).text=e),placeholder:"チャットを入力",required:""},null,512),[[h,g(a).text]]),Le],40,Ee),(o(!0),s(c,null,_(g(a).chats.slice().reverse(),((e,a)=>(o(),s("div",{class:"chat",key:`chat-${a}`},[xe,t("p",Pe,v(e),1)])))),128))]))},__scopeId:"data-v-f1c19c7e"},Ue=[{path:"/",component:te},{path:"/clubs",component:ne},{path:"/club/:id",component:Be},{path:"/club/:id/chat",component:je}],Ve=y({history:I(),routes:Ue,scrollBehavior:(e,s,t)=>({top:0})});w.initializeApp({apiKey:"AIzaSyAD96JuYmZ-CZuGfISGvO4uO_EVtsdLYCc",authDomain:"webukatsu.firebaseapp.com",projectId:"webukatsu",storageBucket:"webukatsu.appspot.com",messagingSenderId:"355517873536",appId:"1:355517873536:web:f832f3eccc893e5c345565",measurementId:"G-1P5ZVSX9S4"});const Ne=w.firestore();C(B).use(Ve).mount("#app");
