<!-- This will allow to create a template for v-toolbar we have created in all three pages-->
<!-- The slot section is where we include the customization for each page within the Panel tag in those pages.-->
<template>
  <v-flex>
    <v-toolbar flat dense color="cyan" elevation="2" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action"></slot> <!--We can add anything to this slot by referencing the name of this slot-->
    </v-toolbar>
    <div>
      <slot>No slot content defined</slot>
    </div>
  </v-flex>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
