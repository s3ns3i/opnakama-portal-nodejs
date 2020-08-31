const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.fs_chapter.belongsTo(models.fs_comic, { foreignKey: 'comic_id' });
    }
  }
  chapter.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    comic_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    chapter: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    subchapter: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    volume: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(256),
    },
  }, {
    sequelize,
    modelName: 'fs_chapter',
    createdAt: 'created',
    updatedAt: 'updated',
  });
  return chapter;
};
