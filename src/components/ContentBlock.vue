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
          :modelValue="selectedCountry"
          :items="countryList"
          label="Filter by country"
          @update:modelValue="changeCountry"
        />

        <Filter
          :modelValue="selectedScoreRange"
          :items="scoreList"
          label="Filter by score"
          @update:modelValue="changeScore"
        />
        <!-- <v-select
          v-model="variant"
          :items="items"
          clearable
          label="Filter by score"
        ></v-select> -->
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

const countryList = ['russia', 'usa'];
const scoreList = ['> 20', '< 10'];

const store = useStore();
const selectedCountry = computed(() => store.state.selectedCountry);
const selectedScoreRange = computed(() => store.state.selectedScoreRange);
const users = computed(() => store.getters.filtredUsers);

if (!users.value.length) {
  store.dispatch('getUsers').catch((err) => {
    console.log('-err', err);
    // notify({
    //     title: err,
    //     type: 'error',
    // });
  });
}

function changeCountry(val: string) {
  console.log('--changeCountry', val);
  store.commit('setSelectedCountry', val);
}

function changeScore(val: string) {
  console.log('--changeScore', val);
  store.commit('setSelectedScoreRange', val);
}

</script>
