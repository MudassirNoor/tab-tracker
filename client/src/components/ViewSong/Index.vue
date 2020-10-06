<!-- This will allow to create a template for v-toolbar we have created in all three pages-->
<!-- The slot section is where we include the customization for each page within the Panel tag in those pages.-->
<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"></song-metadata>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <tab :tab-data="song.tab" :panel-name="'Tab'"></tab>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6>
        <Youtube :youtube-id="song.youtubeId"></Youtube>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <tab :tab-data="song.lyrics" :panel-name="'Lyrics'"></tab>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import Youtube from './Youtube'
import Tab from './Tab'

export default {
  data () {
    return {
      song: {}
    }
  },
  components: {
    Tab,
    SongMetadata,
    Panel,
    Youtube
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
  }
}
</script>

<style scoped>

</style>
