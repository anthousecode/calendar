<template>
  <header>
    <v-toolbar app>
      <div class="header_logo">
        <h1>Calendar</h1>
      </div>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <nuxt-link to="/calendar">Calendar</nuxt-link>
        </v-btn>
        <v-btn flat>
          <nuxt-link to="/document">Document</nuxt-link>
        </v-btn>
        <v-btn flat>
          <nuxt-link to="/notes">Notes</nuxt-link>
        </v-btn>
        <v-btn flat>
          <nuxt-link to="tasks">Tasks</nuxt-link>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer"
                         absolute
                         temporary
                          width="200">
      <v-list class="pt-0">
        <v-list-tile  to="/calendar">
          <v-list-tile-content>
            <v-list-tile-title>Calendar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/document">
          <v-list-tile-content>
            <v-list-tile-title >Document</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/notes">
          <v-list-tile-content>
            <v-list-tile-title >Notes</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/tasks">
          <v-list-tile-content>
            <v-list-tile-title >Tasks</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
  export default {

    data(){
      return{
        drawer: false
      }
    }
  }
</script>

<style scoped>


 </style>
