<template>
  <v-list lines="three">
    <v-list-item-group active-class="pink--text">
      <template
        v-for="(item, index) in users"
        :key="index"
      >
        <v-divider
          inset
          v-show="index !== 0"
        ></v-divider>
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar>
              <v-img :src="item.prependAvatar"></v-img>
            </v-avatar>
          </template>
          <v-list-item-title class="text-h6 text-third">
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-subtitle-2">
            <div v-html="item.subtitle"></div>
          </v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script setup lang="ts">
const users = [
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?, USA, 35',
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    country: 'USA',
    score: 35,
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Summer BBQ, Russia, 3',
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    country: 'Russia',
    score: 3,
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui oui, USA, 30',
    subtitle:
      '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
    country: 'USA',
    score: 30,
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift, Russia, 25',
    subtitle:
      '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
    country: 'Russia',
    score: 25,
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Recipe to try, USA, 5',
    subtitle:
      '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    country: 'USA',
    score: 5,
  },
];
</script>
