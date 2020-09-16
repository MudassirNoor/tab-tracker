import Api from './Api'

//The credentials can consist of email and password.
//Axios will then make a post request to the 'register' endpoint with the given credentials
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
