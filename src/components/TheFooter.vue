<template>
  <v-card
    flat
    tile
    width="100%"
    class="bg-red lighten-1 text-center"
  >
    <v-divider></v-divider>

    <v-card-text class="text-white">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const name = 'TheFooter';
</script>
