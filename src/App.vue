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
body, html {
  margin: 0;
  font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
  color: #444;
}
body.todo {
  background: #ffaa00;
}
</style>
