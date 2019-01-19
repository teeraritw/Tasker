<template>
    <div id='todo'>
        <nav id='navbar'>
            <ul>
                <li><router-link to='/'><img class='logo' src='../assets/tasker_logo.png' alt='LOGO'></router-link></li>
                <div>
                    <li><router-link to='/'>Signout</router-link></li>
                    <li>
                        <router-link to='/'>
                            <div class='circle'>
                                <span>F</span>
                            </div>
                        </router-link>
                    </li>
                </div>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    beforeCreate() {
        document.body.className = 'todo';
    }
}
</script>

<style scoped lang='scss'>
$navbarHeight: 60px;

a {
    color: #444;
    text-decoration: none;
    transition: opacity 0.5s;

    &:hover {
        opacity: 0.5;
    }
}

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
            width: 50px;
            height: 50px;
            background: #ddd;
            position: relative;

            span {
                position: absolute;
                top: 13px;
                left: 20px;
                font-size: 18px;
            }
        }
    }
}

.logo {
    height: $navbarHeight - 10;
}

.circle {
    border-radius: 50%;
}
</style>