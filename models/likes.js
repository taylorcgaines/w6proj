'use strict';
module.exports = function(sequelize, DataTypes) {
  var likes = sequelize.define('likes', {
    userid: DataTypes.INTEGER,
    blabid: DataTypes.INTEGER
  });

  likes.associate = function(models) {
    likes.belongsTo(models.blabs, {
      foreignKey: 'blabid',
      as: 'Blab'
    })
    likes.belongsTo(models.users, {
      foreignKey: 'userid',
      as: 'User'
    })
  }
  return likes
}
