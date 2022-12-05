<template>
  <div class="body flex justify-center items-center">
    <q-card v-if="screen === 1" class="menu text-white" style="background-color: #2a5f83">
      <q-card-section class="q-pa-sm flex column items-center" >
        <span style="font-size: 40px">Trabalho de Inteligência Artificial</span>
        <span style="font-size: 30px">Travessia dos Pinguins</span>
      </q-card-section>
      <q-card-section class="flex column items-center q-gutter-y-md q-pa-sm" >
        <q-btn @click="jogar" size="xl" color="white" text-color="blue-8" label="Jogar"/>
        <q-btn @click="screen = 2" size="xl" color="white" text-color="blue-8" label="Executar Busca em largura"/>
        <q-btn @click="screen = 3" size="xl" color="white" text-color="blue-8" label="Executar Busca em profundidade"/>
        <q-btn @click="screen = 4" size="xl" color="white" text-color="blue-8" label="Executar Busca em back-traking"/>
      </q-card-section>
    </q-card>
    <q-card v-if="screen === 2" class="menu text-white" style="background-color: #2a5f83">
      <q-btn style="position:relative;" @click="screen = 1" size="md" flat text-color="white" icon="arrow_back"/>
      <q-card-section class="q-pa-sm flex column items-center" >
        <span style="font-size: 40px">Trabalho de Inteligência Artificial</span>
        <span style="font-size: 30px">Travessia dos Pinguins</span>
      </q-card-section>
      <q-card-section class="flex column items-center q-gutter-y-md q-pa-sm" >
        <div class="flex column" style="max-height: 500px">
          <span style="font-size: 20px">Regras:</span>
          <span v-for="regra in rules" style="font-family: Arial,serif; font-size: 20px; font-weight: bold">{{regra}}</span>
          <q-btn @click="runBuscaLargura" size="xl" color="white" text-color="blue-8" label="Continar"/>
        </div>
      </q-card-section>
    </q-card>

    <q-card v-if="screen === 3" class="menu text-white" style="background-color: #2a5f83">
      <q-btn style="position:relative;" @click="screen = 1" size="md" flat text-color="white" icon="arrow_back"/>
      <q-card-section class="q-pa-sm flex column items-center" >
        <span style="font-size: 40px">Trabalho de Inteligência Artificial</span>
        <span style="font-size: 30px">Travessia dos Pinguins</span>
      </q-card-section>
      <q-card-section class="flex column items-center q-gutter-y-md q-pa-sm" >
        <div class="flex column" style="max-height: 500px">
          <span style="font-size: 20px">Regras:</span>
          <span v-for="regra in rules" style="font-family: Arial,serif; font-size: 20px; font-weight: bold">{{regra}}</span>
          <q-btn @click="runBuscaProfundidade" size="xl" color="white" text-color="blue-8" label="Continar"/>
        </div>
      </q-card-section>
    </q-card>

    <q-card v-if="screen === 4" class="menu text-white" style="background-color: #2a5f83">
      <q-btn style="position:relative;" @click="screen = 1" size="md" flat text-color="white" icon="arrow_back"/>
      <q-card-section class="q-pa-sm flex column items-center" >
        <span style="font-size: 40px">Trabalho de Inteligência Artificial</span>
        <span style="font-size: 30px">Travessia dos Pinguins</span>
      </q-card-section>
      <q-card-section class="flex column items-center q-gutter-y-md q-pa-sm" >
        <div class="flex column" style="max-height: 500px">
          <span style="font-size: 20px">Regras:</span>
          <span v-for="regra in rules" style="font-family: Arial,serif; font-size: 20px; font-weight: bold">{{regra}}</span>
          <q-btn @click="runBuscaBack" size="xl" color="white" text-color="blue-8" label="Continar"/>
        </div>
      </q-card-section>
    </q-card>

    <MainLayout id="main"/>
  </div>
</template>

<script>
import MainLayout from "layouts/MainLayout";
export default {
  name: "Menu",
  components: {MainLayout},
  methods: {
    jogar(){
      this.$router.push('/play')
    },
    runBuscaLargura(){
      this.$router.push('/ia_bl')
    },
    runBuscaProfundidade(){
      this.$router.push('/ia_bp')
    },
    runBuscaBack(){
      this.$router.push('/ia_bback')
    }

  },
  data(){
    return{
      rules: [
        'R1: LEVAR FILHO VERMELHO', 'R2: LEVAR FILHO VERDE', 'R3: LEVAR FILHO AZUL',
        'R4: LEVAR PAI VERMELHO', 'R5: LEVAR PAI VERDE', 'R6: LEVAR PAI AZUL',
        'R7: LEVAR PAI VERMELHO E FILHO VERMELHO', 'R8: LEVAR PAI VERDE E FILHO VERDE', 'R9: LEVAR PAI AZUL E FILHO AZUL',
        'R10: LEVAR FILHO AZUL E FILHO VERDE', 'R11: LEVAR FILHO AZUL E FILHO VERMELHO', 'R12: LEVAR FILHO VERDE E FILHO VERMELHO'],
      screen: 1,
      runIA: true
    }
  }
}
</script>

<style scoped>
#main{
  filter: blur(4px);
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: 0;
}
.menu{
  position: absolute;
  top: 10%;
  z-index: 1;
  font-family: "Snow", serif;
}
</style>
