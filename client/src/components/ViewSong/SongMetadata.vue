<!--Song Metadata component-->
<template>
  <v-flex>
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
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
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
