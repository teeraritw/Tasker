<template>
  <nav id='navbar'>
    <ul>
        <div class='topNav'>
            <li>
                <router-link to='/' exact><img class='logo' src='../../assets/tasker_logo.png' alt='LOGO'></router-link>
            </li>
            <li v-on:click='toggleNav' class='burgerNav'>
            </li>
        </div>
        <div class='lowerNav'>
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
            <li class='profilePic' v-if='this.getLoggedInStatus'>
                <router-link to='/' exact>
                    <div class='circle'>
                        <span>{{ getUserEmailInitial }}</span>
                    </div>
                </router-link>
            </li>
        </div>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import $ from 'jquery';

export default {
    data() {
        return {

        };
    },
    methods: {
        setCurrentTab(newTab) {
            this.$store.dispatch('setCurrentTab', newTab);
        },
        toggleNav() {
            $('#navbar ul div.lowerNav').toggleClass('open');
        }
    },
    computed: {
        ...mapGetters([
            'getLoggedInStatus',
            'getUserEmailInitial'
        ])
    }
};
</script>

<style scoped lang='scss'>
#navbar {
    margin: 0;
    background: #fff;
    width: 100%;
    height: auto;

    ul {
        padding-left: 10px;
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    li {
        display: inline-block;
        vertical-align: middle;

        div.circle {
            margin-right: 50px;
            width: 40px;
            height: 40px;
            background: #666;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            transition: background 0.3s;
            -moz-transition: background 0.3s;
            -o-transition: background 0.3s;
            -webkit-transition: background 0.3s;

            &:hover {
                background: #888;
            }

            span {
                color: #fff;
                font-size: 14px;
            }
        }
    }
}

a {
    display: inline-block;
    color: #222;
    text-decoration: none;
}

a, .textLink {
    padding: 5px;
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
    height: 40px;
}

.circle {
    border-radius: 50%;
}

@media screen and (max-width: 510px) {
    #navbar ul {
        display: block;
        padding: 0;
    }
    #navbar ul li {
        display: block;

        a, .textLink {
            padding: 10px;
            display: block;
            margin-left: 10px;
        }

        &:hover {
            background: #eee;
        }
    }

    #navbar ul li.profilePic {
        display: none;
    }

    #navbar ul .topNav {
        border-bottom: 1px solid #ddd;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;

        li {
            display: inline-block;
        }

        .burgerNav {
            height: 40px;
            width: 40px;
            background: url(../../assets/hamburger.png) no-repeat center;
            background-size: 30px 30px;
            margin-right: 10px;

            cursor: pointer;
        }
    }

    #navbar ul div.lowerNav.open {
        max-height: 133px;
    }

    #navbar ul div.lowerNav {
        max-height: 0;
        overflow: hidden;

        transition: max-height 0.5s;
    }
}
</style>
