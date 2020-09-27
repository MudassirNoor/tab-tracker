<template>
  <v-flex xs6 offset-xs3 justify-center>
    <v-card>
      <Panel title="Login">
        <v-card-text>
          <v-form>
            <v-text-field placeholder="email" v-model="email" type="email" name="email"></v-text-field>
            <v-text-field placeholder="password" v-model="password" type="password" name="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="cyan" @click="login">Login</v-btn>
        </v-card-actions>
      </Panel>
    </v-card>
  </v-flex>
</template>

<script>
// The authentication service is making a post request to the server
import AuthenticationService from '../services/AuthenticationService'
import Panel from './Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      // The email and password is bounded by the v-model tags above in the input
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    // The login function is called on clicking the login button
    // The @click parameter points to this function call
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.user)
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
