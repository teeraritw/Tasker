<template>
    <div id='todoList'>
        <div id='fadeList'></div>
        <ul>
            <li v-for='todo in getSimplifiedTodos'>
                <router-link v-bind:to='"/todos/" + todo.id'><h2>{{ todo.title | snippetTitle }}</h2></router-link>
                    <p class='description'>{{ todo.description | snippet }}</p>
                    <p><span class='darkerText'>Author:</span> {{ todo.author }}</p>
                    <p><span class='darkerText'>Post date:</span> {{ todo.date }}</p>
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

a {
    color: #fff;
    text-decoration: none;
}

#fadeList {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: -webkit-linear-gradient(
        rgba(255,255,255,0) 0%,
        rgba(255,255,255, 0) 85%,
        rgba(255,255,255,1) 100%
    );
    background: -o-linear-gradient(
        rgba(255,255,255,0) 0%,
        rgba(255,255,255, 0) 85%,
        rgba(255,255,255,1) 100%
    );
    background: -moz-linear-gradient(
        rgba(255,255,255,0) 0%,
        rgba(255,255,255, 0) 85%,
        rgba(255,255,255,1) 100%
    );
    background: linear-gradient(
        rgba(255,255,255,0) 0%,
        rgba(255,255,255, 0) 85%,
        rgba(255,255,255,1) 100%
    );
}

#todoList {
    box-sizing: border-box;
    display: inline-block;
    width: 500px;
    height: 700px;
    overflow: hidden;
    padding: 30px;
    padding-top: 10px;
    position: relative;
    background: #fff;

    button {
        bottom: 10px;
        left: 120px;
        width: 50%;
        border: 0;
        padding: 15px;
        font-size: 17px;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        position: absolute;
        color: white;
        background: #666;
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

li {
    box-sizing: border-box;
    margin: 20px 0;
    padding-bottom: 30px;
    border-bottom: 1px solid #222;

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