<template>
    <div id='signIn' class='auth'>
        <form id='signInForm' class='authForm'>
            <button class='exit' v-on:click.prevent='setCurrentTab(null)'>X</button>
            <ul>
                <li>
                    <h2>SIGN IN</h2>
                </li>
                <li>
                    <label for='emailInput'>Email:</label>
                    <input id='emailInput' type='email' placeholder="Email" />
                </li>
                <li>
                    <label for='passwordInput'>Password:</label>
                    <input id='passwordInput' type='password' placeholder="Password" />
                </li>
            </ul>
            <button class='submitButton' id='signInBtn'>WELCOME BACK!</button>
        </form>
      </div>
</template>

<script>
export default {
  methods: {
    setCurrentTab(newTab) {
        this.$store.dispatch('setCurrentTab', newTab);
    }
  }
};
</script>

<style scoped lang='scss'>
#signInBtn {
  width: 175px;
}
</style>
