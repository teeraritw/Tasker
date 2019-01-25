<template>
    <div id='signOut' class='auth'>
        <div class='authForm'>
          <button class='exit' v-on:click.prevent='setCurrentTab(null)'>X</button>
          <h2>Whoa! Are you sure you want to sign out?</h2>
          <button id='confirmBtn' class='submitButton' v-on:click='signOut'>Yes, I'd like to sign out</button>
          <button id='returnBtn' v-on:click.prevent='setCurrentTab(null)' class='submitButton'>No, I still have things to do</button>
        </div>
    </div>
</template>

<script>
import { auth } from '../../config/firebaseConfig.js';

export default {
  methods: {
    setCurrentTab(newTab) {
      this.$store.dispatch('setCurrentTab', newTab);
    },
    signOut() {
      auth.signOut().then(() => {
        this.setCurrentTab(null);
      });
    }
  }
};
</script>

<style scoped lang='scss'>
#confirmBtn {
  background-color: #00dd33;
  padding: 15px 30px;
  width: auto;
  height: auto;
  font-size: 30px;
  display: block;
  margin: 0 auto 10px auto;

  &:hover {
    background-color: #00bb33;
  }
}

#returnBtn {
  padding: 10px 20px;
  margin: 0 auto;
  display: block;
  width: auto;

  background-color: #666;

  &:hover {
    background-color: #444;
  }
}
</style>
