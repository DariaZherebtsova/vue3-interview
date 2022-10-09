<template>
  <v-list
    :items="users"
    item-props
    lines="three"
  >
    <template v-slot:subtitle="{ subtitle }">
      <div v-html="subtitle"></div>
    </template>
  </v-list>
</template>

<script setup lang="ts">
const name = 'UserList';

const props = defineProps({
  users: {
    type: Array,
  },
});
</script>

<style lang=""></style>
