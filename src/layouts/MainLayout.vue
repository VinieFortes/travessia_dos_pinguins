<template>
  <q-layout id="full">
    <q-page id="body">
      <div class="flex column">
        <span style="font-family: Snow,serif; font-size: 20px">Clicks: {{clicks}}</span>
      </div>
      <div @click="moveIce" id="ice" :class="{iceAnimationBtoA: animationIceToA, iceAnimationAtoB: animationIceToB}"></div>
      <div @click="pimPaiAzul" id="pim_azul_pai" :class="{pimPaiAzulAnimationBtoA: animationPimAzulPaiToA, pimPaiAzulAnimationAtoB: animationPimAzulPaiToB}"></div>
      <div @click="pimPaiVerde" id="pim_verde_pai" :class="{pimPaiVerdeAnimationBtoA: animationPimVerdePaiToA, pimPaiVerdeAnimationAtoB: animationPimVerdePaiToB}"></div>
      <div @click="pimPaiVermelho" id="pim_vermelho_pai" :class="{pimPaiVermelhoAnimationBtoA: animationPimVermelhoPaiToA, pimPaiVermelhoAnimationAtoB: animationPimVermelhoPaiToB}"></div>
      <div @click="pimFilhoAzul" id="pim_azul_filho" :class="{pimFilhoAzulAnimationBtoA: animationPimAzulFilhoToA, pimFilhoAzulAnimationAtoB: animationPimAzulFilhoToB}"></div>
      <div @click="pimFilhoVerde" id="pim_verde_filho" :class="{pimFilhoVerdeAnimationBtoA: animationPimVerdeFilhoToA, pimFilhoVerdeAnimationAtoB: animationPimVerdeFilhoToB}"></div>
      <div @click="pimFilhoVermelho" id="pim_vermelho_filho" :class="{pimFilhoVermelhoAnimationBtoA: animationPimVermelhoFilhoToA, pimFilhoVermelhoAnimationAtoB: animationPimVermelhoFilhoToB}"></div>
    </q-page>
    <Fail id="fail" :show-dialog="failStatus" @replay="replayGame"/>
    <Winner id="winner" :show-dialog="winnerStatus" @replay="replayGame"/>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import Fail from "components/Fail";
import Winner from "components/Winner";

export default defineComponent({
  name: 'MainLayout',
  components: {Winner, Fail},
  props: ['runIA'],
  watch:{
    iceStatus:{
      handler: function (ice) {
        if(ice.pim_azul_pai && !ice.pim_azul_filho){
          console.log('perdeuuu')
          this.fail();
        }
        if(ice.pim_verde_pai && !ice.pim_verde_filho){
          console.log('perdeuuu')
          this.fail();
        }
        if(ice.pim_vermelho_pai && !ice.pim_vermelho_filho){
          console.log('perdeuuu')
          this.fail();
        }
        if(this.pimAzulPai.position === 'A' && this.pimVerdePai.position === 'A' && this.pimVermelhoPai.position === 'A' && this.pimAzulFilho.position === 'A' && this.pimVerdeFilho.position === 'A' && this.pimVermelhoFilho.position === 'A'){
          console.log('ganhouuuu')
          this.winner();
        }
      },
      deep: true,
    },
    AStatus: {
      handler: function (placeA){
        if(placeA.pim_azul_filho && !placeA.pim_azul_pai){
          console.log('A perdeuuu')
          this.fail();
        }
        if(placeA.pim_verde_filho && !placeA.pim_verde_pai){
          console.log('perdeuuu')
          this.fail();
        }
        if(placeA.pim_vermelho_filho && !placeA.pim_vermelho_pai){
          console.log('perdeuuu')
          this.fail();
        }
      },
      deep: true,
    },
    BStatus: {
      handler: function (placeB){
        if(placeB.pim_azul_filho && !placeB.pim_azul_pai){
          console.log('A perdeuuu')
          this.fail();
        }
        if(placeB.pim_verde_filho && !placeB.pim_verde_pai){
          console.log('perdeuuu')
          this.fail();
        }
        if(placeB.pim_vermelho_filho && !placeB.pim_vermelho_pai){
          console.log('perdeuuu')
          this.fail();
        }
      },
      deep: true,
    }
  },

  computed: {
    iceStatus() {
      return this.ice;
    },
    AStatus(){
      return this.placeA;
    },
    BStatus(){
      return this.placeB;
    }
  },

  mounted() {
    if(this.runIA) {
      this.IAshow()
    }
  },

  methods: {

    IAshow(){
      setTimeout(() => { this.pimFilhoAzul();
        setTimeout(() => { this.pimFilhoVerde();
          setTimeout(() => { this.moveIce();
            setTimeout(() => { this.moveIce();
              setTimeout(() => { this.IAshow();
              }, 1000);
            }, 3000);
          }, 1000);
        }, 1000);
      }, 1000);
    },

    winner(){
      this.winnerStatus = true;
    },

    fail(){
      if(!this.runIA) {
        this.failStatus = true;
      }
    },

    checkPimOnIce(){
      let qts = 0;
      Object.keys(this.ice).forEach((key) =>{
        if(this.ice[key] === true){
          qts++;
        }
      })
      return qts;
    },

    moveIce(){
      this.clicks= this.clicks + 1;
      const ice = document.getElementById('ice');
      const posB = window.getComputedStyle(ice).right === '170px';
      const posA = window.getComputedStyle(ice).right === '555px';
      if(this.ice.pim_verde_pai || this.ice.pim_azul_pai || this.ice.pim_vermelho_pai || this.ice.pim_azul_filho || this.ice.pim_verde_filho || this.ice.pim_vermelho_filho){
        if(posB){
          this.animationIceToA = true;
          this.ice.position = 'A';
          this.animationIceToB = false;

          if(this.ice.pim_azul_pai){
            this.animationPimAzulPaiToA = true;
            this.animationPimAzulPaiToB = false;
            this.pimAzulPai.onIce = true;
          }
          if(this.ice.pim_azul_filho){
            this.animationPimAzulFilhoToA = true;
            this.animationPimAzulFilhoToB = false;
            this.pimAzulFilho.onIce = true;
          }
          if(this.ice.pim_verde_pai){
            this.animationPimVerdePaiToA = true;
            this.animationPimVerdePaiToB = false;
            this.pimVerdePai.onIce = true;
          }
          if(this.ice.pim_verde_filho){
            this.animationPimVerdeFilhoToA = true;
            this.animationPimVerdeFilhoToB = false;
            this.pimVerdeFilho.onIce = true;
          }
          if(this.ice.pim_vermelho_pai){
            this.animationPimVermelhoPaiToA = true;
            this.animationPimVermelhoPaiToB = false;
            this.pimVermelhoPai.onIce = true;
          }
          if(this.ice.pim_vermelho_filho){
            this.animationPimVermelhoFilhoToA = true;
            this.animationPimVermelhoFilhoToB = false;
            this.pimVermelhoFilho.onIce = true;
          }
        }
        if(posA){
          this.animationIceToA = false;
          this.animationIceToB = true;
          this.ice.position = 'B';

          if(this.ice.pim_azul_pai){
            this.animationPimAzulPaiToB = true;
            this.animationPimAzulPaiToA = false;
            this.pimAzulPai.onIce = true;
            this.pimAzulPai.position = 'B';
          }

          if(this.ice.pim_azul_filho){
            this.animationPimAzulFilhoToB = true;
            this.animationPimAzulFilhoToA = false;
            this.pimAzulFilho.onIce = true;
            this.pimAzulFilho.position = 'B';
          }

          if(this.ice.pim_verde_pai){
            this.animationPimVerdePaiToB = true;
            this.animationPimVerdePaiToA = false;
            this.pimVerdePai.onIce = true;
            this.pimVerdePai.position = 'B';
          }

          if(this.ice.pim_verde_filho){
            this.animationPimVerdeFilhoToB = true;
            this.animationPimVerdeFilhoToA = false;
            this.pimVerdeFilho.onIce = true;
            this.pimVerdeFilho.position = 'B';
          }

          if(this.ice.pim_vermelho_pai){
            this.animationPimVermelhoPaiToB = true;
            this.animationPimVermelhoPaiToA = false;
            this.pimVermelhoPai.onIce = true;
            this.pimVermelhoPai.position = 'B';
          }

          if(this.ice.pim_vermelho_filho){
            this.animationPimVermelhoFilhoToB = true;
            this.animationPimVermelhoFilhoToA = false;
            this.pimVermelhoFilho.onIce = true;
            this.pimVermelhoFilho.position = 'B';
          }
        }
      }
    },

    pimPaiAzul(){
     this.clicks= this.clicks + 1;
     const pinPaiAzul = document.getElementById('pim_azul_pai');
     console.log(window.getComputedStyle(pinPaiAzul).top + window.getComputedStyle(pinPaiAzul).right)
     const posB = window.getComputedStyle(pinPaiAzul).top === '350px' && window.getComputedStyle(pinPaiAzul).right === '150px';
     const posIceB = window.getComputedStyle(pinPaiAzul).top === '360px' && window.getComputedStyle(pinPaiAzul).right === '270px';
     const posIceA = window.getComputedStyle(pinPaiAzul).top === '350px' && window.getComputedStyle(pinPaiAzul).right === '650px';
     const posA = window.getComputedStyle(pinPaiAzul).top === '330px' && window.getComputedStyle(pinPaiAzul).right === '750px';
     if (posB){
       // B to Ice
       if(this.ice.position === 'B' && (this.checkPimOnIce() < 2)){
         this.animationPimAzulPaiToB = false;
         this.animationPimAzulPaiToA = false;
         let posTop = 360;
         let posRight = 270;
         pinPaiAzul.style.top = posTop + 'px';
         pinPaiAzul.style.right = posRight + 'px';
         pinPaiAzul.style.zIndex = '1';
         this.ice.pim_azul_pai = true;

         //set position
         this.placeA.pim_azul_pai = false;
         this.placeB.pim_azul_pai = false;
       }
     }
     if(posIceB) {
       // Ice to B
       this.animationPimAzulPaiToB = false;
       this.animationPimAzulPaiToA = false;
       let posTop = 350;
       let posRight = 150;
       pinPaiAzul.style.top = posTop + 'px';
       pinPaiAzul.style.right = posRight + 'px';
       pinPaiAzul.style.zIndex = '0';
       pinPaiAzul.style.transform = 'scaleX(1)';
       this.ice.pim_azul_pai = false;

       // set position
       this.pimAzulPai.position = 'B';
       this.placeA.pim_azul_pai = false;
       this.placeB.pim_azul_pai = true;
     }
     if(posIceA){
       // Ice to A
       this.animationPimAzulPaiToB = false;
       this.animationPimAzulPaiToA = false;
       let posTop = 330;
       let posRight = 750;
       pinPaiAzul.style.top = posTop + 'px';
       pinPaiAzul.style.right = posRight + 'px';
       pinPaiAzul.style.zIndex = '0';
       pinPaiAzul.style.transform = 'scaleX(-1)';
       this.ice.pim_azul_pai = false;

       // set position
       this.pimAzulPai.position = 'A';
       this.placeA.pim_azul_pai = true;
       this.placeB.pim_azul_pai = false;
     }
      if (posA){
        // A to Ice
        if(this.ice.position === 'A'  && (this.checkPimOnIce() < 2)){
          this.animationPimAzulPaiToB = false;
          this.animationPimAzulPaiToA = false;
          let posTop = 350;
          let posRight = 650;
          pinPaiAzul.style.top = posTop + 'px';
          pinPaiAzul.style.right = posRight + 'px';
          pinPaiAzul.style.zIndex = '1';
          this.ice.pim_azul_pai = true;

          //set position
          this.placeA.pim_azul_pai = false;
          this.placeB.pim_azul_pai = false;
        }
      }
    },
    pimFilhoAzul() {
      this.clicks= this.clicks + 1;
      const pinFilhoAzul = document.getElementById ('pim_azul_filho');
      console.log (window.getComputedStyle (pinFilhoAzul).top + window.getComputedStyle (pinFilhoAzul).right)
      const posB = window.getComputedStyle (pinFilhoAzul).top === '400px' && window.getComputedStyle (pinFilhoAzul).right === '150px';
      const posIceB = window.getComputedStyle (pinFilhoAzul).top === '410px' && window.getComputedStyle (pinFilhoAzul).right === '260px';
      const posIceA = window.getComputedStyle (pinFilhoAzul).top === '400px' && window.getComputedStyle (pinFilhoAzul).right === '640px';
      const posA = window.getComputedStyle (pinFilhoAzul).top === '380px' && window.getComputedStyle (pinFilhoAzul).right === '750px';
      if (posB) {
        // B to Ice
        if(this.ice.position === 'B'  && (this.checkPimOnIce() < 2)) {
          this.animationPimAzulFilhoToB = false;
          this.animationPimAzulFilhoToA = false;
          let posTop = 410;
          let posRight = 260;
          pinFilhoAzul.style.top = posTop + 'px';
          pinFilhoAzul.style.right = posRight + 'px';
          pinFilhoAzul.style.zIndex = '1';
          this.ice.pim_azul_filho = true;

          //set position
          this.placeA.pim_azul_filho = false;
          this.placeB.pim_azul_filho = false;
        }
      }
      if (posIceB) {
        // Ice to B
        this.animationPimAzulFilhoToB = false;
        this.animationPimAzulFilhoToA = false;
        let posTop = 400;
        let posRight = 150;
        pinFilhoAzul.style.top = posTop + 'px';
        pinFilhoAzul.style.right = posRight + 'px';
        pinFilhoAzul.style.zIndex = '1';
        pinFilhoAzul.style.transform = 'scaleX(1)';
        this.ice.pim_azul_filho = false;

        // set position
        this.pimAzulFilho.position = 'B';
        this.placeA.pim_azul_filho = false;
        this.placeB.pim_azul_filho = true;
      }
      if (posIceA) {
        // Ice to A
        this.animationPimAzulFilhoToB = false;
        this.animationPimAzulFilhoToA = false;
        let posTop = 380;
        let posRight = 750;
        pinFilhoAzul.style.top = posTop + 'px';
        pinFilhoAzul.style.right = posRight + 'px';
        pinFilhoAzul.style.zIndex = '0';
        pinFilhoAzul.style.transform = 'scaleX(-1)';
        this.ice.pim_azul_filho = false;
        this.pimAzulFilho.position = 'A';

        // set position
        this.pimAzulFilho.position = 'A';
        this.placeA.pim_azul_filho = true;
        this.placeB.pim_azul_filho = false;
      }
      if (posA) {
        // A to Ice
        if (this.ice.position === 'A'  && (this.checkPimOnIce() < 2)) {
          this.animationPimAzulFilhoToB = false;
          this.animationPimAzulFilhoToA = false;
          let posTop = 400;
          let posRight = 640;
          pinFilhoAzul.style.top = posTop + 'px';
          pinFilhoAzul.style.right = posRight + 'px';
          pinFilhoAzul.style.zIndex = '1';
          this.ice.pim_azul_filho = true;

          //set position
          this.placeA.pim_azul_filho = false;
          this.placeB.pim_azul_filho = false;
        }
      }
    },

    pimPaiVerde(){
      this.clicks= this.clicks + 1;
      const pinPaiVerde = document.getElementById('pim_verde_pai');
      console.log(window.getComputedStyle(pinPaiVerde).top + window.getComputedStyle(pinPaiVerde).right)
      const posB = window.getComputedStyle(pinPaiVerde).top === '390px' && window.getComputedStyle(pinPaiVerde).right === '80px';
      const posIceB = window.getComputedStyle(pinPaiVerde).top === '400px' && (window.getComputedStyle(pinPaiVerde).right === '230px' || window.getComputedStyle(pinPaiVerde).right === '280px');
      const posIceA = window.getComputedStyle(pinPaiVerde).top === '390px' && (window.getComputedStyle(pinPaiVerde).right === '610px' || window.getComputedStyle(pinPaiVerde).right === '660px');
      const posA = window.getComputedStyle(pinPaiVerde).top === '370px' && window.getComputedStyle(pinPaiVerde).right === '780px';
      if (posB){
        // B to Ice
        if(this.ice.position === 'B'  && (this.checkPimOnIce() < 2)){
          this.animationPimVerdePaiToB = false;
          this.animationPimVerdePaiToA = false;
          let posTop = 400;
          let posRight = 230;
          pinPaiVerde.style.top = posTop + 'px';
          pinPaiVerde.style.right = posRight + 'px';
          pinPaiVerde.style.zIndex = '2';
          this.ice.pim_verde_pai = true;

          //set position
          this.placeA.pim_verde_pai = false;
          this.placeB.pim_verde_pai = false;
        }
      }
      if(posIceB) {
        // Ice to B
        this.animationPimVerdePaiToB = false;
        this.animationPimVerdePaiToA = false;
        let posTop = 390;
        let posRight = 80;
        pinPaiVerde.style.top = posTop + 'px';
        pinPaiVerde.style.right = posRight + 'px';
        pinPaiVerde.style.zIndex = '0';
        pinPaiVerde.style.transform = 'scaleX(1)';
        this.ice.pim_verde_pai = false;

        // set position
        this.pimVerdePai.position = 'B';
        this.placeA.pim_verde_pai = false;
        this.placeB.pim_verde_pai = true;
      }
      if(posIceA){
        // Ice to A
        this.animationPimVerdePaiToB = false;
        this.animationPimVerdePaiToA = false;
        let posTop = 370;
        let posRight = 780;
        pinPaiVerde.style.top = posTop + 'px';
        pinPaiVerde.style.right = posRight + 'px';
        pinPaiVerde.style.zIndex = '0';
        pinPaiVerde.style.transform = 'scaleX(-1)';
        this.ice.pim_verde_pai = false;

        // set position
        this.pimVerdePai.position = 'A';
        this.placeA.pim_verde_pai = true;
        this.placeB.pim_verde_pai = false;
      }
      if (posA){
        // A to Ice
        if(this.ice.position === 'A'  && (this.checkPimOnIce() < 2)){
          this.animationPimVerdePaiToB = false;
          this.animationPimVerdePaiToA = false;
          let posTop = 390;
          let posRight = 660;
          pinPaiVerde.style.top = posTop + 'px';
          pinPaiVerde.style.right = posRight + 'px';
          pinPaiVerde.style.zIndex = '2';
          this.ice.pim_verde_pai = true;

          //set position
          this.placeA.pim_verde_pai = false;
          this.placeB.pim_verde_pai = false;
        }
      }
    },
    pimFilhoVerde(){
      this.clicks= this.clicks + 1;
      const pinFilhoVerde = document.getElementById ('pim_verde_filho');
      console.log (window.getComputedStyle (pinFilhoVerde).top + window.getComputedStyle (pinFilhoVerde).right)
      const posB = window.getComputedStyle (pinFilhoVerde).top === '430px' && window.getComputedStyle (pinFilhoVerde).right === '90px';
      const posIceB = window.getComputedStyle (pinFilhoVerde).top === '440px' && window.getComputedStyle (pinFilhoVerde).right === '240px';
      const posIceA = window.getComputedStyle (pinFilhoVerde).top === '430px' && (window.getComputedStyle (pinFilhoVerde).right === '620px' || window.getComputedStyle (pinFilhoVerde).right === '640px');
      const posA = window.getComputedStyle (pinFilhoVerde).top === '420px' && window.getComputedStyle (pinFilhoVerde).right === '770px';
      if (posB) {
        // B to Ice
        if(this.ice.position === 'B'  && (this.checkPimOnIce() < 2)) {
          this.animationPimVerdeFilhoToB = false;
          this.animationPimVerdeFilhoToA = false;
          let posTop = 440;
          let posRight = 240;
          pinFilhoVerde.style.top = posTop + 'px';
          pinFilhoVerde.style.right = posRight + 'px';
          pinFilhoVerde.style.zIndex = '2';
          this.ice.pim_verde_filho = true;

          //set position
          this.placeA.pim_verde_filho = false;
          this.placeB.pim_verde_filho = false;
        }
      }
      if (posIceB) {
        // Ice to B
        this.animationPimVerdeFilhoToB = false;
        this.animationPimVerdeFilhoToA = false;
        let posTop = 430;
        let posRight = 90;
        pinFilhoVerde.style.top = posTop + 'px';
        pinFilhoVerde.style.right = posRight + 'px';
        pinFilhoVerde.style.zIndex = '2';
        pinFilhoVerde.style.transform = 'scaleX(1)';
        this.ice.pim_verde_filho = false;

        // set position
        this.pimVerdeFilho.position = 'B';
        this.placeA.pim_verde_filho = false;
        this.placeB.pim_verde_filho = true;
      }
      if (posIceA) {
        // Ice to A
        this.animationPimVerdeFilhoToB = false;
        this.animationPimVerdeFilhoToA = false;
        let posTop = 420;
        let posRight = 770;
        pinFilhoVerde.style.top = posTop + 'px';
        pinFilhoVerde.style.right = posRight + 'px';
        pinFilhoVerde.style.zIndex = '0';
        pinFilhoVerde.style.transform = 'scaleX(-1)';
        this.ice.pim_verde_filho = false;

        // set position
        this.pimVerdeFilho.position = 'A';
        this.placeA.pim_verde_filho = true;
        this.placeB.pim_verde_filho = false;
      }
      if (posA) {
        // A to Ice
        if (this.ice.position === 'A'  && (this.checkPimOnIce() < 2)) {
          this.animationPimVerdeFilhoToB = false;
          this.animationPimVerdeFilhoToA = false;
          let posTop = 430;
          let posRight = 640;
          pinFilhoVerde.style.top = posTop + 'px';
          pinFilhoVerde.style.right = posRight + 'px';
          pinFilhoVerde.style.zIndex = '2';
          this.ice.pim_verde_filho = true;

          //set position
          this.placeA.pim_verde_filho = false;
          this.placeB.pim_verde_filho = false;
        }
      }
    },
    pimPaiVermelho(){
      this.clicks= this.clicks + 1;
      const pinPaiVermelho = document.getElementById('pim_vermelho_pai');
      console.log(window.getComputedStyle(pinPaiVermelho).top + window.getComputedStyle(pinPaiVermelho).right)
      const posB = window.getComputedStyle(pinPaiVermelho).top === '420px' && window.getComputedStyle(pinPaiVermelho).right === '30px';
      const posIceB = window.getComputedStyle(pinPaiVermelho).top === '430px' && (window.getComputedStyle(pinPaiVermelho).right === '200px' || window.getComputedStyle(pinPaiVermelho).right === '280px');
      const posIceA = window.getComputedStyle(pinPaiVermelho).top === '420px' && (window.getComputedStyle(pinPaiVermelho).right === '650px' || window.getComputedStyle(pinPaiVermelho).right === '600px');
      const posA = window.getComputedStyle(pinPaiVermelho).top === '420px' && window.getComputedStyle(pinPaiVermelho).right === '830px';
      if (posB){
        // B to Ice
        if(this.ice.position === 'B'  && (this.checkPimOnIce() < 2)){
          this.animationPimVermelhoPaiToB = false;
          this.animationPimVermelhoPaiToA = false;
          let posTop = 430;
          let posRight = 200;
          pinPaiVermelho.style.top = posTop + 'px';
          pinPaiVermelho.style.right = posRight + 'px';
          pinPaiVermelho.style.zIndex = '3';
          this.ice.pim_vermelho_pai = true;

          //set position
          this.placeA.pim_vermelho_pai = false;
          this.placeB.pim_vermelho_pai = false;
        }
      }
      if(posIceB) {
        // Ice to B
        this.animationPimVermelhoPaiToB = false;
        this.animationPimVermelhoPaiToA = false;
        let posTop = 420;
        let posRight = 30;
        pinPaiVermelho.style.top = posTop + 'px';
        pinPaiVermelho.style.right = posRight + 'px';
        pinPaiVermelho.style.zIndex = '0';
        pinPaiVermelho.style.transform = 'scaleX(1)';
        this.ice.pim_vermelho_pai = false;

        // set position
        this.pimVermelhoPai.position = 'B';
        this.placeA.pim_vermelho_pai = false;
        this.placeB.pim_vermelho_pai = true;
      }
      if(posIceA){
        // Ice to A
        this.animationPimVermelhoPaiToB = false;
        this.animationPimVermelhoPaiToA = false;
        let posTop = 420;
        let posRight = 830;
        pinPaiVermelho.style.top = posTop + 'px';
        pinPaiVermelho.style.right = posRight + 'px';
        pinPaiVermelho.style.zIndex = '0';
        pinPaiVermelho.style.transform = 'scaleX(-1)';
        this.ice.pim_vermelho_pai = false;

        // set position
        this.pimVermelhoPai.position = 'A';
        this.placeA.pim_vermelho_pai = true;
        this.placeB.pim_vermelho_pai = false;
      }
      if (posA){
        // A to Ice
        if(this.ice.position === 'A'  && (this.checkPimOnIce() < 2)){
          this.animationPimVermelhoPaiToB = false;
          this.animationPimVermelhoPaiToA = false;
          let posTop = 420;
          let posRight = 650;
          pinPaiVermelho.style.top = posTop + 'px';
          pinPaiVermelho.style.right = posRight + 'px';
          pinPaiVermelho.style.zIndex = '3';
          this.ice.pim_vermelho_pai = true;

          //set position
          this.placeA.pim_vermelho_pai = false;
          this.placeB.pim_vermelho_pai = false;
        }
      }
    },
    pimFilhoVermelho(){
      this.clicks= this.clicks + 1;
      const pinFilhoVermelho = document.getElementById ('pim_vermelho_filho');
      console.log (window.getComputedStyle (pinFilhoVermelho).top + window.getComputedStyle (pinFilhoVermelho).right)
      const posB = window.getComputedStyle (pinFilhoVermelho).top === '460px' && window.getComputedStyle (pinFilhoVermelho).right === '40px';
      const posIceB = window.getComputedStyle (pinFilhoVermelho).top === '470px' && (window.getComputedStyle (pinFilhoVermelho).right === '210px' || window.getComputedStyle (pinFilhoVermelho).right === '240px');
      const posIceA = window.getComputedStyle (pinFilhoVermelho).top === '460px' && (window.getComputedStyle (pinFilhoVermelho).right === '600px' || window.getComputedStyle (pinFilhoVermelho).right === '640px');
      const posA = window.getComputedStyle (pinFilhoVermelho).top === '460px' && window.getComputedStyle (pinFilhoVermelho).right === '820px';
      if (posB) {
        // B to Ice
        if(this.ice.position === 'B'  && (this.checkPimOnIce() < 2)) {
          this.animationPimVermelhoFilhoToB = false;
          this.animationPimVermelhoFilhoToA = false;
          let posTop = 470;
          let posRight = 210;
          pinFilhoVermelho.style.top = posTop + 'px';
          pinFilhoVermelho.style.right = posRight + 'px';
          pinFilhoVermelho.style.zIndex = '3';
          this.ice.pim_vermelho_filho = true;

          //set position
          this.placeA.pim_vermelho_filho = false;
          this.placeB.pim_vermelho_filho = false;
        }
      }
      if (posIceB) {
        // Ice to B
        this.animationPimVermelhoFilhoToB = false;
        this.animationPimVermelhoFilhoToA = false;
        let posTop = 460;
        let posRight = 40;
        pinFilhoVermelho.style.top = posTop + 'px';
        pinFilhoVermelho.style.right = posRight + 'px';
        pinFilhoVermelho.style.zIndex = '3';
        pinFilhoVermelho.style.transform = 'scaleX(1)';
        this.ice.pim_vermelho_filho = false;

        // set position
        this.pimVermelhoFilho.position = 'B';
        this.placeA.pim_vermelho_filho = false;
        this.placeB.pim_vermelho_filho = true;
      }
      if (posIceA) {
        // Ice to A
        this.animationPimVermelhoFilhoToB = false;
        this.animationPimVermelhoFilhoToA = false;
        let posTop = 460;
        let posRight = 820;
        pinFilhoVermelho.style.top = posTop + 'px';
        pinFilhoVermelho.style.right = posRight + 'px';
        pinFilhoVermelho.style.zIndex = '0';
        pinFilhoVermelho.style.transform = 'scaleX(-1)';
        this.ice.pim_vermelho_filho = false;

        // set position
        this.pimVermelhoFilho.position = 'A';
        this.placeA.pim_vermelho_filho = true;
        this.placeB.pim_vermelho_filho = false;
      }
      if (posA) {
        // A to Ice
        if (this.ice.position === 'A'  && (this.checkPimOnIce() < 2)) {
          this.animationPimVermelhoFilhoToB = false;
          this.animationPimVermelhoFilhoToA = false;
          let posTop = 460;
          let posRight = 640;
          pinFilhoVermelho.style.top = posTop + 'px';
          pinFilhoVermelho.style.right = posRight + 'px';
          pinFilhoVermelho.style.zIndex = '3';
          this.ice.pim_vermelho_filho = true;

          //set position
          this.placeA.pim_vermelho_filho = false;
          this.placeB.pim_vermelho_filho = false;
        }
      }
    },
    replayGame(){
      this.$router.go()
      this.failStatus = false;
    },
  },

  data(){
    const ice = {qts: 0, position: 'B', pim_azul_pai: false, pim_azul_filho: false, pim_verde_pai: false, pim_verde_filho: false, pim_vermelho_pai: false, pim_vermelho_filho: false};
    const placeA = {pim_azul_pai: false, pim_azul_filho: false, pim_verde_pai: false, pim_verde_filho: false, pim_vermelho_pai: false, pim_vermelho_filho: false};
    const placeB = {pim_azul_pai: true, pim_azul_filho: true, pim_verde_pai: true, pim_verde_filho: true, pim_vermelho_pai: true, pim_vermelho_filho: true};
    const pimAzulPai = {onIce: false, position: 'B'};
    const pimAzulFilho = {onIce: false, position: 'B'};
    const pimVerdePai = {onIce: false, position: 'B'};
    const pimVerdeFilho = {onIce: false, position: 'B'};
    const pimVermelhoPai = {onIce: false, position: 'B'};
    const pimVermelhoFilho = {onIce: false, position: 'B'};
    const failStatus = false;
    const winnerStatus = false;
    const clicks = 0;
    const tempo = 0;
    return{
      ice: ice,
      animationIceToA: false,
      animationIceToB: false,

      placeA: placeA,
      placeB: placeB,

      pimAzulPai: pimAzulPai,
      pimAzulFilho: pimAzulFilho,
      animationPimAzulPaiToA: false,
      animationPimAzulPaiToB: false,
      animationPimAzulFilhoToA: false,
      animationPimAzulFilhoToB: false,

      pimVerdePai: pimVerdePai,
      pimVerdeFilho: pimVerdeFilho,
      animationPimVerdePaiToA: false,
      animationPimVerdePaiToB: false,
      animationPimVerdeFilhoToA: false,
      animationPimVerdeFilhoToB: false,

      pimVermelhoPai: pimVermelhoPai,
      pimVermelhoFilho: pimVermelhoFilho,
      animationPimVermelhoPaiToA: false,
      animationPimVermelhoPaiToB: false,
      animationPimVermelhoFilhoToA: false,
      animationPimVermelhoFilhoToB: false,

      failStatus: failStatus,
      winnerStatus: winnerStatus,
      clicks: clicks,
      tempo: tempo
    }
  }

})
</script>

<style scoped>
#full{
  background-color: #3291d5;
}
#body{
  background-image: url("src/assets/background.jpg");
  background-repeat: no-repeat;
  width: 998px;
  height: 701px;
  margin: 0 auto;
}
#ice{
  background-image: url("src/assets/ice.png");
  width: 200px;
  height: 110px;
  position: absolute;
  top: 465px;
  cursor: pointer;
  right: 170px;
  border: transparent solid 0;
}

.iceAnimationBtoA{
  animation: iceBtoA 3s forwards;
}

.iceAnimationAtoB{
  animation: iceAtoB 3s forwards;
}

#ice:hover {
  -webkit-filter: drop-shadow(2px 2px 0 wheat) drop-shadow(-2px -2px 0 wheat);
  filter: drop-shadow(2px 2px 0 wheat) drop-shadow(-2px -2px 0 wheat);
}

@keyframes iceBtoA {
  from {right: 170px; top: 465px}
  to {right: 555px; top: 450px}
}

@keyframes iceAtoB {
  from {right: 555px; top: 450px}
  to {right: 170px; top: 465px}
}

#pim_azul_pai{
  background-image: url("src/assets/pim_azul.png");
  width: 120px;
  height: 140px;
  cursor: pointer;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  top: 350px;
  right: 150px;
}
#pim_azul_pai:hover{
  -webkit-filter: drop-shadow(2px 2px 0 blue)
  drop-shadow(-2px -2px 0 blue);
  filter: drop-shadow(2px 2px 0 blue)
  drop-shadow(-2px -2px 0 blue);
}
#pim_azul_filho{
  background-image: url("src/assets/pim_azul.png");
  width: 120px;
  height: 80px;
  cursor: pointer;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  top: 400px;
  right: 150px;
}
#pim_azul_filho:hover{
  -webkit-filter: drop-shadow(2px 2px 0 blue)
  drop-shadow(-2px -2px 0 blue);
  filter: drop-shadow(2px 2px 0 blue)
  drop-shadow(-2px -2px 0 blue);
}
#pim_verde_pai{
  background-image: url("src/assets/pim_verde.png");
  width: 120px;
  height: 140px;
  cursor: pointer;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  top: 390px;
  right: 80px;
}

#pim_verde_pai:hover {
  -webkit-filter: drop-shadow(2px 2px 0 green) drop-shadow(-2px -2px 0 green);
  filter: drop-shadow(2px 2px 0 green) drop-shadow(-2px -2px 0 green);
}

#pim_verde_filho{
  background-image: url("src/assets/pim_verde.png");
  width: 120px;
  height: 80px;
  cursor: pointer;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  top: 430px;
  right: 90px;
}

#pim_verde_filho:hover {
  -webkit-filter: drop-shadow(2px 2px 0 green) drop-shadow(-2px -2px 0 green);
  filter: drop-shadow(2px 2px 0 green) drop-shadow(-2px -2px 0 green);
}

#pim_vermelho_pai{
  background-image: url("src/assets/pim_vermelho.png");
  width: 120px;
  height: 140px;
  cursor: pointer;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  top: 420px;
  right: 30px;
}

#pim_vermelho_pai:hover {
  -webkit-filter: drop-shadow(2px 2px 0 red) drop-shadow(-2px -2px 0 red);
  filter: drop-shadow(2px 2px 0 red) drop-shadow(-2px -2px 0 red);
}

#pim_vermelho_filho{
  background-image: url("src/assets/pim_vermelho.png");
  width: 120px;
  height: 80px;
  cursor: pointer;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  top: 460px;
  right: 40px;
}

#pim_vermelho_filho:hover {
  -webkit-filter: drop-shadow(2px 2px 0 red) drop-shadow(-2px -2px 0 red);
  filter: drop-shadow(2px 2px 0 red) drop-shadow(-2px -2px 0 red);
}

.pimPaiAzulAnimationBtoA{
  animation: pimAzulPaiBtoA 3s forwards;
}

.pimPaiAzulAnimationAtoB{
  animation: pimAzulPaiAtoB 3s forwards;
}

@keyframes pimAzulPaiBtoA {
  from {right: 270px; top: 360px}
  to {right: 650px; top: 350px}
}

@keyframes pimAzulPaiAtoB {
  from {right: 650px; top: 350px}
  to {right: 270px; top: 360px}
}

.pimPaiVerdeAnimationBtoA{
  animation: pimVerdePaiBtoA 3s forwards;
}

.pimPaiVerdeAnimationAtoB{
  animation: pimVerdePaiAtoB 3s forwards;
}

@keyframes pimVerdePaiBtoA {
  from {right: 230px; top: 400px}
  to {right: 610px; top: 390px}
}

@keyframes pimVerdePaiAtoB {
  from {right: 660px; top: 390px}
  to {right: 280px; top: 400px}
}

.pimPaiVermelhoAnimationBtoA{
  animation: pimVermelhoPaiBtoA 3s forwards;
}

.pimPaiVermelhoAnimationAtoB{
  animation: pimVermelhoPaiAtoB 3s forwards;
}

@keyframes pimVermelhoPaiBtoA {
  from {right: 200px; top: 430px}
  to {right: 600px; top: 420px}
}

@keyframes pimVermelhoPaiAtoB {
  from {right: 650px; top: 420px}
  to {right: 280px; top: 430px}
}

.pimFilhoAzulAnimationBtoA{
  animation: pimAzulFilhoBtoA 3s forwards;
}

.pimFilhoAzulAnimationAtoB{
  animation: pimAzulFilhoAtoB 3s forwards;
}

@keyframes pimAzulFilhoBtoA {
  from {right: 260px; top: 410px}
  to {right: 640px; top: 400px}
}

@keyframes pimAzulFilhoAtoB {
  from {right: 640px; top: 400px}
  to {right: 260px; top: 410px}
}

.pimFilhoVerdeAnimationBtoA{
  animation: pimVerdeFilhoBtoA 3s forwards;
}

.pimFilhoVerdeAnimationAtoB{
  animation: pimVerdeFilhoAtoB 3s forwards;
}

@keyframes pimVerdeFilhoBtoA {
  from {right: 240px; top: 440px}
  to {right: 620px; top: 430px}
}

@keyframes pimVerdeFilhoAtoB {
  from {right: 620px; top: 430px}
  to {right: 240px; top: 440px}
}

.pimFilhoVermelhoAnimationBtoA{
  animation: pimVermelhoFilhoBtoA 3s forwards;
}

.pimFilhoVermelhoAnimationAtoB{
  animation: pimVermelhoFilhoAtoB 3s forwards;
}

@keyframes pimVermelhoFilhoBtoA {
  from {right: 210px; top: 470px}
  to {right: 600px; top: 460px}
}

@keyframes pimVermelhoFilhoAtoB {
  from {right: 620px; top: 460px}
  to {right: 240px; top: 470px}
}

#fail{
  position: absolute;
  top: 0;
}
#winner{
  position: absolute;
  top: 0;
}
</style>
