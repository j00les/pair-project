'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, { foreignKey: 'UserId' });
    }

    get title() {
      if (this.gender === 'male') {
        return `Mr. ${this.name}`;
      } else {
        return `Ms. ${this.name}`;
      }
    }
  }
  Profile.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      gender: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Profile',
    }
  );
  return Profile;
};
