const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Article extends Model {}

Article.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category',
  }
);

module.exports = Article;