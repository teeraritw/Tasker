<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/universal/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {  
    }
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
