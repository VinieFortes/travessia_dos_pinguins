<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
@font-face {
  font-family: "Snow";
  src: local("Snow"),
  url(../src/fonts/SnowtopCaps.otf) format("truetype");
}
</style>
