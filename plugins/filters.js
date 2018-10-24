import Vue from 'vue'

Vue.filter('reverse', function(value) {
  return value.slice().reverse();
});
