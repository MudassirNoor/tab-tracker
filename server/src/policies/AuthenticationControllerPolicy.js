const Joi = require('joi')

module.exports = {
  // @param req is request received
  // @param res the response to send
  // @param next is used to call the next function in line defined in routes.js for the register endpoint
  register (req, res, next) {
    // The schema is a Joi object which has an API to for validating
    const schema = Joi.object({
      email: Joi.string().email(), // email must be string
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$') // password must be string between 8 and 32 characters with no special characters
      )
    })

    const {error, value} = schema.validate(req.body) // req.body consists of the data sent through the request, i.e email and password

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: "You must provide a valid email address"
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, and numbers
            <br>
            2. It must be at least 8 characters in length and not greater than 32 characters`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next() // No errors found, so call the AuthenticationController.register
    }
  }
}
