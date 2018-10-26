<template>
  <v-tabs
    v-model="active"
    color="white"
    light
    slider-color="primary"
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

</style>
