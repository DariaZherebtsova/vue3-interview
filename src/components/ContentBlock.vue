<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="ma-4"
    >
      <v-col cols="12">
        <v-img
          :src="Logo"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
        lg="6"
      >
        <Filter
          :items="countryList"
          label="Filter by country"
          @update:modelValue="changeCountry"
        />

        <Filter
          :items="scoreList"
          label="Filter by score"
          @update:modelValue="changeScore"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
        lg="6"
      >
        <v-card
          max-width="450"
          class="mx-auto"
        >
          <UserList :users="users" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Logo from '@/assets/logo.svg';
import UserList from '@/components/UserList.vue';
import Filter from '@/components/BaseFilters.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const name = 'ContentBlock';

const countryList = ['Russia', 'USA'];
const scoreList = ['> 20', '< 10'];

const store = useStore();
const users = computed(() => store.getters.filtredUsers);

if (!users.value.length) {
  store.dispatch('getUsers').catch((err) => {
    console.log('err getUsers', err);
  });
}

function changeCountry(val: string) {
  store.commit('setSelectedCountry', val);
}

function changeScore(val: string) {
  store.commit('setSelectedScoreRange', val);
}
</script>
