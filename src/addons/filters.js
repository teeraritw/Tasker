import Vue from 'vue';
import moment from 'moment';

// Filters
Vue.filter('snippet', function (val) {
    if (val.length > 100) {
        return val.slice(0, 100) + '...';
    } else {
        return val;
    }
});

Vue.filter('snippetTitle', function (val) {
    if (val.length > 25) {
        return val.slice(0, 25) + '...';
    } else {
        return val;
    }
});

Vue.filter('fromNow', function(date) {
    return moment(date).fromNow();
});

Vue.filter('formatToDate', function(date) {
    return moment(date).calendar();
});