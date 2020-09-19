<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email"/>
    <br>
    <input type="password" name="password" v-model="password" placeholder="password"/>
    <br>
    <div class="error" v-html="error"/>
    <br>
    <button @click="register">Register</button>
  </div>
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
