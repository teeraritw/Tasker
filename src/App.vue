<template>
  <div id="app">
    <Navbar></Navbar>

    <keep-alive>
      <component v-bind:is='getCurrentTab'></component>
    </keep-alive>

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/universal/Navbar.vue';
import SignUp from './components/auth/SignUp.vue';
import SignIn from './components/auth/SignIn.vue';
import SignOut from './components/auth/SignOut.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    Navbar,
    SignUp,
    SignIn,
    SignOut
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentTab'
    ])
  },
  mounted() {
    this.$store.dispatch('getTodo');
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}

body, html {
  margin: 0;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  color: #666;
  max-width: 100%;
  overflow-x: hidden;
  background: #ffaa00;
}
</style>
