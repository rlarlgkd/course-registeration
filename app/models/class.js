const Sequelize = require('sequelize');

module.exports = class Class extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            subject: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            room: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            grade: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
            },
            capacity: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
            },
            leftover: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
            },
            active: {
                // this works?? or should i change to 1 instead?
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Class',
            tableName: 'classes',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
          });
    }

    static associate(db) {
        db.Class.belongsToMany(db.User, { through: "Apply"});
    }
}