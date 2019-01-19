<template>
    <div id='todo'>
        <nav id='navbar'>
            <ul>
                <li><router-link to='/'>LOGO</router-link></li>
                <div>
                    <li><router-link to='/'>SIGNOUT</router-link></li>
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
a {
    color: #444;
    text-decoration: none;
}

#navbar {
    margin: 0;
    background: #fff;
    width: 100%;
    height: 60px;

    ul {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
    }

    li {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;

        div.circle {
            width: 50px;
            height: 50px;
            background: #ddd;
            position: relative;

            span {
                position: absolute;
                top: 13px;
                left: 19px;
                font-size: 18px;
            }
        }
    }
}

.circle {
    border-radius: 50%;
}
</style>