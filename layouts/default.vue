<template>
  <div id="app">
    <v-app>
      <AppHeader/>
    </v-app>
  </div>
</template>

<script>
  import AppHeader from '~/components/Header.vue'
  // import DatePicker from '~/components/DatePicker.vue'

  export default {
    components: {
      AppHeader
      // DatePicker
    }
  }
</script>

<style>

</style>
