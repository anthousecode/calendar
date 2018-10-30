<template>
  <v-tabs
    v-model="active"
    color="primary"
    dark
    slider-color="white"
    class="mt-4"
  >
    <v-tab>Day</v-tab>
    <v-tab-item>
      <Day />
    </v-tab-item>

    <v-tab>3 days</v-tab>
    <v-tab-item>
      <Week />
    </v-tab-item>

    <v-tab>Month</v-tab>
    <v-tab-item>
      <Month />
    </v-tab-item>
  </v-tabs>
</template>

<script>
  import Month from '~/components/Month.vue'
  import Week from '~/components/Week.vue'
  import Day from '~/components/Day.vue'
  export default {
    layout: 'calendar',
    components:{
      Month,
      Week,
      Day
    },
    data(){
      return{
        active: null
      }
    }
  }
</script>

<style scoped>
.v-window-item{
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
}
</style>
