const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class comic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.fs_comic.hasMany(models.fs_chapter);
    }
  }
  comic.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(256),
    },
    stub: {
      allowNull: false,
      type: DataTypes.STRING(256),
    },
  }, {
    sequelize,
    modelName: 'fs_comic',
    createdAt: 'created',
    updatedAt: 'updated',
  });
  return comic;
};
