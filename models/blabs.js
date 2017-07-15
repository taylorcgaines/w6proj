'use strict';
module.exports = function(sequelize, DataTypes) {
  var blabs = sequelize.define('blabs', {
    userid: DataTypes.INTEGER,
    body: DataTypes.TEXT
  });

  blabs.associate = function(models) {
    blabs.belongsTo(models.users, {
      as: 'User',
      foreignKey: 'userid'
    })
    blabs.hasMany(models.likes, {
      as: 'Likes',
      foreignKey: 'blabid',
    })
  }
  return blabs;
};
