<template>
  <div id="app">
    <v-app>
      <AppHeader/>
        <v-layout tag="main" row>
          <v-flex tag="aside"xs12 sm5 md4 lg3>
              <DatePicker/>
          </v-flex>
          <v-flex class="page" xs12 sm7 md8 lg9>
            <nuxt/>
          </v-flex>
        </v-layout>
    </v-app>
  </div>
</template>

<script>
  import AppHeader from '~/components/Header.vue'
  import DatePicker from '~/components/DatePicker.vue'

  export default {
    components: {
      AppHeader,
      DatePicker
    }
  }
</script>

<style>
  body {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: #35495e;
    letter-spacing: 1px;
  }
  h1{
    font-size: 2.5em;
    font-weight: 700;
  }
  main{
    margin-top: 64px;
    /*background: url(../static/main-bg.jpg);*/
    background: linear-gradient(45deg, #6b4888, #4c96a1, #48625f);
  }
  .link{
    color: #35495e;
    font-size: 18px;
    font-style: italic;
    text-decoration: underline;
    transition: all .3s ease;
    cursor: pointer;
  }
  .link:hover{
    color: #2ddaa6;
  }

  /*Date picker customize*/
  .v-picker .theme--light.v-picker__body{
    background: rgba(255,255,255,.15);
  }
  @media screen and (max-width: 600px){
    main.layout.row {
      flex-direction: column;
    }
  }
</style>
