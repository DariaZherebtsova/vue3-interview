<template>
  <v-list
    :items="items"
    item-props
    lines="three"
  >
    <template v-slot:subtitle="{ subtitle }">
      <div v-html="subtitle"></div>
    </template>
  </v-list>
</template>

<script setup lang="ts">
import { computed, useSSRContext } from 'vue';

const name = 'UserList';

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});

// const users = computed(() => store.state.users);

const items = computed(() => {
  const result: [any] = [{ type: 'subheader', title: 'List' }];
  for (let user of props.users) {
    result.push(user);
    result.push({ type: 'divider', inset: true });
  }
  result.pop();
  return result;
});
</script>

<style lang=""></style>
