<template>
  <v-select
    :modelValue="selectedItem"
    :items="items"
    variant="underlined"
    :label="label"
    @update:modelValue="change"
  ></v-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = 'Filter';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  items: {
    type: Array,
  },
  label: {
    type: String,
  },
  modelValue: {
    type: String,
  },
});

let selectedItem = ref('');

function change(val: string) {
  console.log('--filter change', val);
  selectedItem.value = val;
  emit('update:modelValue', val);
}
</script>
