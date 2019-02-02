<template>
    <div id='signUp' class='auth'>
        <form v-on:submit.prevent='signUp' id='signUpForm' class='authForm'>
            <button class='exit' v-on:click.prevent='setCurrentTab(null)'>X</button>
            <ul>
                <li>
                    <h2 class='authHeader'>SIGN UP</h2>
                    <transition name='fade'>
                      <p class='errorMessage' v-if='formSubmitted.error'>{{ formSubmitted.errorMessage }}.</p>
                    </transition>
                </li>
                <li>
                    <label for='emailInput'>Email:</label>
                    <input v-model='user.email' id='emailInput' type='email' placeholder="Email" />
                </li>
                <li>
                    <label for='passwordInput'>Password:</label>
                    <input v-model='user.password' id='passwordInput' type='password' placeholder="Password" />
                </li>
            </ul>
            <button class='submitButton' id='signUpBtn'>SIGN UP</button>
        </form>
    </div>
</template>

<script>
import { auth } from '../../config/firebaseConfig';

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      formSubmitted: {
        errorMessage: null,
        error: false
      }
    };
  },
  methods: {
      setCurrentTab(newTab) {
          this.$store.dispatch('setCurrentTab', newTab);
      },
      signUp() {
        auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          this.formSubmitted.error = false;
          this.setCurrentTab(null);
        })
        .catch(err => {
          this.formSubmitted.error = true;
          this.formSubmitted.errorMessage = err.message;
        });
      }
  }
};
</script>

<style scoped lang='scss'>
#signUpBtn {
  width: 150px;
}
</style>
