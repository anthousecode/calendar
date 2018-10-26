<template>
  <v-container fluid>
    <v-date-picker
      ref="picker"
      v-model="date"
      reactive
      :show-current="isCurShow"
      @change="onChangeDate"
      full-width
    ></v-date-picker>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex';
  // import moment from 'moment';

  export default {
    data(){
      return{
        date: new Date().toISOString().substr(0, 10),
        isCurShow: true
      }
    },
    methods:{
      onChangeDate(){
        this.$store.commit('setChosenDate', this.date)
      }
    },
    computed:{
      ...mapGetters([
        'chosenDate'
      ])
    },
    watch:{
      chosenDate: function(newVal){
        this.date = newVal;
        // this.isCurShow = false
      }

    }
  }
</script>

<style scoped>

</style>
