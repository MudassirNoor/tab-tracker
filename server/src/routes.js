const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  // When the register endpoint is hit, first the ControllerPolicy will validate email
  // Once validated the next function - AuthenticationController.register will be called
  app.post('/register', AuthenticationControllerPolicy.register,AuthenticationController.register)
}
