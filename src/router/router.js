import Todo from '../components/todo/Todo.vue';
import AllTodo from '../components/allTodo/AllTodo.vue';
import AddTodo from '../components/addTodo/AddTodo.vue';
import SingleTodo from '../components/singleTodo/SingleTodo.vue';

export default [
    { path: '/', component: Todo },
    { path: '/todos', component: AllTodo },
    { path: '/add', component: AddTodo },
    { path: '/todos/:id', component: SingleTodo }
];