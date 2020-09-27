<template>
  <v-layout>
    <v-flex xs4>
      <v-card>
        <panel title="CreateSong">
          <v-card-text>
            <v-form>
              <v-text-field placeholder="Title" v-model="song.title" ></v-text-field>
              <v-text-field placeholder="Artist" v-model="song.artist"></v-text-field>
              <v-text-field placeholder="Genre" v-model="song.genre" ></v-text-field>
              <v-text-field placeholder="Album" v-model="song.album"></v-text-field>
              <v-text-field placeholder="Album Image URL" v-model="song.albumImageURL"></v-text-field>
              <v-text-field placeholder="YouTube ID" v-model="song.youtubeId"></v-text-field>
            </v-form>
          </v-card-text>
        </panel>
      </v-card>
    </v-flex>
    <v-flex class="ml-2">
      <v-card>
        <panel title="Song Structure">
          <v-card-text>
            <v-form>
                <v-text-field placeholder="Tab" multi-line v-model="song.tab"></v-text-field>
                <v-text-field placeholder="Lyrics" multi-line v-model="song.lyrics"></v-text-field>
            </v-form>
          </v-card-text>
        </panel>
      </v-card>
      <v-btn color="cyan" @click="createSong">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from './Panel'
import SongService from '../services/SongService'
export default {
  components: {
    Panel
  },
  methods: {
    async createSong () {
      try {
        await SongService.createSong(this.song)
        await this.$router.push({name: 'song'})
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURL: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  }
}
</script>

<style scoped>

</style>
