<template>
    <div id='signOut' class='auth'>
        <div class='authForm'>
          <h2>Are you sure you want sign out?</h2>
          <button id='confirmBtn' class='submitButton' v-on:click='signOut'>Yes, I'd like to sign out</button>
          <button id='returnBtn' v-on:click.prevent='setCurrentTab(null)'>No, I still have things to do..</button>
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
.authForm {
    display: flex;
    align-items: center;
}

#confirmBtn {
  padding: 15px 30px;
  width: 90%;
  height: 60px;
  font-size: 24px;
  display: block;
  margin: 0 auto 10px auto;
}

#returnBtn {
  border: 0;
  padding: 10px 20px;
  margin: 0 auto;
  display: block;
  width: auto;
  color: #666;
  background: transparent;

  &:hover {
    opacity: 0.5;
  }
}

@media screen and (max-width: 850px) {
  #confirmBtn {
    font-size: 20px;
    height: 55px;
  }
  h2 {
    font-size: 22px;
  }
}

@media screen and (max-width: 560px) {
  h2 {
    font-size: 20px;
  }
}
</style>
