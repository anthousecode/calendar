<template>
  <header>
    <div class="header_logo">
      <h1>Calendar</h1>
    </div>
    <nav>
      <ul class="header_nav">
        <li class="nav_item">
          <nuxt-link to="/calendar" class="nav_link">Calendar</nuxt-link>
        </li>
        <li class="nav_item">
          <nuxt-link to="/document" class="nav_link">Document</nuxt-link>
        </li>
        <li class="nav_item">
          <nuxt-link to="/notes" class="nav_link">Notes</nuxt-link>
        </li>
        <li class="nav_item">
          <nuxt-link to="tasks" class="nav_link">Tasks</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header{
    width: 100%;
  }
  .header_logo{
    width: 100%;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    width: 100%;
    background-color: #62829c;
  }
  .header_nav{
    width: 100%;
    /*padding: 0 20px;*/
    display: flex;
    justify-content: flex-start;
  }
  .nav_item{

  }
  .nav_link:hover,
  .nav_link.nuxt-link-active,
  .nav_link.nuxt-link-exact-active{
    background-color: #7fa5bf;
  }
  .nav_link{
    display: block;
    padding: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    transition: background-color .3s ease;
  }
 </style>
