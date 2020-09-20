<template>
  <v-toolbar dark fixed color="cyan" flat>
    <v-toolbar-title>
      <span class="home" @click="navigate({name: 'root'})">Tab Tracker</span>
    </v-toolbar-title>
    <!--TODO: Need To Implement -->
<!--    <v-toolbar-items>-->
<!--      <v-btn color="cyan" flat dark>Browser</v-btn>-->
<!--    </v-toolbar-items>-->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn dense dark flat color="cyan" @click = "navigate({name: 'register'})">Sign Up</v-btn>
      <v-btn dense dark flat color="cyan" @click = "navigate({name: 'login'})">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigate (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: gray;
}
</style>
