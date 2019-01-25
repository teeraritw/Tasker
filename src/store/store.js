import Vue from 'vue';
import Vuex from 'vuex';

import { db, auth } from '../config/firebaseConfig';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [],
        currentTab: null,
        loggedIn: false
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
        },
        getLoggedInStatus(state) {
            return state.loggedIn;
        }
    },
    mutations: {
        // Update state.todos if the todos inside the database updates
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
        },
        updateLoggedInStatus(state) {
            auth.onAuthStateChanged(user => {
                if (user != null) {
                    state.loggedIn = true;
                } else {
                    state.loggedIn = false;
                }
            });
        }
    },
    actions: {
        getTodo(context) {
            context.commit('updateTodo');
        },
        setCurrentTab(context, newTab) {
            context.commit('updateCurrentTab', newTab);
        },
        getLoggedInStatus(context) {
            context.commit('updateLoggedInStatus');
        }
    }
});

export default store;
