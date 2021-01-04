const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class message extends Model {}

  message.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    sender: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};
