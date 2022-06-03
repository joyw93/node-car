const Sequelize = require("sequelize");

module.exports = class Car extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        brand: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        model: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        odo: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        fuel: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        color: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        isRented: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        options: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        isAccident: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        accidentDetail: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        isNeedFix: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        needFixDetail: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        regions: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        feature: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        dealerRecommend: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        images: {
          type: Sequelize.STRING(500),
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        predictedPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Car",
        tableName: "cars",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {}
};
