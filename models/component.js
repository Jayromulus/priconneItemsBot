'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class component extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      component.belongsTo(models.item)
      // component.hasMany(models.item, {
      //   foreignKey: 'itemId',
      //   as: 'item'
      // })
    }
  };
  component.init({
    itemId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    componentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'component',
  });
  return component;
};