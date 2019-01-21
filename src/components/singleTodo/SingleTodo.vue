<template>
    <div id='singleTodo'>
        <div id='todoWrapper' v-if='todo'>
            <h2>{{ todo.title }}</h2>
            <p>{{ todo.description }}</p>
            <p>Posted by: {{ todo.author }}</p>
            <p>Date: {{ todo.date }}</p>
        </div>
    </div>
</template>

<script>
import db from '../../config/firebaseConfig';

export default {
    data() {
        return {
            id: this.$route.params.id,
            todo: {}
        };
    },
    created() {
        db.collection('todos').get().then(data => {
            console.log(data);
            data.docs.forEach(doc => {
                if (this.id == doc.id) {
                    this.todo = doc.data();
                }
            });
        });
    }
}
</script>

<style scoped lang='scss'>
#todoWrapper {
    background: #fff;
    padding: 30px;
    margin: 10px auto;
    width: 800px;
    min-height: 200px;
}

h2 {
    color: #444;
    font-size: 30px;
}
</style>