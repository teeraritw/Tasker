<template>
    <div id='wrapper'>
        <h2 class='header'>ALL TODOS</h2>
        <div id='allTodo'>
            <ul>
                <li v-for='todo in getTodos'>
                    <button v-if='getLoggedInStatus' class='delete' v-on:click='deleteTodo(todo.id)'>X</button>
                    <router-link v-bind:to='"/todos/" + todo.id'><h2>{{ todo.title | snippetTitle }}</h2></router-link>
                    <p class='description'>{{ todo.description | snippet }}</p>
                    <p>Posted by: {{ todo.author }}</p>
                    <p>Date: {{ todo.date.toDate() | toCalendar }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
    },
    data() {
        return {

        };
    },
    methods: {
        ...mapActions([
            'deleteTodo'
        ])
    },
    computed: {
        ...mapGetters([
            'getTodos',
            'getLoggedInStatus'
        ])
    }
}
</script>

<style scoped lang='scss'>
#wrapper {
    width: 550px;
    margin: 0 auto;
}

#allTodo {
    width: 100%;
    box-sizing: border-box;
    min-height: 50px;
    margin-top: 30px;
}

h2.header {
    font-size: 28px;
    position: relative;
    left: 0;
    top: 30px;
}

a {
    text-decoration: none;
}

ul {
    padding: 0;
    list-style-type: none;

    li {
        position: relative;
        background: #fff;
        padding: 30px;
        margin: 10px 0;
        overflow: hidden;
        height: 200px;
    }

    h2 {
        font-size: 27px;
        margin: 0;
        color: #444;

        &:hover {
            opacity: 0.7;
        }
    }

    p {
        margin: 5px 0;
    }

    p.description {
        margin: 10px 0;
        width: 90%;
        word-wrap: break-word;
        -ms-word-wrap: break-word;
    }

    button.delete {
        color: #444;
        position: absolute;
        top: 5px;
        right: 5px;
        border: 0;
        background: transparent;
        height: 20x;
        font-size: 18px;

            &:hover {
                opacity: 0.5;
            }

        cursor: pointer;
    }
}

@media screen and (max-width: 800px) {
    #wrapper h2.header {
        font-size: 26px;
    }
}

@media screen and (max-width: 550px) {
    #wrapper {
        width: 90%;

        h2.header {
            font-size: 22px;
        }
    }

    ul li {
        height: auto;
        max-height: 300px;

        h2 {
            font-size: 21px;
        }
        p {
            font-size: 14px;
        }
    }
}

</style>