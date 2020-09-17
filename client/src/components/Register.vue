<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"/>
    <br>
    <button>Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //The email and password is bounded by the v-model tags above in the input
      email: 'placeholderText',
      password:'placeholderText'
    }
  },
  watch: {
    email(value) {
      console.log('email has changed', value) //Test code, try changing the entry in the email box and open dev tool
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {*/
/*  font-weight: normal;*/
/*}*/
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
/*a {*/
/*  color: #42b983;*/
/*}*/
</style>
