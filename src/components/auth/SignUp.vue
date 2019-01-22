<template>
    <div id='signUp'>
        <form id='signUpForm'>
            <button class='exit' v-on:click.prevent='setCurrentTab(null)'>X</button>
            <h2>SIGN UP</h2>
            <ul>
                <li>
                    <label for='usernameInput'>Username:</label>
                    <input id='usernameInput' type='text' placeholder="Username" />
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
            <button id='submitButton'>SIGN ME UP!</button>
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
#signUp {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255,0.7);
    z-index: 1;
}

#signUpForm {
    position: relative;
    padding: 15px;
    background: #fff;
    width: 960px;
    margin: 300px auto;
    -webkit-box-shadow: inset 0 0 2px;
    box-shadow: inset 0 0 2px;
    height: 300px;
    text-align: center;

    button {
        cursor: pointer;
    }

    button.exit {
        position: absolute;
        right: -20px;
        top: -15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 0;
        color: #fff;
        background: #555;
        border: 5px solid #fff;
        -webkit-box-shadow: 0 0 2px #000;
        box-shadow: 0 0 2px #000;

        &:hover {
            background: #444;
        }
    }

    ul {
        list-style-type: none;
        margin: 0 auto;
        width: 500px;
    }

    li {
        margin: 20px 0;
        text-align: center;

        label {
            display: inline-block;
            width: 100px;
        }
        input {
            width: 300px;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 50px;

            -moz-transition: box-shadow 0.2s;
            -webkit-transition: -webkit-box-shadow 0.2s;
            -o-transition: box-shadow 0.2s;
            transition: box-shadow 0.2s;
            
            &:focus {
                outline: 0;
                -webkit-box-shadow: inset 1px #666;
                box-shadow: inset 0 0 2px #666;
            }
        }
    }

    #submitButton {
        border: 0;
        padding: 10px;
        font-size: 15px;
        color: #fff;
        background-color: #444;
        width: 125px;

        &:hover {
            background-color: #222;
        }
    }
}
</style>