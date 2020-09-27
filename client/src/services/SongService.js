import Api from './Api'

// Song service for making Api calls to the backend
export default {
  getAllSongs () {
    return Api().get('song')
  }
}
