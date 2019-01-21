<template>
    <div id='wrapper'>
        <h2 class='header'>ALL TODOS</h2>
        <div id='allTodo'>
            <ul>
                <li v-for='todo in getTodos'>
                    <h2>{{ todo.title | snippetTitle }}</h2>
                    <p class='description'>{{ todo.description | snippet }}</p>
                    <p>Posted by: {{ todo.author }}</p>
                    <p>Date: {{ todo.date }}</p>
                    <img src='../../assets/feather.png' alt='Feather pen' />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    components: {
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters([
            'getTodos'
        ])
    }
}
</script>

<style scoped lang='scss'>
#wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
}

#allTodo {
    width: 800px;
    box-sizing: border-box;
    min-height: 50px;
}

h2.header {
    font-size: 36px;
    position: relative;
    top: 30px;
}

ul {
    list-style-type: none;

    li {
        position: relative;
        background: #fff;
        padding: 30px;
        margin: 10px 0;
        overflow: hidden;
        height: 200px;

        img {
            position: absolute;
            opacity: 0.5;
            top: 30px;
            -moz-transform: rotateZ(30deg);
            -o-transform: rotateZ(30deg);
            -webkit-transform: rotateZ(30deg);
            transform: rotateZ(30deg);
            right: 25px;
            width: 100px;
        }
    }

    h2 {
        font-size: 38px;
        margin: 0;
        color: #444;
    }

    p {
        margin: 5px 0;
    }

    p.description {
        margin: 10px 0;
    }
}

</style>