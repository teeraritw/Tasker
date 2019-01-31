<template>
    <div id='todo'>
        <div id='todoComponents'>
            <div>
                <h2 class='header'>TODO LIST</h2>
                <TodoList></TodoList>
            </div>
            <div>
                <h2 class='header'>NOTIFICATION</h2>
                <Notification></Notification>
            </div>        
        </div>
    </div>
</template>

<script>
import TodoList from './TodoList.vue';
import Notification from './Notification.vue';

export default {
    components: {
        TodoList,
        Notification
    },
    data() {
        return {

        };
    },
    beforeCreate() {
        document.body.className = 'todo';
    }
}
</script>

<style scoped lang='scss'>
#todoComponents {
    margin: 50px 0;
    display: flex;
    justify-content: center;

    div {
        margin: 0 20px;
    }

    div > h2 {
        font-size: 32px;
        position: relative;
        top: 30px;
        left: 20px;
    }
}

@media only screen and (max-width: 1130px) {
  #todoComponents {
    flex-direction: column;

    > div {
        margin: 0 auto;
        width: 60%;

        h2.header {
            font-size: 32px;
        }
    }

    #todoList {
        width: auto;
    }

    #notification {
        width: auto;
    }
  }
}

@media only screen and (max-width: 768px) {
    #todoComponents {
        > div {
            width: 100%;
        }
    }
}
</style>