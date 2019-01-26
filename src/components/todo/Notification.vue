<template>
    <div id='notification'>
        <ul>
            <li v-for='notification in getSimplifiedNotifications'>
                <p>{{ moment(notification.time.toDate()).fromNow() }} - {{ notification.user }} {{ notification.content }}</p>
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
    width: 800px;
    height: 300px;
    background: #fff;
}
</style>