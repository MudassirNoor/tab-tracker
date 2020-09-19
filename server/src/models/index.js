const fs = require('fs') // node way of accessing the file system
const path = require('path') // used for path functionalities like relative path, joining path, direct path etc
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

// Create a sequelize object with our database configuration
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// This will allow us to setup models easily
fs
  .readdirSync(__dirname) // read our current directory
  .filter((file) => // filter out the index file
  file !== 'index.js'
  )
  .forEach((file) => {
    // for each file we will declare a model and name the model
    const model = require(path.join(__dirname, file))(sequelize, Sequelize)
    db[model.name]  = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
