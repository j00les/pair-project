'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Account, { foreignKey: 'UserId' });
      User.hasOne(models.Profile, { foreignKey: 'UserId' });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Username cannot be empty',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: 'You must fill it with email format ex: (foo@bar.com)',
          },
          notEmpty: {
            msg: 'Email must be filled',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: {
            args: [[8]],
            msg: 'Password must be at least 8 characters',
          },
          notEmpty: {
            msg: 'Password must be filled',
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  User.addHook('beforeCreate', (user) => {
    user.role = 'user';
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });

  return User;
};
