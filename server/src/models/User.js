const { Promise } = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

function hashPassword (user) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return;
  }

  return bcrypt.genSalt(SALT_FACTOR)
    .then((salt) => bcrypt.hash(user.password, salt, null))
    .then((hash) => user.setDataValue("password", hash)
  )
}

module.exports = (sequelize, DataTypes) => {
  // Assigning sequelize.define to a User object so we still have access to the user object
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
  }, {
    hooks: {
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }

  return User
}
