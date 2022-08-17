"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Account, { foreignKey: "UserId" });
      User.hasOne(models.Profile, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  // Incubator.addHook("beforeCreate", (incubator) => {
  //   const intl = `1992-A-${new Date().getTime()}`;
  //   const nat = `1994-B-${new Date().getTime()}`;
  //   const prov = `1996-C-${new Date().getTime()}`;

  //   return incubator.level === "International"
  //     ? (incubator.code = intl)
  //     : incubator.level === "National"
  //     ? (incubator.code = nat)
  //     : (incubator.code = prov);
  // });

  return User;
};
