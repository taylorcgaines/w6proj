'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  })

  users.associate = function(models) {
    users.hasMany(models.blabs, {
      foreignKey: 'userid', as: "Blabs"
    })
    users.hasMany(models.likes, {
      foreignKey: 'userid', as: "Likes"
    })
  }
  return users;
}
