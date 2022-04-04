const Sequelize = require("sequelize");

module.exports = class Car extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
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
        accident: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        accidentDetail: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        needFix: { 
          type: Sequelize.STRING(50),
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
        isRecommend: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        images: {
            type: Sequelize.STRING(500),
            allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Car",
        tableName: "car",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {}
};
