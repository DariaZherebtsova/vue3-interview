<template>
  <v-app>
    <v-main>
      <ContentBlock />
    </v-main>

    <v-footer
      app
      v-bind="localAttrs"
    >
      <TheFooter />
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import { computed } from 'vue';

type Attributes = {
  absolute?: boolean;
  fixed?: boolean;
};

const localAttrs = computed(() => {
  const attrs: Attributes = {};
  attrs.absolute = true;
  attrs.fixed = false;

  return attrs;
});
</script>
