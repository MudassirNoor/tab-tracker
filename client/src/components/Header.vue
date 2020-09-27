<template>
  <v-toolbar dark fixed color="cyan" flat>
    <v-toolbar-title>
      <span class="home" @click="navigate({name: 'root'})">Tab Tracker</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <!-- Both buttons are configured to be disabled if the user is logged in-->
      <v-btn dense dark color="cyan"
             @click = "navigate({name: 'song'})">Browse</v-btn>
      <v-btn dense dark color="cyan"
             v-if="!$store.state.isUserLoggedIn"
             @click = "navigate({name: 'register'})">Sign Up</v-btn>
      <v-btn dense dark color="cyan"
             v-if="!$store.state.isUserLoggedIn"
             @click = "navigate({name: 'login'})">Login</v-btn>
      <v-btn dense dark color="cyan"
             v-if="$store.state.isUserLoggedIn"
             @click = "logout()">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigate (route) {
      this.$router.push(route)
    },
    async logout () {
      await this.$store.dispatch('setToken', null)
      await this.$store.dispatch('setUser', null)
      await this.$router.push({ name: 'root' })
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
