"use strict";(globalThis["webpackChunkia_trabalho"]=globalThis["webpackChunkia_trabalho"]||[]).push([[64],{8731:(i,e,t)=>{t.d(e,{Z:()=>u});var o=t(9835);const l=(0,o._)("span",{style:{"font-size":"22px","font-weight":"bold"}},"Você Falhou !",-1);function m(i,e,t,m,p,a){const h=(0,o.up)("q-card-section"),n=(0,o.up)("q-btn"),s=(0,o.up)("q-card"),r=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(r,{ref:"dialog",persistent:"",modelValue:t.showDialog,"onUpdate:modelValue":e[0]||(e[0]=i=>t.showDialog=i)},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{style:{"background-color":"#2a5f83",border:"1px solid white"},class:"text-white flex justify-center column items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[l])),_:1}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,{onClick:a.replayGame,color:"white","text-color":"blue-8",icon:"replay",label:"Tentar Novamente"},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}const p={name:"Fail",props:["showDialog"],methods:{replayGame(){this.$emit("replay",!0)}}};var a=t(1639),h=t(7218),n=t(7590),s=t(3190),r=t(5005),d=t(9984),c=t.n(d);const _=(0,a.Z)(p,[["render",m]]),u=_;c()(p,"components",{QDialog:h.Z,QCard:n.Z,QCardSection:s.Z,QBtn:r.Z})},59:(i,e,t)=>{t.d(e,{Z:()=>u});var o=t(9835);const l=(0,o._)("span",{style:{"font-size":"22px","font-weight":"bold"}},"Parabéns Você Venceu!",-1);function m(i,e,t,m,p,a){const h=(0,o.up)("q-card-section"),n=(0,o.up)("q-btn"),s=(0,o.up)("q-card"),r=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(r,{ref:"dialog",persistent:"",modelValue:t.showDialog,"onUpdate:modelValue":e[0]||(e[0]=i=>t.showDialog=i)},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{style:{"background-color":"#2a5f83",border:"1px solid white"},class:"text-white flex justify-center column items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[l])),_:1}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,{onClick:a.replayGame,color:"white","text-color":"blue-8",icon:"replay",label:"Tentar Novamente"},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}const p={name:"Winner",props:["showDialog"],methods:{replayGame(){this.$emit("replay",!0)}}};var a=t(1639),h=t(7218),n=t(7590),s=t(3190),r=t(5005),d=t(9984),c=t.n(d);const _=(0,a.Z)(p,[["render",m]]),u=_;c()(p,"components",{QDialog:h.Z,QCard:n.Z,QCardSection:s.Z,QBtn:r.Z})},9556:(i,e,t)=>{t.r(e),t.d(e,{default:()=>y});t(702);var o=t(9835),l=t(6970);const m={class:"flex column"},p={style:{"font-family":"Snow,serif","font-size":"20px"}};function a(i,e,t,a,h,n){const s=(0,o.up)("q-page"),r=(0,o.up)("Fail"),d=(0,o.up)("Winner"),c=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(c,{id:"full"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{id:"body"},{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o._)("span",p,"Clicks: "+(0,l.zw)(i.clicks),1)]),(0,o._)("div",{onClick:e[0]||(e[0]=(...e)=>i.moveIce&&i.moveIce(...e)),id:"ice",class:(0,l.C_)({iceAnimationBtoA:i.animationIceToA,iceAnimationAtoB:i.animationIceToB})},null,2),(0,o._)("div",{onClick:e[1]||(e[1]=(...e)=>i.pimPaiAzul&&i.pimPaiAzul(...e)),id:"pim_azul_pai",class:(0,l.C_)({pimPaiAzulAnimationBtoA:i.animationPimAzulPaiToA,pimPaiAzulAnimationAtoB:i.animationPimAzulPaiToB})},null,2),(0,o._)("div",{onClick:e[2]||(e[2]=(...e)=>i.pimPaiVerde&&i.pimPaiVerde(...e)),id:"pim_verde_pai",class:(0,l.C_)({pimPaiVerdeAnimationBtoA:i.animationPimVerdePaiToA,pimPaiVerdeAnimationAtoB:i.animationPimVerdePaiToB})},null,2),(0,o._)("div",{onClick:e[3]||(e[3]=(...e)=>i.pimPaiVermelho&&i.pimPaiVermelho(...e)),id:"pim_vermelho_pai",class:(0,l.C_)({pimPaiVermelhoAnimationBtoA:i.animationPimVermelhoPaiToA,pimPaiVermelhoAnimationAtoB:i.animationPimVermelhoPaiToB})},null,2),(0,o._)("div",{onClick:e[4]||(e[4]=(...e)=>i.pimFilhoAzul&&i.pimFilhoAzul(...e)),id:"pim_azul_filho",class:(0,l.C_)({pimFilhoAzulAnimationBtoA:i.animationPimAzulFilhoToA,pimFilhoAzulAnimationAtoB:i.animationPimAzulFilhoToB})},null,2),(0,o._)("div",{onClick:e[5]||(e[5]=(...e)=>i.pimFilhoVerde&&i.pimFilhoVerde(...e)),id:"pim_verde_filho",class:(0,l.C_)({pimFilhoVerdeAnimationBtoA:i.animationPimVerdeFilhoToA,pimFilhoVerdeAnimationAtoB:i.animationPimVerdeFilhoToB})},null,2),(0,o._)("div",{onClick:e[6]||(e[6]=(...e)=>i.pimFilhoVermelho&&i.pimFilhoVermelho(...e)),id:"pim_vermelho_filho",class:(0,l.C_)({pimFilhoVermelhoAnimationBtoA:i.animationPimVermelhoFilhoToA,pimFilhoVermelhoAnimationAtoB:i.animationPimVermelhoFilhoToB})},null,2)])),_:1}),(0,o.Wm)(r,{id:"fail","show-dialog":i.failStatus,onReplay:i.replayGame},null,8,["show-dialog","onReplay"]),(0,o.Wm)(d,{id:"winner","show-dialog":i.winnerStatus,onReplay:i.replayGame},null,8,["show-dialog","onReplay"])])),_:1})}var h=t(8731),n=t(59);const s=(0,o.aZ)({name:"MainLayout",components:{Winner:n.Z,Fail:h.Z},watch:{iceStatus:{handler:function(i){i.pim_azul_pai&&(i.pim_vermelho_filho||i.pim_verde_filho)&&(console.log("perdeuuu"),this.fail()),i.pim_verde_pai&&(i.pim_azul_filho||i.pim_vermelho_filho)&&(console.log("perdeuuu"),this.fail()),i.pim_vermelho_pai&&(i.pim_azul_filho||i.pim_verde_filho)&&(console.log("perdeuuu"),this.fail()),"A"===this.pimAzulPai.position&&"A"===this.pimVerdePai.position&&"A"===this.pimVermelhoPai.position&&"A"===this.pimAzulFilho.position&&"A"===this.pimVerdeFilho.position&&"A"===this.pimVermelhoFilho.position&&(console.log("ganhouuuu"),this.winner())},deep:!0},AStatus:{handler:function(i){i.pim_azul_filho&&!i.pim_azul_pai&&(i.pim_verde_pai||i.pim_vermelho_pai)&&(console.log("A perdeuuu"),this.fail()),i.pim_verde_filho&&!i.pim_verde_pai&&(i.pim_azul_pai||i.pim_vermelho_pai)&&(console.log("perdeuuu"),this.fail()),i.pim_vermelho_filho&&!i.pim_vermelho_pai&&(i.pim_verde_pai||i.pim_azul_pai)&&(console.log("perdeuuu"),this.fail())},deep:!0},BStatus:{handler:function(i){i.pim_azul_filho&&(i.pim_verde_pai||i.pim_vermelho_pai)&&!i.pim_azul_pai&&(console.log("caso 1"),this.fail()),i.pim_verde_filho&&(i.pim_azul_pai||i.pim_vermelho_pai)&&!i.pim_verde_pai&&(console.log("caso 2"),this.fail()),i.pim_vermelho_filho&&(i.pim_verde_pai||i.pim_azul_pai)&&!i.pim_vermelho_pai&&(console.log("caso 3"),this.fail())},deep:!0}},computed:{iceStatus(){return this.ice},AStatus(){return this.placeA},BStatus(){return this.placeB}},mounted(){},methods:{winner(){this.winnerStatus=!0},fail(){this.failStatus=!0},checkPimOnIce(){let i=0;return Object.keys(this.ice).forEach((e=>{!0===this.ice[e]&&i++})),i},moveIce(){this.clicks=this.clicks+1;const i=document.getElementById("ice"),e="170px"===window.getComputedStyle(i).right,t="555px"===window.getComputedStyle(i).right;(this.ice.pim_verde_pai||this.ice.pim_azul_pai||this.ice.pim_vermelho_pai||this.ice.pim_azul_filho||this.ice.pim_verde_filho||this.ice.pim_vermelho_filho)&&(e&&(this.animationIceToA=!0,this.ice.position="A",this.animationIceToB=!1,this.ice.pim_azul_pai&&(this.animationPimAzulPaiToA=!0,this.animationPimAzulPaiToB=!1,this.pimAzulPai.onIce=!0),this.ice.pim_azul_filho&&(this.animationPimAzulFilhoToA=!0,this.animationPimAzulFilhoToB=!1,this.pimAzulFilho.onIce=!0),this.ice.pim_verde_pai&&(this.animationPimVerdePaiToA=!0,this.animationPimVerdePaiToB=!1,this.pimVerdePai.onIce=!0),this.ice.pim_verde_filho&&(this.animationPimVerdeFilhoToA=!0,this.animationPimVerdeFilhoToB=!1,this.pimVerdeFilho.onIce=!0),this.ice.pim_vermelho_pai&&(this.animationPimVermelhoPaiToA=!0,this.animationPimVermelhoPaiToB=!1,this.pimVermelhoPai.onIce=!0),this.ice.pim_vermelho_filho&&(this.animationPimVermelhoFilhoToA=!0,this.animationPimVermelhoFilhoToB=!1,this.pimVermelhoFilho.onIce=!0)),t&&(this.animationIceToA=!1,this.animationIceToB=!0,this.ice.position="B",this.ice.pim_azul_pai&&(this.animationPimAzulPaiToB=!0,this.animationPimAzulPaiToA=!1,this.pimAzulPai.onIce=!0,this.pimAzulPai.position="B"),this.ice.pim_azul_filho&&(this.animationPimAzulFilhoToB=!0,this.animationPimAzulFilhoToA=!1,this.pimAzulFilho.onIce=!0,this.pimAzulFilho.position="B"),this.ice.pim_verde_pai&&(this.animationPimVerdePaiToB=!0,this.animationPimVerdePaiToA=!1,this.pimVerdePai.onIce=!0,this.pimVerdePai.position="B"),this.ice.pim_verde_filho&&(this.animationPimVerdeFilhoToB=!0,this.animationPimVerdeFilhoToA=!1,this.pimVerdeFilho.onIce=!0,this.pimVerdeFilho.position="B"),this.ice.pim_vermelho_pai&&(this.animationPimVermelhoPaiToB=!0,this.animationPimVermelhoPaiToA=!1,this.pimVermelhoPai.onIce=!0,this.pimVermelhoPai.position="B"),this.ice.pim_vermelho_filho&&(this.animationPimVermelhoFilhoToB=!0,this.animationPimVermelhoFilhoToA=!1,this.pimVermelhoFilho.onIce=!0,this.pimVermelhoFilho.position="B")))},pimPaiAzul(){this.clicks=this.clicks+1;const i=document.getElementById("pim_azul_pai");console.log(window.getComputedStyle(i).top+window.getComputedStyle(i).right);const e="350px"===window.getComputedStyle(i).top&&"150px"===window.getComputedStyle(i).right,t="360px"===window.getComputedStyle(i).top&&"270px"===window.getComputedStyle(i).right,o="350px"===window.getComputedStyle(i).top&&"650px"===window.getComputedStyle(i).right,l="330px"===window.getComputedStyle(i).top&&"750px"===window.getComputedStyle(i).right;if(e&&"B"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimAzulPaiToB=!1,this.animationPimAzulPaiToA=!1;let e=360,t=270;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="1",this.ice.pim_azul_pai=!0,this.placeA.pim_azul_pai=!1,this.placeB.pim_azul_pai=!1}if(t){this.animationPimAzulPaiToB=!1,this.animationPimAzulPaiToA=!1;let e=350,t=150;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="0",i.style.transform="scaleX(1)",this.ice.pim_azul_pai=!1,this.pimAzulPai.position="B",this.placeA.pim_azul_pai=!1,this.placeB.pim_azul_pai=!0}if(o){this.animationPimAzulPaiToB=!1,this.animationPimAzulPaiToA=!1;let e=330,t=750;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="0",i.style.transform="scaleX(-1)",this.ice.pim_azul_pai=!1,this.pimAzulPai.position="A",this.placeA.pim_azul_pai=!0,this.placeB.pim_azul_pai=!1}if(l&&"A"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimAzulPaiToB=!1,this.animationPimAzulPaiToA=!1;let e=350,t=650;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="1",this.ice.pim_azul_pai=!0,this.placeA.pim_azul_pai=!1,this.placeB.pim_azul_pai=!1}},pimFilhoAzul(){this.clicks=this.clicks+1;const i=document.getElementById("pim_azul_filho");console.log(window.getComputedStyle(i).top+window.getComputedStyle(i).right);const e="400px"===window.getComputedStyle(i).top&&"150px"===window.getComputedStyle(i).right,t="410px"===window.getComputedStyle(i).top&&"260px"===window.getComputedStyle(i).right,o="400px"===window.getComputedStyle(i).top&&"640px"===window.getComputedStyle(i).right,l="380px"===window.getComputedStyle(i).top&&"750px"===window.getComputedStyle(i).right;if(e&&"B"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimAzulFilhoToB=!1,this.animationPimAzulFilhoToA=!1;let e=410,t=260;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="1",this.ice.pim_azul_filho=!0,this.placeA.pim_azul_filho=!1,this.placeB.pim_azul_filho=!1}if(t){this.animationPimAzulFilhoToB=!1,this.animationPimAzulFilhoToA=!1;let e=400,t=150;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="1",i.style.transform="scaleX(1)",this.ice.pim_azul_filho=!1,this.pimAzulFilho.position="B",this.placeA.pim_azul_filho=!1,this.placeB.pim_azul_filho=!0}if(o){this.animationPimAzulFilhoToB=!1,this.animationPimAzulFilhoToA=!1;let e=380,t=750;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="0",i.style.transform="scaleX(-1)",this.ice.pim_azul_filho=!1,this.pimAzulFilho.position="A",this.pimAzulFilho.position="A",this.placeA.pim_azul_filho=!0,this.placeB.pim_azul_filho=!1}if(l&&"A"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimAzulFilhoToB=!1,this.animationPimAzulFilhoToA=!1;let e=400,t=640;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="1",this.ice.pim_azul_filho=!0,this.placeA.pim_azul_filho=!1,this.placeB.pim_azul_filho=!1}},pimPaiVerde(){this.clicks=this.clicks+1;const i=document.getElementById("pim_verde_pai");console.log(window.getComputedStyle(i).top+window.getComputedStyle(i).right);const e="390px"===window.getComputedStyle(i).top&&"80px"===window.getComputedStyle(i).right,t="400px"===window.getComputedStyle(i).top&&("230px"===window.getComputedStyle(i).right||"280px"===window.getComputedStyle(i).right),o="390px"===window.getComputedStyle(i).top&&("610px"===window.getComputedStyle(i).right||"660px"===window.getComputedStyle(i).right),l="370px"===window.getComputedStyle(i).top&&"780px"===window.getComputedStyle(i).right;if(e&&"B"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimVerdePaiToB=!1,this.animationPimVerdePaiToA=!1;let e=400,t=230;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="2",this.ice.pim_verde_pai=!0,this.placeA.pim_verde_pai=!1,this.placeB.pim_verde_pai=!1}if(t){this.animationPimVerdePaiToB=!1,this.animationPimVerdePaiToA=!1;let e=390,t=80;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="0",i.style.transform="scaleX(1)",this.ice.pim_verde_pai=!1,this.pimVerdePai.position="B",this.placeA.pim_verde_pai=!1,this.placeB.pim_verde_pai=!0}if(o){this.animationPimVerdePaiToB=!1,this.animationPimVerdePaiToA=!1;let e=370,t=780;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="0",i.style.transform="scaleX(-1)",this.ice.pim_verde_pai=!1,this.pimVerdePai.position="A",this.placeA.pim_verde_pai=!0,this.placeB.pim_verde_pai=!1}if(l&&"A"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimVerdePaiToB=!1,this.animationPimVerdePaiToA=!1;let e=390,t=660;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="2",this.ice.pim_verde_pai=!0,this.placeA.pim_verde_pai=!1,this.placeB.pim_verde_pai=!1}},pimFilhoVerde(){this.clicks=this.clicks+1;const i=document.getElementById("pim_verde_filho");console.log(window.getComputedStyle(i).top+window.getComputedStyle(i).right);const e="430px"===window.getComputedStyle(i).top&&"90px"===window.getComputedStyle(i).right,t="440px"===window.getComputedStyle(i).top&&"240px"===window.getComputedStyle(i).right,o="430px"===window.getComputedStyle(i).top&&("620px"===window.getComputedStyle(i).right||"640px"===window.getComputedStyle(i).right),l="420px"===window.getComputedStyle(i).top&&"770px"===window.getComputedStyle(i).right;if(e&&"B"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimVerdeFilhoToB=!1,this.animationPimVerdeFilhoToA=!1;let e=440,t=240;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="2",this.ice.pim_verde_filho=!0,this.placeA.pim_verde_filho=!1,this.placeB.pim_verde_filho=!1}if(t){this.animationPimVerdeFilhoToB=!1,this.animationPimVerdeFilhoToA=!1;let e=430,t=90;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="2",i.style.transform="scaleX(1)",this.ice.pim_verde_filho=!1,this.pimVerdeFilho.position="B",this.placeA.pim_verde_filho=!1,this.placeB.pim_verde_filho=!0}if(o){this.animationPimVerdeFilhoToB=!1,this.animationPimVerdeFilhoToA=!1;let e=420,t=770;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="0",i.style.transform="scaleX(-1)",this.ice.pim_verde_filho=!1,this.pimVerdeFilho.position="A",this.placeA.pim_verde_filho=!0,this.placeB.pim_verde_filho=!1}if(l&&"A"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimVerdeFilhoToB=!1,this.animationPimVerdeFilhoToA=!1;let e=430,t=640;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="2",this.ice.pim_verde_filho=!0,this.placeA.pim_verde_filho=!1,this.placeB.pim_verde_filho=!1}},pimPaiVermelho(){this.clicks=this.clicks+1;const i=document.getElementById("pim_vermelho_pai");console.log(window.getComputedStyle(i).top+window.getComputedStyle(i).right);const e="420px"===window.getComputedStyle(i).top&&"30px"===window.getComputedStyle(i).right,t="430px"===window.getComputedStyle(i).top&&("200px"===window.getComputedStyle(i).right||"280px"===window.getComputedStyle(i).right),o="420px"===window.getComputedStyle(i).top&&("650px"===window.getComputedStyle(i).right||"600px"===window.getComputedStyle(i).right),l="420px"===window.getComputedStyle(i).top&&"830px"===window.getComputedStyle(i).right;if(e&&"B"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimVermelhoPaiToB=!1,this.animationPimVermelhoPaiToA=!1;let e=430,t=200;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="3",this.ice.pim_vermelho_pai=!0,this.placeA.pim_vermelho_pai=!1,this.placeB.pim_vermelho_pai=!1}if(t){this.animationPimVermelhoPaiToB=!1,this.animationPimVermelhoPaiToA=!1;let e=420,t=30;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="0",i.style.transform="scaleX(1)",this.ice.pim_vermelho_pai=!1,this.pimVermelhoPai.position="B",this.placeA.pim_vermelho_pai=!1,this.placeB.pim_vermelho_pai=!0}if(o){this.animationPimVermelhoPaiToB=!1,this.animationPimVermelhoPaiToA=!1;let e=420,t=830;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="0",i.style.transform="scaleX(-1)",this.ice.pim_vermelho_pai=!1,this.pimVermelhoPai.position="A",this.placeA.pim_vermelho_pai=!0,this.placeB.pim_vermelho_pai=!1}if(l&&"A"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimVermelhoPaiToB=!1,this.animationPimVermelhoPaiToA=!1;let e=420,t=650;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="3",this.ice.pim_vermelho_pai=!0,this.placeA.pim_vermelho_pai=!1,this.placeB.pim_vermelho_pai=!1}},pimFilhoVermelho(){this.clicks=this.clicks+1;const i=document.getElementById("pim_vermelho_filho");console.log(window.getComputedStyle(i).top+window.getComputedStyle(i).right);const e="460px"===window.getComputedStyle(i).top&&"40px"===window.getComputedStyle(i).right,t="470px"===window.getComputedStyle(i).top&&("210px"===window.getComputedStyle(i).right||"240px"===window.getComputedStyle(i).right),o="460px"===window.getComputedStyle(i).top&&("600px"===window.getComputedStyle(i).right||"640px"===window.getComputedStyle(i).right),l="460px"===window.getComputedStyle(i).top&&"820px"===window.getComputedStyle(i).right;if(e&&"B"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimVermelhoFilhoToB=!1,this.animationPimVermelhoFilhoToA=!1;let e=470,t=210;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="3",this.ice.pim_vermelho_filho=!0,this.placeA.pim_vermelho_filho=!1,this.placeB.pim_vermelho_filho=!1}if(t){this.animationPimVermelhoFilhoToB=!1,this.animationPimVermelhoFilhoToA=!1;let e=460,t=40;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="3",i.style.transform="scaleX(1)",this.ice.pim_vermelho_filho=!1,this.pimVermelhoFilho.position="B",this.placeA.pim_vermelho_filho=!1,this.placeB.pim_vermelho_filho=!0}if(o){this.animationPimVermelhoFilhoToB=!1,this.animationPimVermelhoFilhoToA=!1;let e=460,t=820;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="0",i.style.transform="scaleX(-1)",this.ice.pim_vermelho_filho=!1,this.pimVermelhoFilho.position="A",this.placeA.pim_vermelho_filho=!0,this.placeB.pim_vermelho_filho=!1}if(l&&"A"===this.ice.position&&this.checkPimOnIce()<2){this.animationPimVermelhoFilhoToB=!1,this.animationPimVermelhoFilhoToA=!1;let e=460,t=640;i.style.top=e+"px",i.style.right=t+"px",i.style.zIndex="3",this.ice.pim_vermelho_filho=!0,this.placeA.pim_vermelho_filho=!1,this.placeB.pim_vermelho_filho=!1}},replayGame(){this.$router.go(),this.failStatus=!1}},data(){const i={qts:0,position:"B",pim_azul_pai:!1,pim_azul_filho:!1,pim_verde_pai:!1,pim_verde_filho:!1,pim_vermelho_pai:!1,pim_vermelho_filho:!1},e={pim_azul_pai:!1,pim_azul_filho:!1,pim_verde_pai:!1,pim_verde_filho:!1,pim_vermelho_pai:!1,pim_vermelho_filho:!1},t={pim_azul_pai:!0,pim_azul_filho:!0,pim_verde_pai:!0,pim_verde_filho:!0,pim_vermelho_pai:!0,pim_vermelho_filho:!0},o={onIce:!1,position:"B"},l={onIce:!1,position:"B"},m={onIce:!1,position:"B"},p={onIce:!1,position:"B"},a={onIce:!1,position:"B"},h={onIce:!1,position:"B"},n=!1,s=!1,r=0,d=0,c=[[1,0,0],[1,0,1],[1,1,0]];return{ice:i,animationIceToA:!1,animationIceToB:!1,placeA:e,placeB:t,pimAzulPai:o,pimAzulFilho:l,animationPimAzulPaiToA:!1,animationPimAzulPaiToB:!1,animationPimAzulFilhoToA:!1,animationPimAzulFilhoToB:!1,pimVerdePai:m,pimVerdeFilho:p,animationPimVerdePaiToA:!1,animationPimVerdePaiToB:!1,animationPimVerdeFilhoToA:!1,animationPimVerdeFilhoToB:!1,pimVermelhoPai:a,pimVermelhoFilho:h,animationPimVermelhoPaiToA:!1,animationPimVermelhoPaiToB:!1,animationPimVermelhoFilhoToA:!1,animationPimVermelhoFilhoToB:!1,failStatus:n,winnerStatus:s,clicks:r,tempo:d,map:c}}});var r=t(1639),d=t(1967),c=t(9885),_=t(9984),u=t.n(_);const P=(0,r.Z)(s,[["render",a],["__scopeId","data-v-37f56ead"]]),y=P;u()(s,"components",{QLayout:d.Z,QPage:c.Z})}}]);