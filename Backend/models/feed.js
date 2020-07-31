'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Feed.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    feedName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    feedLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now')
    }
  }, {
    sequelize,
    modelName: 'Feed',
  });
  return Feed;
};
