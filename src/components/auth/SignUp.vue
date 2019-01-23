<template>
    <div id='signUp' class='auth'>
        <form v-on:submit='' id='signUpForm' class='authForm'>
            <button class='exit' v-on:click.prevent='setCurrentTab(null)'>X</button>
            <ul>
                <li>
                    <h2>SIGN UP</h2>
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
            <button class='submitButton' id='signUpBtn'>GLAD TO MEET YOU!</button>
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
#signUpBtn {
  width: 200px;
}
</style>
