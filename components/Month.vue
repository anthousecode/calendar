<template>
  <v-container fluid>
      <div class="grid-calendar">
        <div class="calendar__header">
          <v-btn flat icon @click="subtractMonth">
            <v-icon>arrow_back_ios</v-icon>
          </v-btn>
          <h2>
            {{month + ' - ' + year}}
          </h2>
          <v-btn flat icon @click="addMonth">
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
        </div>
        <v-layout class="calendar-week-header">
          <v-flex xs12 class="grid-cell" v-for="day in days" :key="day">
            <div>
              <div><span>{{day}}</span></div>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap  class="calendar-grid">
          <div class="grid-cell previous-month" v-for="(blank, index) in firstDayOfMonth" :key="index">
            <div>
              <div>
                <span>{{daysInPrevMonth - (firstDayOfMonth - blank)}}</span>
              </div>
            </div>
          </div>
          <div
            :class="{'grid-cell': true}"
            v-for="date in daysInMonth"
          >
            <div>
              <div><span>{{date}}</span></div>
            </div>
          </div>
          <div class="grid-cell next-month" v-for="blank in lastDayOfMonth">
            <div>
              <div>
                <span>{{blank}}</span>
              </div>
            </div>
          </div>
        </v-layout>
      </div>
  </v-container>
</template>

<script>
  import moment from 'moment';

  export default {
    data(){
      return{
        today: moment(),
        dateContext: moment(),
        days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
      }
    },
    computed:{
      year() {
        return this.dateContext.format('Y');
      },
      month() {
        return this.dateContext.format('MMMM');
      },
      daysInMonth() {
        return this.dateContext.daysInMonth();
      },
      daysInPrevMonth() {
        return moment(this.dateContext).subtract(1, 'month').daysInMonth();
      },
      currentDate() {
        return this.dateContext.get('date');
      },
      firstDayOfMonth() {
        let firstDay = moment(this.dateContext).subtract((this.currentDate), 'days');
        return firstDay.weekday();
      },
      lastDayOfMonth() {
        // let lastDay = moment(this.dateContext).add((this.currentDate), 'days');
        let lastDay = moment(this.dateContext).endOf('month').weekday();
        return 7 - lastDay;
      },
      initialDate() {
        return this.today.get('date');
      },
      initialMonth() {
        return this.today.format('MMMM');
      },
      initialYear() {
        return this.today.format('Y');
      }
    },
    methods: {
      addMonth() {
        this.dateContext = moment(this.dateContext).add(1, 'month');
      },
      subtractMonth() {
        this.dateContext = moment(this.dateContext).subtract(1, 'month');
      }
    },
    filters:{
      reverse: function(value) {
        return value.slice().reverse();
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  *:before {
    box-sizing: border-box;
  }

  *:after {
    box-sizing: border-box;
  }

  $min-width: 320px;
  $number-of-days: 7;
  $column-width: percentage(1/$number-of-days);

  .calendar__header{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-calendar {
    min-width: $min-width;
    box-shadow: -5px 5px 25px 5px rgba(84, 104, 115, 0.12);

    .calendar-grid .grid-cell {
      background-color: #cbcbcb;
      border: 1px solid #fff;

      &:hover {
        background-color: #d8d8d8;
      }
    }
    /*.calendar-week-header{*/
      /*background-color: #aaf9ff;*/
    /*}*/
    .calendar-week-header .grid-cell > div > div {
      padding: 10px 0;
      height: auto;
    }
    .calendar-week-header .grid-cell > div{
      justify-content: center;
    }

    .grid-cell {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 1px;
      padding: 0;
      position: relative;
      width: $column-width;
      cursor: pointer;
      transition: background-color .25s ease;

      &.previous-month {
        background-color: #ece9e9;
      }
      &.previous-month:hover {
        background-color: #ece9e9;
      }
      &.next-month {
        background-color: #ece9e9;
      }
      &.next-month:hover {
        background-color: #ece9e9;
      }
      > div {
        display: flex;
        justify-content: flex-start;
        width: 100%;

        > div {
          height: 0;
          padding: 10% 10% 80%;

          >span{
            font-weight: 700;
          }
        }
      }
    }
  }
  h2{
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    padding: 20px 0;
    margin: 0 20px;
  }

</style>
