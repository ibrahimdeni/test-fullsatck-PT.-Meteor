"use strict";
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //profile belongs to a user
      profile.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userId",
        },
      });
    }
  }
  profile.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};
