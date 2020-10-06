<template>
  <v-flex>
    <panel :title="panelName">
      <textarea readonly v-model="tabData"></textarea>
    </panel>
  </v-flex>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'tabData',
    'panelName'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
textarea {
  width: 80%;
  font-family: monospace;
  height: 330px;
  border: none transparent;
  overflow: auto;
  padding: 40px;
}
</style>
