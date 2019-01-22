import Vue from 'vue';
import Vuex from 'vuex';

import db from '../config/firebaseConfig';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [],
        currentTab: null
    },
    getters: {
        getTodos(state) {
            return state.todos;
        },
        getSimplifiedTodos(state) {
            return state.todos.slice(0,4);
        },
        getCurrentTab(state) {
            return state.currentTab;
        }
    },
    mutations: {
        updateTodo(state) {
            db.collection('todos').orderBy('negativeTime').onSnapshot(function (todos) {
                var newTodos = [];

                if (todos.docs.length > 0) {
                    todos.docs.forEach((doc, index) => {
                        newTodos.push(doc.data());
                        newTodos[index].id = doc.id;
                    });
                    state.todos = newTodos;
                }
            });
        },
        updateCurrentTab(state, newTab) {
            state.currentTab = newTab;
        }
    },
    actions: {
        getTodo(context) {
            context.commit('updateTodo');
        },
        setCurrentTab(context, newTab) {
            context.commit('updateCurrentTab', newTab);
        }
    }
});

export default store;