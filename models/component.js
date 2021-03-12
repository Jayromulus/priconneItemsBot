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
      // I hate it here i hop everything burns down and i will feel nothing
      component.belongsTo(models.item, {
        foreignKey: 'componentId'
      })
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