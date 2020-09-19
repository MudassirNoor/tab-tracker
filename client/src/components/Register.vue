<template>
  <v-layout column>
    <v-flex xs3 offset-xs3 align-self-center>
      <v-toolbar dense color="orange" elevation="2" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-text-field type="email" name="email" v-model="email" placeholder="email"/>
        <br>
        <v-text-field type="password" name="password" v-model="password" placeholder="password"/>
        <br>
        <div class="error" v-html="error"/>
        <br>
        <v-btn @click="register">Register</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// The authentication service is making a post request to the server
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      // The email and password is bounded by the v-model tags above in the input
      email: '',
      password: ''
    }
  },
  methods: {
    // The register function is called on clicking the register button
    // The @click parameter points to this function call
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
