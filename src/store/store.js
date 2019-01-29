import Vue from 'vue';
import Vuex from 'vuex';

import { db, auth } from '../config/firebaseConfig';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [],
        notifications: [],
        currentTab: null,
        user: {
            loggedIn: false,
            email: null
        }
    },
    getters: {
        //***** * TODOS GETTERS * *********//
        getTodos(state) {
            return state.todos;
        },
        getSimplifiedTodos(state) {
            return state.todos.slice(0,4);
        },

        //***** * NOTIFICATION GETTERS * *********//
        getNotification(state) {
            return state.notifications;
        },
        getSimplifiedNotifications(state) {
            return state.notifications.slice(0,6);
        },

        //***** * TAB GETTERS * *********//
        getCurrentTab(state) {
            return state.currentTab;
        },

        //***** * AUTH GETTERS * *********//
        getLoggedInStatus(state) {
            return state.user.loggedIn;
        },

        //***** * EMAIL GETTERS * *********//
        getUserEmailName(state) {
            let email = state.user.email;
            return (email.charAt(0).toUpperCase() + email.substring(1, email.indexOf('@')));
        },
        getUserEmailInitial(state) {
            let email = state.user.email;
            return email.charAt(0).toUpperCase() + email.charAt(email.indexOf('@') - 1).toUpperCase();
        }
    },
    mutations: {
        // Update state.todos if the todos inside the database updates
        updateTodo(state) {
            db.collection('todos').orderBy('date', 'desc').onSnapshot(function (todos) {
                var newTodos = [];

                if (todos.docs.length > 0) {
                    todos.docs.forEach((doc, index) => {
                        newTodos.push(doc.data());
                        newTodos[index].id = doc.id;
                    });
                }

                state.todos = newTodos;
            });
        },
        // Set current tab to anything
        updateCurrentTab(state, newTab) {
            state.currentTab = newTab;
        },
        // Update auth status depending on auth
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
        },
        // Update notifications if database updates 
        updateNotifications(state) {
            db.collection('notifications').orderBy('time', 'desc').onSnapshot(notifications => {
                let newNotifications = [];
                notifications.docs.forEach(doc => {
                    newNotifications.push(doc.data());
                });

                state.notifications = newNotifications;
            });
        },
        // After todo has been deleted
        deleteTodo(state) {
        }
    },
    actions: {
        updateTodo(context) {
            context.commit('updateTodo');
        },
        deleteTodo(context, todoId) {
            db.collection('todos').doc(todoId).delete().then(() => {
                context.commit('deleteTodo');
            });
        },
        setCurrentTab(context, newTab) {
            context.commit('updateCurrentTab', newTab);
        },
        updateLoggedInStatus(context) {
            context.commit('updateLoggedInStatus');
        },
        updateNotifications(context) {
            context.commit('updateNotifications');
        }
    }
});

export default store;
