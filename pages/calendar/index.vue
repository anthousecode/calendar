<template>
  <div>
    <Month />
  </div>
</template>

<script>
  import Month from '~/components/Month.vue'
  export default {
    components:{
      Month
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
