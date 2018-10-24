<template>
  <div class="error_content">

      <template v-if="error.statusCode">
        <h1>{{error.statusCode}}</h1>
        <h2>{{error.message}}</h2>
      </template>
      <h1 v-else>This page is not available</h1>
      <!--<nuxt-link to="/" class="link link__back">Go Back</nuxt-link>-->

  </div>
</template>

<script>
  export default {
    props:['error']
  }
</script>

<style scoped>
  .error_content{
    width: 100%;
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .link__back{
    margin-top: 50px;
  }
</style>
