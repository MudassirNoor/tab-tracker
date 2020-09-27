<template>
  <v-flex xs6 offset-xs3 justify-center>
    <panel title="Songs">
      <!--A vue for loop getting data-->
      <div v-for="song in songs" :key="song.title">
        {{song.title}} -
        {{song.artist}} -
        {{song.album}}
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
          album: ''
        }
      ]
    }
  },
  async mounted () {
    // Make request to backend to retrieve songs => Remember to have the .data portion at the end
    this.songs = (await SongService.getAllSongs()).data
  }
}
</script>

<style scoped>

</style>
