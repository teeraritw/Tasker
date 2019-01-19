import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [
            {
                title: 'Buy milk',
                description: 'Milk are awesome!',
                author: 'Fester',
                date: new Date()
            },
            {
                title: 'Play games',
                description: 'Gaming is cool!',
                author: 'Mitch',
                date: new Date()
            },
            {
                title: 'Eat fish',
                description: 'Fish are cool!',
                author: 'Salmon',
                date: new Date()
            }
        ]
    }
});

export default store;