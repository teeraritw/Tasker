import Todo from '../components/todo/Todo.vue';
import AllTodo from '../components/allTodo/AllTodo.vue';

export default [
    { path: '/', component: Todo },
    { path: '/todos', component: AllTodo }
];