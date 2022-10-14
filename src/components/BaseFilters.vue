<template>
  <v-select
    :items="items"
    variant="underlined"
    :label="label"
    @update:modelValue="change"
    clearable
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
});

function change(val: string) {
  emit('update:modelValue', val);
}
</script>
