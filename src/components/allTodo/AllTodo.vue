<template>
    <div id='wrapper'>
        <h2 class='header'>ALL TODOS</h2>
        <div id='allTodo'>
            <ul>
                <li v-for='todo in todos'>
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
#wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
}

#allTodo {
    width: 960px;
    box-sizing: border-box;
}

h2.header {
    font-size: 36px;
    position: relative;
    right: 390px;
    top: 30px;
}

ul {
    list-style-type: none;

    li {
        position: relative;
        background: #fff;
        padding: 30px;
        margin: 30px 0;
        overflow: hidden;

        img {
            position: absolute;
            opacity: 0.5;
            top: 30px;
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