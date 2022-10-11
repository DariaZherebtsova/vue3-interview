<template>
  <v-list
    :items="items"
    item-props
    lines="three"
    @click="onListItemClick"
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

function onListItemClick(e: MouseEvent) {
  console.log('--click', e.target);
  var element = e.target as HTMLElement;
  if (element.tagName === 'IMG') {
    console.log(element.tagName);
  }
}
</script>

<style lang=""></style>
