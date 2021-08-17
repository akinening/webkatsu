import{r as s,o as a,c as e,a as l,w as t,v as c,u as i,b as o,T as r,d as n,F as m,e as u,f as _,g as d,h as b,t as g,i as p,j as f}from"./vendor.0f5ecf3d.js";const h=l("header",{class:"header"},[l("img",{class:"header__logo",src:"/assets/web.8bc4de54.svg",alt:"logo"})],-1),v=l("img",{class:"hero__logo",src:"/assets/web.8bc4de54.svg",alt:"logo"},null,-1),y=l("p",{class:"hero__sub"},"学生・社会人のためのオンライン部活サービス",-1),k=["onClick"],w=[l("div",{class:"card"},[l("img",{class:"card__image",src:"/assets/modal.ad30c41b.png",alt:"modal"}),l("p",{class:"card__text"},[_(" この先は現在、開発中です。"),l("br"),_(" 事前アンケートにお答えいただくと"),l("br"),_(" トライアル版開始時に、優先的にご招待いたします。 ")]),l("a",{class:"card__btn",href:"https://tayori.com/form/44dd912aa78148fea8a5b933b4cfa5a14f34e544"},"アンケートに答える")],-1)],O=["onClick"],C=l("legend",{class:"form__title"},"部活動団体 登録申請書",-1),I=l("label",{class:"form__label",for:"club-name"},"1. 部の名前を教えてください！",-1),S=l("label",{class:"form__label",for:"club-name"},"2. ヘッダー画像のURLを設定しましょう",-1),F=l("input",{class:"form__submit",type:"submit",value:"部活を作成"},null,-1),V=l("section",{class:"feature"},[l("img",{class:"feature__image",src:"/assets/friend.be6819b4.svg",alt:"friend"}),l("div",{class:"feature__text"},[l("h1",{class:"title"},"学生・社会人の皆さん、ようこそ！"),l("p",{class:"description"},[_(" 「We部」は、部活やサークルを"),l("br"),_(" Web上で気軽に立ち上げられるサービスです。"),l("br"),l("br"),_(" オフ会を開きたい！"),l("br"),_(" ゲームでフレンドを募集したい！"),l("br"),_(" クリエイターの仲間がほしい！"),l("br"),_(" などなど・・・"),l("br"),_(" ゆるっと繋がりたい方におすすめです。 ")])])],-1),j={class:"club"},A=l("h1",{class:"c-title"},"部活動",-1),G={class:"myclubs"},U=["src","alt"],Z=["alt"],x={class:"myclub__title"},z=l("section",{class:"category"},[l("h1",{class:"c-title"},"人気のカテゴリ"),l("div",{class:"category__image"},"創作活動"),l("div",{class:"category__image"},"ゲーム"),l("div",{class:"category__image"},"スポーツ"),l("div",{class:"category__image"},"英会話"),l("div",{class:"category__image"},"食事・旅行"),l("div",{class:"category__image"},"音楽")],-1),D=l("footer",{class:"footer"},[l("img",{class:"footer__logo",src:"/assets/web-white.08c4ac69.svg",alt:"logo"}),l("p",{class:"footer__sub"},"学生・社会人のための部活サービス"),l("ul",{class:"menu"},[l("li",{class:"menu__list"},"利用規約"),l("li",{class:"menu__list"},"プライバシーポリシー"),l("li",{class:"menu__list"},[l("a",{href:"https://twitter.com/webukatsu",target:"_blank"},"Twitter")])])],-1),E={setup(_){const p=s({isOpen:!1,isFormOpen:!1,title:"",image:"",clubs:[]});L.collection("clubs").get().then((s=>{s.docs.forEach((s=>{p.clubs.push({title:s.data().title,image:s.data().image})}))}));const f=()=>{p.isOpen=!p.isOpen},E=()=>{p.isFormOpen=!p.isFormOpen},T=()=>{L.collection("clubs").add({title:p.title,image:p.image})};return(s,_)=>(a(),e(m,null,[h,l("section",{class:"hero"},[v,y,l("div",{class:"action"},[l("img",{class:"action__btn",src:"/assets/btn_create.dd7d671e.png",alt:"部活をつくる",onClick:E}),l("img",{class:"action__btn",src:"/assets/btn_enter.38170a04.png",alt:"部活に入る",onClick:f})])]),t(o(r,{name:"modal"},{default:n((()=>[l("div",{class:"overlay",onClick:d(f,["self"])},w,8,k)])),_:1},512),[[c,i(p).isOpen]]),t(o(r,{name:"modal"},{default:n((()=>[l("div",{class:"overlay",onClick:d(E,["self"])},[l("form",{class:"form",onSubmit:T},[C,I,t(l("input",{class:"form__input","onUpdate:modelValue":_[0]||(_[0]=s=>i(p).title=s),placeholder:"◯◯部 または ◯◯サークル",required:""},null,512),[[b,i(p).title]]),S,t(l("input",{class:"form__input","onUpdate:modelValue":_[1]||(_[1]=s=>i(p).image=s),placeholder:"https://webukatsu.web.app/assets/ogp.df83dc5a.png"},null,512),[[b,i(p).image]]),F],32)],8,O)])),_:1},512),[[c,i(p).isFormOpen]]),V,l("section",j,[A,l("ul",G,[(a(!0),e(m,null,u(i(p).clubs,((s,t)=>(a(),e("li",{class:"myclub",key:`club-${t}`},[s.image?(a(),e("img",{key:0,class:"myclub__image",src:s.image,alt:s.title},null,8,U)):(a(),e("img",{key:1,class:"myclub__image",src:"/assets/ogp.df83dc5a.png",alt:s.title},null,8,Z)),l("p",x,g(s.title),1)])))),128))]),l("div",{class:"club__btn",onClick:f},"すべての部活動")]),z,D],64))}};p.initializeApp({apiKey:"AIzaSyAD96JuYmZ-CZuGfISGvO4uO_EVtsdLYCc",authDomain:"webukatsu.firebaseapp.com",projectId:"webukatsu",storageBucket:"webukatsu.appspot.com",messagingSenderId:"355517873536",appId:"1:355517873536:web:f832f3eccc893e5c345565",measurementId:"G-1P5ZVSX9S4"});const L=p.firestore();f(E).mount("#app");