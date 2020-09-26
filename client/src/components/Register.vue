<template>
  <v-flex xs6 offset-xs3 justify-center>
    <v-card>
      <v-toolbar flat dense color="cyan" elevation="2" dark>
        <v-toolbar-title>Register</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field type="email" name="email" v-model="email" placeholder="email"/>
          <v-text-field type="password" name="password" v-model="password" placeholder="password"/>
          <div class="error" v-html="error"/>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="cyan" @click="register">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
// The authentication service is making a post request to the server
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      // The email and password is bounded by the v-model tags above in the input
      email: '',
      password: '',
      error: ''
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
  color: white;
}
</style>
