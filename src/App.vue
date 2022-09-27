<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  beforeMount() {
    document.title = 'Travessia dos Pinguins';
  }
})
</script>

<style>
@font-face {
  font-family: "Snow";
  src: local("Snow"),
  url(../src/fonts/SnowtopCaps.otf) format("truetype");
}
</style>
