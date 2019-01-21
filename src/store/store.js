import Vue from 'vue';
import Vuex from 'vuex';

import db from '../config/firebaseConfig';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: []
    },
    getters: {
        getTodos(state) {
            return state.todos;
        },
        getSimplifiedTodos(state) {
            return state.todos.slice(0,4);
        }
    },
    mutations: {
        updateTodo(state) {
            db.collection('todos').onSnapshot(function (todos) {
                var newTodos = [];

                if (todos.docs.length > 0) {
                    todos.docs.forEach((doc, index) => {
                        newTodos.push(doc.data());
                        newTodos[index].id = doc.id;
                    });
                    state.todos = newTodos;
                }
            });
        }
    },
    actions: {
        getTodo(context) {
            context.commit('updateTodo');
        }
    }
});

export default store;