<template>
  <nav id='navbar'>
    <ul>
      <li>
        <router-link to='/' exact><img class='logo' src='../../assets/tasker_logo.png' alt='LOGO'></router-link>
      </li>
      <ul>
        <li v-if='this.getLoggedInStatus'>
            <router-link class='textLink' to='/add' exact>Create</router-link>
        </li>
        <li v-if='this.getLoggedInStatus'>
            <p class='textLink' v-on:click='setCurrentTab("SignOut")'>Sign Out</p>
        </li>
        <li v-if='!this.getLoggedInStatus'>
            <p class='textLink' v-on:click='setCurrentTab("SignUp")'>Sign Up</p>
        </li>
        <li v-if='!this.getLoggedInStatus'>
            <p class='textLink' v-on:click='setCurrentTab("SignIn")'>Sign In</p>
        </li>
        <li v-if='this.getLoggedInStatus'>
          <router-link to='/' exact>
            <div class='circle'>
              <span>{{ getUserEmailSliced }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {

        };
    },
    methods: {
        setCurrentTab(newTab) {
            this.$store.dispatch('setCurrentTab', newTab);
        }
    },
    computed: {
        ...mapGetters([
            'getLoggedInStatus',
            'getUserEmailSliced'
        ])
    }
};
</script>

<style scoped lang='scss'>
$navbarHeight: 60px;

#navbar {
    margin: 0;
    background: #fff;
    width: 100%;
    height: $navbarHeight;

    ul {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    li {
        display: inline-block;
        vertical-align: middle;
        margin: 0 10px;

        div.circle {
            margin-right: 50px;
            width: 50px;
            height: 50px;
            background: #666;
            position: relative;

            transition: background 0.3s;
            -moz-transition: background 0.3s;
            -o-transition: background 0.3s;
            -webkit-transition: background 0.3s;

            &:hover {
                background: #888;
            }

            span {
                position: absolute;
                top: 15px;
                left: 20px;
                color: #fff;
                font-size: 17px;
            }
        }
    }
}

a {
    color: #222;
    text-decoration: none;
}

.textLink {
    color: #222;
    margin: 0 10px;

    cursor: pointer;
}

a, .textLink {
    -o-transition: opacity 0.3s;
    -moz-transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.5;
    }
}

.logo {
    height: $navbarHeight - 10;
}

.circle {
    border-radius: 50%;
}
</style>
