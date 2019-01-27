<template>
    <div id='notification'>
        <ul>
            <li v-for='notification in getSimplifiedNotifications'>
                <span class='user'>{{ notification.user }}</span> 
                <span class='content'>{{ notification.content }}</span>
                <span class='date'>{{ moment(notification.time.toDate()).fromNow() }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {

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
    }
};
</script>

<style scoped lang='scss'>
#notification {
    width: 450px;
    height: 300px;
    background: #fff;
    overflow: hidden;
    padding: 10px;
}

ul {
    list-style-type: none;
    padding-right: 20px;
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
</style>