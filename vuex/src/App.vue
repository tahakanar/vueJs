<template>
  <base-container title="Vuex" v-if="isAuth">
    <favorite-value></favorite-value>
    <the-counter></the-counter>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
  <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    TheCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', {value:10});
      this.$store.commit({
        type:'numbers/increase', 
        value:10
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>