<template>
  <v-select
    v-model="variant"
    :items="items"
    clearable
    label="Filter by country"
  ></v-select>
</template>

<script setup lang="ts">
const name = 'Filter';

const props = defineProps({
  items: {
    type: Array,
  },
});
</script>
