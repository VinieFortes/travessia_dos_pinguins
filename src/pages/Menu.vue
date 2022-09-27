<template>
  <div class="body flex justify-center items-center">
    <q-card class="menu text-white" style="background-color: #2a5f83">
      <q-card-section class="q-pa-sm flex column items-center" >
        <span style="font-size: 40px">Trabalho de Inteligência Artificial</span>
        <span style="font-size: 30px">Travessia dos Pinguins</span>
      </q-card-section>
      <q-card-section class="q-pa-sm" >
        <q-btn @click="jogar" color="white" text-color="blue-8" label="Jogar"/>
      </q-card-section>
    </q-card>
    <MainLayout :run-i-a="true" id="main"/>
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
