<template>
    <div id='todoList'>
        <div id='fadeList'></div>
        <ul>
            <li v-for='todo in getSimplifiedTodos'>
                <router-link v-bind:to='"/todos/" + todo.id'><h2>{{ todo.title | snippetTitle }}</h2></router-link>
                    <p class='description'>{{ todo.description | snippet }}</p>
                    <p><span class='darkerText'>Author:</span> {{ todo.author }}</p>
                    <p><span class='darkerText'>Post date:</span> {{ todo.date.toDate() | toCalendar }}</p>
            </li>
        </ul>
        <router-link to='/todos' exact><button>READ MORE</button></router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
    
        };
    },
    computed: {
        ...mapGetters([
            'getSimplifiedTodos'
        ])
    }
}
</script>

<style scoped lang='scss'>
#fadeList {
    background: -webkit-linear-gradient(
        rgba(255,255,255,0) 0%,
        rgba(255, 255, 255, 0) 40%,
        rgba(255,255,255,1) 100%
    );
    background: -o-linear-gradient(
        rgba(255,255,255,0) 0%,
        rgba(255, 255, 255, 0) 40%,
        rgba(255,255,255,1) 100%
    );
    background: -moz-linear-gradient(
        rgba(255,255,255,0) 0%,
        rgba(255, 255, 255, 0) 40%,
        rgba(255,255,255,1) 100%
    );
    background: linear-gradient(
        rgba(255,255,255,0) 0%,
        rgba(255, 255, 255, 0) 40%,
        rgba(255,255,255,1) 100%
    );
}

a {
    color: #fff;
    text-decoration: none;
    display: grid;
    display: ms-grid;
}

#todoList {
    box-sizing: border-box;
    display: grid;
    display: ms-grid;
    width: 500px;
    min-height: 150px;
    max-height: 700px;
    overflow: hidden;
    padding: 0 30px 20px 30px;
    position: relative;
    background: #fff;

    button {
        position: relative;
        z-index: 1;
        width: 60%;
        border: 0;
        padding: 15px;
        font-size: 17px;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        color: white;
        background: #666;
        justify-self: center;
        cursor: pointer;

        &:hover {
            background: #444;
        }
    }
}

ul {
    padding: 0;
    list-style-type: none;
}

li:first-of-type {
    margin-top: 30px;
}

li {
    box-sizing: border-box;
    margin: 5px 0;
    padding-bottom: 30px;

    h2 {
        color: #222;
        font-size: 35px;
        margin: 0;

        &:hover {
            opacity: 0.7;
        }
    }

    p {
        color: #666;
        margin: 0;
    }

    p.description {
        margin: 10px 0 25px 0;
    }
}

.darkerText {
    color: #222;
}
</style>