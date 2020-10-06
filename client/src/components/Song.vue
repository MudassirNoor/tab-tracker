<template>
  <v-flex xs6 offset-xs3 justify-center>
    <panel title="Songs">
      <!--We are referencing the slot in the panel-->
      <v-btn
        slot="action"
        color="cyan accent-2"
        @click="navigate({name: 'song-create'})"
        light
        medium
        absolute
        right
        middle
        fab>
        <v-icon>add</v-icon>
      </v-btn>
      <!--A vue for loop getting data-->
      <div class="song" v-for="song in songs" :key="song.title">
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
            <v-btn
              color="cyan"
              @click="navigate({name: 'view-song', params: {songId: song.id}})">
              View Song
            </v-btn>
          </v-flex>
          <v-flex xs6>
            <img class="song-album-image" :src="song.albumImageURL">
          </v-flex>
        </v-layout>
      </div>
    </panel>
  </v-flex>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: [
        {
          // This data will be populated from the backend
          title: '',
          artist: '',
          album: '',
          albumImageURL: ''
        }
      ]
    }
  },
  async mounted () {
    // Make request to backend to retrieve songs => Remember to have the .data portion at the end
    this.songs = (await SongService.getAllSongs()).data
  },
  methods: {
    navigate (path) {
      this.$router.push(path)
    }
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
