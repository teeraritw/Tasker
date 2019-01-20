import Vue from 'vue';

// Filters
Vue.filter('snippet', function (val) {
    if (val.length > 100) {
        return val.slice(0, 100) + '...';
    } else {
        return val;
    }
});

Vue.filter('snippetTitle', function (val) {
    if (val.length > 35) {
        return val.slice(0, 35) + '...';
    } else {
        return val;
    }
});