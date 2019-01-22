<template>
  <div id="app">
    <Navbar></Navbar>

    <transition name="fade">
        <component v-bind:is='getCurrentTab'></component>
    </transition>

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/universal/Navbar.vue';
import SignUp from './components/auth/SignUp.vue';
import SignIn from './components/auth/SignIn.vue';
import SignOut from './components/auth/SignOut.vue';

import { mapGetters } from 'vuex';
import styles from './styles/styles.scss';

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
</style>
