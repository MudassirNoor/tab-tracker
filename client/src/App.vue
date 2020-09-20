<template>
  <div id="app">
    <!--Needs v-app wrapping to ensure Veutify works properly -->
    <v-app>
      <v-main>
        <page-header/>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-toolbar__title {
  color:  white;
}

.v-btn__content {
  color: white;
}
</style>
