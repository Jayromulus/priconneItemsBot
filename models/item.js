'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsToMany(item, {
        through: models.component,
        foreignKey: 'id',
        as: 'itemId'
      })
      item.belongsToMany(item, {
        through: models.component,
        foreignKey: 'id',
        as: 'componentId'
      })
      item.hasMany(models.component, {
        foreignKey: 'itemId'
      })

      // fix associations and figure them out from a diagram then use a secondary includes to get the items

      // item has many item as component???
      // but then how do you assign the amount that varies depending on the item that you are making?
      // does the amount ever vary?

      // item.hasMany(item, {
      //   foreignKey: 'itemId',
      //   as: 'component'
      // })
    }
  };
  item.init({
    name: DataTypes.STRING,
    grade: DataTypes.STRING
    // amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};
