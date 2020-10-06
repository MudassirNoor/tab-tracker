<template>
  <v-flex>
    <panel title="Youtube Video">
      <br>
      <youtube :video-id="youtubeId" :player-width="550" :player-height="330"/>
    </panel>
  </v-flex>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
