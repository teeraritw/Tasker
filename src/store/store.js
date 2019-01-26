import Vue from 'vue';
import Vuex from 'vuex';

import { db, auth } from '../config/firebaseConfig';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [],
        currentTab: null,
        user: {
            loggedIn: false,
            email: null
        }
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
            return state.user.loggedIn;
        },
        getUserEmailName(state) {
            let email = state.user.email;
            return (email.charAt(0).toUpperCase() + email.substring(1, email.indexOf('@')));
        },
        getUserEmailSliced(state) {
            return state.user.email.substring(0,1).toUpperCase();
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
        // Update auth status depending on auth,
        updateLoggedInStatus(state) {
            auth.onAuthStateChanged(user => {
                if (user != null) {
                    state.user.email = user.email;
                    state.user.loggedIn = true;
                } else {
                    state.user.email = null;
                    state.user.loggedIn = false;
                }
            });
        }
    },
    actions: {
        updateTodo(context) {
            context.commit('updateTodo');
        },
        setCurrentTab(context, newTab) {
            context.commit('updateCurrentTab', newTab);
        },
        updateLoggedInStatus(context) {
            context.commit('updateLoggedInStatus');
        }
    }
});

export default store;
