<template>
    <div id='todo'>
        <Navbar></Navbar>
        <div id='todoComponents'>
            <div>
                <h2 class='header'>TODO LIST</h2>
                <TodoList></TodoList>
            </div>
            <div>
                <h2 class='header'>PROFILE</h2>
                <Profile></Profile>
            </div>        
        </div>
    </div>
</template>

<script>
import TodoList from './TodoList.vue';
import Profile from './Profile.vue';
import Navbar from '../Navbar.vue';

export default {
    components: {
        Navbar,
        TodoList,
        Profile
    },
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
#todoComponents {
    margin: 50px 0;
    display: flex;
    justify-content: center;

    div {
        margin: 0 20px;
    }

    div > h2 {
        font-size: 30px;
        position: relative;
        top: 30px;
        left: 20px;
    }
}

</style>