<template>
    <div id='signUp' class='auth'>
        <form v-on:submit.prevent='signUp' id='signUpForm' class='authForm'>
            <button class='exit' v-on:click.prevent='setCurrentTab(null)'>X</button>
            <ul>
                <li>
                    <h2>SIGN UP</h2>
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
            <button class='submitButton' id='signUpBtn'>GLAD TO MEET YOU!</button>
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
        success: false,
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
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
      }
  }
};
</script>

<style scoped lang='scss'>
#signUpBtn {
  width: 200px;
}
</style>
