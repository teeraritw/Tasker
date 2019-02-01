<template>
    <div id='singleTodo'>
        <div id='todoWrapper' v-if='todo'>
            <h2>{{ todo.title }}</h2>
            <p><span class='darkerText'>Description:</span> {{ todo.description }}</p>
            <p><span class='darkerText'>Posted by:</span> {{ todo.author }}</p>
            <p><span class='darkerText'>Date:</span> {{ todo.date.toDate() | formatToDate }}</p>
        </div>
    </div>
</template>

<script>
import { db } from '../../config/firebaseConfig';

export default {
    data() {
        return {
            id: this.$route.params.id,
            todo: null
        };
    },
    created() {
        db.collection('todos').get().then(data => {
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
    padding: 30px 60px;
    margin: 0 auto;
    margin-top: 80px;
    width: 800px;
}

h2 {
    margin: 15px 0;
    color: #444;
    font-size: 29px;
}

@media screen and (max-width: 800px) {
    #todoWrapper {
        width: 90%;
    }

    h2 {
        font-size: 28px;
    }

    p {
        font-size: 16px;
    }
}

@media screen and (max-width: 500px) {
    #todoWrapper {
        padding: 10px 20px;
    }
    h2 {
        font-size: 26px;
    }
    p {
        font-size: 15px;
    }
}

@media screen and (max-width: 450px) {
    h2 {
        font-size: 23px;
    }
    p {
        font-size: 14px;
    }
}
</style>
