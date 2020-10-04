<!-- This will allow to create a template for v-toolbar we have created in all three pages-->
<!-- The slot section is where we include the customization for each page within the Panel tag in those pages.-->
<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song Metadata">
        <br>
        <v-layout>
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-album">
              {{song.album}}
            </div>
          </v-flex>
          <v-flex xs6>
            <img class="song-album-image" :src="song.albumImageURL">
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <panel title="Tabs">
        {{song.tab}}
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },
  components: {
    Panel
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-album-image {
  width: 70%;
  margin: 0 auto;
}
.song-title {
  font-size: 24px;
}
.song-album {
  font-size: 15px;
}
.song-artist {
  font-size: 24px;
}
</style>
