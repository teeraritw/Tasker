<template>
    <div id='allTodo'>
        <ul>
            <li v-for='todo in todos'>
                <h2>{{ todo.title }}</h2>
                <p>{{ todo.description | snippet }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    components: {
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapState([
            'todos'
        ])
    }
}
</script>

<style scoped lang='scss'>
#allTodo {
    background: #fff;
    width: 960px;
    margin: 0 auto;
}
</style>