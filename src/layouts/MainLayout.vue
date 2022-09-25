<template>
  <q-layout id="full">
    <q-page id="body">
      <div @click="moveIce" id="ice" :class="{iceAnimationBtoA: animationIceToA, iceAnimationAtoB: animationIceToB}"></div>
      <div @click="pimPaiAzul" id="pim_azul_pai" :class="{pimPaiAzulAnimationBtoA: animationPimAzulPaiToA, pimPaiAzulAnimationAtoB: animationPimAzulPaiToB}"></div>
      <div @click="pimPaiVerde" id="pim_verde_pai" :class="{pimPaiAnimationBtoA: animationPimVerdePaiToA, pimPaiAnimationAtoB: animationPimVerdePaiToB}"></div>
      <div id="pim_vermelho_pai"></div>
      <div @click="pimFilhoAzul" id="pim_azul_filho" :class="{pimFilhoAzulAnimationBtoA: animationPimAzulFilhoToA, pimFilhoAzulAnimationAtoB: animationPimAzulFilhoToB}"></div>
      <div id="pim_verde_filho"></div>
      <div id="pim_vermelho_filho"></div>
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  watch:{
    iceStatus:{
      handler: function (val, oldVal) {
        console.log(val)
      },
      deep: true,
    }
  },

  computed: {
    iceStatus() {
      return this.ice;
    },
  },

  methods: {
    moveIce(){
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
            this.pimAzulPai.position = 'A';
          }
          if(this.ice.pim_azul_filho){
            this.animationPimAzulFilhoToA = true;
            this.animationPimAzulFilhoToB = false;
            this.pimAzulFilho.onIce = true;
            this.pimAzulFilho.position = 'A';
          }
          if(this.ice.pim_verde_pai){
            this.animationPimVerdePaiToA = true;
            this.animationPimVerdePaiToB = false;
            this.pimVerdePai.onIce = true;
            this.pimVerdePai.position = 'A';
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
        }
      }
    },

    pimPaiAzul(){
     const pinPaiAzul = document.getElementById('pim_azul_pai');
     console.log(window.getComputedStyle(pinPaiAzul).top + window.getComputedStyle(pinPaiAzul).right)
     const posB = window.getComputedStyle(pinPaiAzul).top === '350px' && window.getComputedStyle(pinPaiAzul).right === '150px';
     const posIceB = window.getComputedStyle(pinPaiAzul).top === '360px' && window.getComputedStyle(pinPaiAzul).right === '270px';
     const posIceA = window.getComputedStyle(pinPaiAzul).top === '350px' && window.getComputedStyle(pinPaiAzul).right === '650px';
     const posA = window.getComputedStyle(pinPaiAzul).top === '330px' && window.getComputedStyle(pinPaiAzul).right === '750px';
     if (posB){
       // B to Ice
       if(this.ice.position === 'B'){
         this.animationPimAzulPaiToB = false;
         this.animationPimAzulPaiToA = false;
         let posTop = 360;
         let posRight = 270;
         pinPaiAzul.style.top = posTop + 'px';
         pinPaiAzul.style.right = posRight + 'px';
         pinPaiAzul.style.zIndex = '1';
         this.ice.pim_azul_pai = true;
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
     }
      if (posA){
        // A to Ice
        if(this.ice.position === 'A'){
          this.animationPimAzulPaiToB = false;
          this.animationPimAzulPaiToA = false;
          let posTop = 350;
          let posRight = 650;
          pinPaiAzul.style.top = posTop + 'px';
          pinPaiAzul.style.right = posRight + 'px';
          pinPaiAzul.style.zIndex = '1';
          this.ice.pim_azul_pai = true;
        }
      }
    },
    pimFilhoAzul() {
      const pinFilhoAzul = document.getElementById ('pim_azul_filho');
      console.log (window.getComputedStyle (pinFilhoAzul).top + window.getComputedStyle (pinFilhoAzul).right)
      const posB = window.getComputedStyle (pinFilhoAzul).top === '400px' && window.getComputedStyle (pinFilhoAzul).right === '150px';
      const posIceB = window.getComputedStyle (pinFilhoAzul).top === '410px' && window.getComputedStyle (pinFilhoAzul).right === '260px';
      const posIceA = window.getComputedStyle (pinFilhoAzul).top === '400px' && window.getComputedStyle (pinFilhoAzul).right === '640px';
      const posA = window.getComputedStyle (pinFilhoAzul).top === '380px' && window.getComputedStyle (pinFilhoAzul).right === '750px';
      if (posB) {
        // B to Ice
        if(this.ice.position === 'B') {
          this.animationPimAzulFilhoToB = false;
          this.animationPimAzulFilhoToA = false;
          let posTop = 410;
          let posRight = 260;
          pinFilhoAzul.style.top = posTop + 'px';
          pinFilhoAzul.style.right = posRight + 'px';
          pinFilhoAzul.style.zIndex = '1';
          this.ice.pim_azul_filho = true;
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
      }
      if (posA) {
        // A to Ice
        if (this.ice.position === 'A') {
          this.animationPimAzulFilhoToB = false;
          this.animationPimAzulFilhoToA = false;
          let posTop = 400;
          let posRight = 640;
          pinFilhoAzul.style.top = posTop + 'px';
          pinFilhoAzul.style.right = posRight + 'px';
          pinFilhoAzul.style.zIndex = '1';
          this.ice.pim_azul_filho = true;
        }
      }
    },

    pimPaiVerde(){
      const pinPaiVerde = document.getElementById('pim_verde_pai');
      console.log(window.getComputedStyle(pinPaiVerde).top + window.getComputedStyle(pinPaiVerde).right)
      const posB = window.getComputedStyle(pinPaiVerde).top === '390px' && window.getComputedStyle(pinPaiVerde).right === '80px';
      const posIceB = window.getComputedStyle(pinPaiVerde).top === '360px' && window.getComputedStyle(pinPaiVerde).right === '230px';
      const posIceA = window.getComputedStyle(pinPaiVerde).top === '340px' && window.getComputedStyle(pinPaiVerde).right === '600px';
      const posA = window.getComputedStyle(pinPaiVerde).top === '370px' && window.getComputedStyle(pinPaiVerde).right === '780px';
      if (posB){
        // B to Ice
        if(this.ice.position === 'B'){
          this.animationPimVerdePaiToB = false;
          this.animationPimVerdePaiToA = false;
          let posTop = 360;
          let posRight = 230;
          pinPaiVerde.style.top = posTop + 'px';
          pinPaiVerde.style.right = posRight + 'px';
          pinPaiVerde.style.zIndex = '1';
          this.ice.pim_verde_pai = true;
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
      }
      if (posA){
        // A to Ice
        if(this.ice.position === 'A'){
          this.animationPimVerdePaiToB = false;
          this.animationPimVerdePaiToA = false;
          let posTop = 340;
          let posRight = 600;
          pinPaiVerde.style.top = posTop + 'px';
          pinPaiVerde.style.right = posRight + 'px';
          pinPaiVerde.style.zIndex = '1';
          this.ice.pim_verde_pai = true;
        }
      }
    }
  },

  data(){
    const ice = {position: 'B', pim_azul_pai: false, pim_azul_filho: false, pim_verde_pai: false, pim_verde_filho: false, pim_vermelho_pai: false, pim_vermelho_filho: false};
    const pimAzulPai = {onIce: false, position: 'B'};
    const pimAzulFilho = {onIce: false, position: 'B'};
    const pimVerdePai = {onIce: false, position: 'B'};
    const pimVerdeFilho = {onIce: false, position: 'B'};
    return{
      ice: ice,
      animationIceToA: false,
      animationIceToB: false,

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
  background-position: center;
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
</style>
