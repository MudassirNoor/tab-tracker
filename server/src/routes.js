const AuthenticationController = require('./controllers/AuthenticationController')
const SongController = require('./controllers/SongController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  // When the register endpoint is hit, first the ControllerPolicy will validate email
  // Once validated the next function - AuthenticationController.register will be called
  app.post('/register', AuthenticationControllerPolicy.validateEmailAndPassword, AuthenticationController.register)
  app.post('/login', AuthenticationControllerPolicy.validateEmailAndPassword, AuthenticationController.login)
  app.get('/song', SongController.getSongs)
  app.post('/song', SongController.createSong)
  app.get('/song/:songId', SongController.showSong)
  app.put('/song/:songId', SongController.saveSong)
}
