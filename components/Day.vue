<template>
    <v-container fluid>
      <v-flex tag="h2">{{currentDay}}</v-flex>
      <v-layout justify-start row >
        <v-flex class="date__item">{{currentDate}}</v-flex>
        <v-flex class="date__item">{{currentMonth}}</v-flex>
        <v-flex class="date__item">{{currentYear}}</v-flex>
      </v-layout>
      <v-layout row class="grid-hour"
                v-for="hour in hours"
                :key="hour">
        <v-flex xs1 class="hour__title" >
          {{hour}}:00
        </v-flex>
        <v-flex xs11 class="hour__events"></v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'
  import moment from 'moment';

  export default {
    data(){
      return {
        hours: [8,9,10,11,12,13,14,15,16,17,18,19,20]
      }
    },
    computed:{
      ...mapGetters([
        'chosenDate'
      ]),
      currentDay(){
        return moment(this.chosenDate).format('dddd');
      },
      currentDate(){
        return moment(this.chosenDate).format('Do');
      },
      currentMonth(){
        return moment(this.chosenDate).format('MMMM');
      },
      currentYear(){
        return moment(this.chosenDate).format('YYYY');
      }
    }

  }
</script>

<style scoped>
h2{
  font-size: 24px;
  font-weight: 700;
}
.grid-hour{
  display: flex;
  border-bottom: 1px solid #ccc;
}
.grid-hour > *{
  padding: 20px 10px;
}
.date__item{
  flex-grow: initial;
  flex-shrink: initial;
  margin-right: 10px;
  font-weight: 600;
}
</style>
