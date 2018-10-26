<template>
  <div :class="{'current-day': isCurDate,
                'day-in-month': true }">
    <div><span>{{date}}</span></div>
  </div>
</template>

<script>
  export default {
    props:{
      date:{
        type: Number
      },
      isCurDate:{
        type: Boolean
      }
    }
  }
</script>

<style scoped>
  .day-in-month > div {
    height: 0;
    padding: 10% 10% 80%;
  }
  .day-in-month > div > span{
    font-weight: 700;
  }
  .current-day{
    background-color: #97eacc;
  }
  @media screen and (max-width: 600px){
    .day-in-month > div > span{
      font-size: 12px;
    }
  }
</style>
