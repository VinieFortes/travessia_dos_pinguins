<template>
  <q-dialog ref="dialog" persistent v-model="showDialog">
    <q-card style="background-color: #2a5f83; border: 1px solid white" class="text-white flex justify-center column items-center">
      <q-card-section class="q-pa-sm">
        <span style="font-size: 22px; font-weight: bold">Parabéns Você Venceu!</span>
      </q-card-section>
      <q-card-section>
        <q-btn  @click="replayGame" color="white" text-color="blue-8" icon="replay" label="Tentar Novamente"></q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "Winner",
  props: ['showDialog'],
  methods : {
    replayGame(){
      this.$emit('replay', true);
    }
  }
}
</script>

<style scoped>

</style>
