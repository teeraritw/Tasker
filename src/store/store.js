import Vue from 'vue';
import Vuex from 'vuex';

import db from '../config/firebaseConfig';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [

        ]
    },
    actions: {
        getTodo(context) {
            db.collection('todos').get().then(function(todos) {
                todos.docs.forEach((doc, index) => {
                    context.state.todos.push(doc.data());
                    context.state.todos[index].id = doc.id;
                });

                console.log(context.state.todos);
            });
        }
    }
});

export default store;