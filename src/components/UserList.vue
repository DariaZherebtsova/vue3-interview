<template>
  <v-list lines="three">
    <v-list-subheader>List</v-list-subheader>
    <v-list-item-group>
      <template
        v-for="(item, index) in users"
        :key="item.id"
      >
        <v-divider
          inset
          v-show="index !== 0"
        ></v-divider>
        <v-list-item>
          <template v-slot:prepend>
            <v-tooltip
              location="top"
              :text="item.address"
              :open-on-hover="false"
              open-on-click
            >
              <template v-slot:activator="{ props }">
                <v-avatar v-bind="props">
                  <v-img :src="item.prependAvatar"></v-img>
                </v-avatar>
              </template>
            </v-tooltip>
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
const name = 'UserList';

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});
</script>
