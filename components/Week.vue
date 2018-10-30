<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs1>
        <v-layout column class="grid-hour mt-5 pt-2">
          <v-flex xs1 class="grid-item hour__title"
                  v-for="hour in hours"
                  :key="hour">
            {{hour}}:00
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs3 v-for="day in 3" :key="day" class="day_column">
        <v-flex tag="h2">{{currentDay(day)}}</v-flex>
        <v-layout justify-start row>
          <v-flex class="date__item">{{currentDate(day)}}</v-flex>
          <v-flex class="date__item">{{currentMonth(day)}}</v-flex>
          <v-flex class="date__item">{{currentYear(day)}}</v-flex>
        </v-layout>
        <v-flex v-for="hour in hours"
                :key="hour"
                class="grid-item">
            some event
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'
  import moment from 'moment';

  export default {
   data(){
     return{
       hours: [8,9,10,11,12,13,14,15,16,17,18,19,20],
     }
   },
    methods: {
      currentDay(day){
        return moment(this.chosenDate).add(day-1, 'day').format('dddd');
      },
      currentDate(day){
        return moment(this.chosenDate).add(day-1, 'day').format('Do');
      },
      currentMonth(day){
        return moment(this.chosenDate).add(day-1, 'day').format('MMMM');
      },
      currentYear(day){
        return moment(this.chosenDate).add(day-1, 'day').format('YYYY');
      }
    },
    computed:{
      ...mapGetters([
        'chosenDate'
      ])
    }
  }
</script>

<style scoped>
  h2{
    font-size: 24px;
    font-weight: 700;
  }
  .date__item{
    flex-grow: initial;
    flex-shrink: initial;
    margin-right: 10px;
    font-weight: 600;
  }
  .day_column{
    margin-left: 3%;
    border-right: 1px solid #ccc;
  }
/*.hour__title{*/
  /*background-color: #F5F5F5;*/
/*}*/
.grid-item{
  display: flex;
  padding: 20px 10px;
  border-bottom: 1px solid #ccc;
}
</style>
