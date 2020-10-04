<template>
  <v-layout>
    <v-flex xs4>
      <v-card>
        <panel title="CreateSong">
          <v-card-text>
            <v-form>
              <v-text-field required :rules="[required]" placeholder="Title" v-model="song.title" ></v-text-field>
              <v-text-field required :rules="[required]" placeholder="Artist" v-model="song.artist"></v-text-field>
              <v-text-field required :rules="[required]" placeholder="Genre" v-model="song.genre" ></v-text-field>
              <v-text-field required :rules="[required]" placeholder="Album" v-model="song.album"></v-text-field>
              <v-text-field required :rules="[required]" placeholder="Album Image URL" v-model="song.albumImageURL"></v-text-field>
              <v-text-field required :rules="[required]" placeholder="YouTube ID" v-model="song.youtubeId"></v-text-field>
            </v-form>
          </v-card-text>
        </panel>
        <span class ="error" v-if="error" v-html="error"></span>
      </v-card>
    </v-flex>
    <v-flex class="ml-2">
      <v-card>
        <panel title="Song Structure">
          <v-card-text>
            <v-form>
                <v-textarea placeholder="Tab" v-model="song.tab"></v-textarea>
                <v-textarea placeholder="Lyrics" v-model="song.lyrics"></v-textarea>
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
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async createSong () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongService.createSong(this.song)
        await this.$router.push({name: 'song'})
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
