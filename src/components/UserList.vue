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
import { computed } from 'vue';
import Popper from 'vue3-popper';

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

    let tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = 'zzzzzz';
    document.body.append(tooltipElem);

    // спозиционируем его сверху от аннотируемого элемента (top-center)
    let coords = element.getBoundingClientRect();
    console.log('coords', coords);
    console.log('window.pageYOffset', window.pageYOffset);

    // let left = coords.left + element.offsetWidth / 2;
    let left = coords.left;
    // if (left < 0) left = 0; // не заезжать за левый край окна

    // let top = coords.top - tooltipElem.offsetHeight - 5;
    let top = coords.top + window.pageYOffset - element.offsetHeight / 2 - 20;
    // if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    //   top = coords.top + element.offsetHeight + 5;
    // }

    console.log(`left=${left} top=${top}`);

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
    // tooltipElem.style.position = 'absolute';
  }
}
</script>

<style>
.tooltip {
  position: absolute;
  padding: 10px 20px;
  border: 1px solid #b3c9ce;
  border-radius: 4px;
  text-align: center;
  font: italic 14px/1.3 sans-serif;
  color: #333;
  background: #fff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}
</style>
