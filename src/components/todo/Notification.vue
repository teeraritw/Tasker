<template>
    <div id='notification'>
        <div id='fadeList'></div>
        <ul>
            <li v-for='notification in getSimplifiedNotifications'>
                <span class='user'>{{ notification.name }}</span> 
                <span class='content'>{{ notification.content }}</span>
                <span class='date'>{{ notification.time.toDate() | fromNow }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            interval: null
        };
    },
    methods: {
        moment() {
            return moment();
        }
    },
    computed: {
        ...mapGetters([
            'getSimplifiedNotifications'
        ])
    },
    created() {
        this.interval = setInterval(() => {
            this.$forceUpdate();
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    }
};
</script>

<style scoped lang='scss'>
#notification {
    position: relative;
    width: 450px;
    height: 300px;
    background: #fff;
    overflow: hidden;
    padding: 10px;
}

ul {
    list-style-type: none;
    padding: 0 20px;
}

li {

    margin: 20px 0;

    span {
        display: inline-block;
    }
    .content {
        color: #333;
    }
    .user {
        color: #88cc00;
    }
    .date {
        display: block;
        margin: 2px;
        color: #666;
    }
}

@media only screen and (max-width: 500px) {
    li span {
        font-size: 16px;
    }
    
}

@media only screen and (max-width: 425px) {
    li span {
        font-size: 15px;
    }
}
</style>