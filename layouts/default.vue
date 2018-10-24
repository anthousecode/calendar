<template>
  <div>
    <AppHeader/>
    <nuxt/>
  </div>
</template>

<script>
  import AppHeader from '~/components/Header.vue'

  export default {
    components: {
      AppHeader
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
</style>
