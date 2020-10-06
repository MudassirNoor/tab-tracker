import Api from './Api'

// Song service for making Api calls to the backend
export default {
  getAllSongs () {
    return Api().get('song')
  },
  createSong (song) {
    return Api().post('song', song)
  },
  show (songId) {
    return Api().get(`song/${songId}`)
  },
  save (song) {
    return Api().put(`song/${song.id}`, song)
  }
}
