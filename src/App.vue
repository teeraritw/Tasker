<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {  
    }
  }
}
</script>

<style lang="scss">

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}

body, html {
  margin: 0;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  color: #7b7b7b;
  max-width: 100%;
}

body.todo {
  background: #ffaa00;
}

#app {
  margin-bottom: 100px;
}
</style>
